import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';
import { fadeIn, slideIn } from '../styles/animations';
import OpenAI from 'openai';
import ReactMarkdown from 'react-markdown';
import { lessonContent } from '../data/lessonfisca';

const MarkdownComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-xl font-bold mb-4">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-lg font-bold mb-3">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-md font-bold mb-2">{children}</h3>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-bold">{children}</strong>
  ),
  em: ({ children }: { children: React.ReactNode }) => (
    <em className="italic">{children}</em>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc pl-4 mb-4 space-y-1">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal pl-4 mb-4 space-y-1">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="mb-1">{children}</li>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-gray-100 rounded px-1 py-0.5 text-sm font-mono">{children}</code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-gray-100 rounded p-2 my-2 overflow-x-auto">{children}</pre>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 my-2 italic">{children}</blockquote>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-2">{children}</p>
  ),
};

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
  dangerouslyAllowBrowser: true
});

interface Message {
  id: string;
  content: string;
  role: 'assistant' | 'user';
}

interface ChatModeProps {
  subject: string;
  onBack: () => void;
}

export function ChatMode({ subject, onBack }: ChatModeProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentStreamedMessage, setCurrentStreamedMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Add initial greeting message
    const greetingMessage: Message = {
      id: 'greeting',
      content: `Bonjour ! 👋

Je suis votre assistant personnel spécialisé en fiscalité internationale. Je suis là pour vous accompagner dans vos révisions et répondre à toutes vos questions.

Vous pouvez me solliciter pour :
- Réviser des concepts spécifiques
- Obtenir des explications détaillées
- Analyser des cas pratiques
- Comprendre des exercices complexes

Quel aspect de la fiscalité internationale souhaitez-vous aborder aujourd'hui ?`,
      role: 'assistant'
    };
    setMessages([greetingMessage]);
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    scrollToBottom();
  }, [messages, currentStreamedMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setCurrentStreamedMessage('');

    try {
      const stream = await openai.chat.completions.create({
        model: 'meta-llama/llama-3.3-70b-instruct',
        messages: [
          {
            role: 'system',
            content: `Je suis votre assistant pédagogique spécialisé en Fiscalité Internationale des Entreprises. Mon rôle est de vous accompagner dans votre apprentissage en me basant exclusivement sur le contenu du cours suivant :

${lessonContent}

En tant qu'assistant pédagogique :
1. Je réponds uniquement aux questions liées au contenu du cours de Fiscalité Internationale des Entreprises, et je donne pas la réponse directement, mais plutot d'accompagner et d'essayer de comprendre le probleme et expliquer plutot que de fournir la réponse.
2. Mes réponses sont toujours brèves et concises et adresse directement le point de la demande.
3. J'utilise systématiquement les exemples et cas pratiques du cours pour illustrer mes explications
4. Je cite précisément les articles du CGI, la jurisprudence et les conventions fiscales pertinentes
5. Je vous guide dans la résolution des cas pratiques en décomposant le raisonnement étape par étape
6. Si une question sort du périmètre du cours, je l'indique clairement et recentre la discussion sur le contenu du cours


Mon objectif est de vous aider à maîtriser les concepts clés de la fiscalité internationale, notamment :
- Les critères de domiciliation fiscale en droit interne et conventionnel
- L'imposition des entreprises individuelles
- Les conventions fiscales et la double imposition
- Les cas pratiques et leur méthodologie de résolution`
          },
          ...messages.map(msg => ({
            role: msg.role,
            content: msg.content
          })),
          {
            role: 'user',
            content: input
          }
        ],
        stream: true,
        temperature: 0.7,
        "provider": {
          "order": [
            "Together",
            "Fireworks",
            
          ]
        },
        max_tokens: 2000
      });

      let fullResponse = '';

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || '';
        fullResponse += content;
        setCurrentStreamedMessage(prev => prev + content);
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: fullResponse,
        role: 'assistant'
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Désolé, une erreur s'est produite. Veuillez réessayer.",
        role: 'assistant'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setCurrentStreamedMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5EFE6] flex flex-col">
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="p-4 bg-[#D0B49F] shadow-md">
          <button
            onClick={onBack}
            className="text-white hover:text-gray-200 transition-colors"
          >
            ← Retour
          </button>
          <h2 className="text-xl font-semibold text-white mt-2">
            Discussion sur {subject}
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                variants={slideIn}
                initial="hidden"
                animate="visible"
                className={`flex items-start space-x-2 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-[#D0B49F] flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-[#D0B49F] text-white'
                      : 'bg-white text-[#4A4A4A] prose prose-sm max-w-none'
                  }`}
                >
                  {message.role === 'user' ? (
                    message.content
                  ) : (
                    <ReactMarkdown components={MarkdownComponents}>{message.content}</ReactMarkdown>
                  )}
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-[#4A4A4A] flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                )}
              </motion.div>
            ))}
            {currentStreamedMessage && (
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="flex items-start space-x-2 justify-start"
              >
                <div className="w-8 h-8 rounded-full bg-[#D0B49F] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="max-w-[70%] rounded-lg p-3 bg-white text-[#4A4A4A]">
                  {currentStreamedMessage}
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg">
          <div className="max-w-3xl mx-auto flex space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez votre question..."
              disabled={isLoading}
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D0B49F] disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#D0B49F] text-white p-2 rounded-lg hover:bg-[#B89F8D] transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}