import { Exercise } from '../types';

export const exercises: Record<string, Exercise[]> = {
  'Fiscalité internationales des entreprise': [
    {
      id: 1,
      title: "Calcul de la base imposable avec revenus mixtes",
      difficulty: 'easy',
      estimatedTime: '5 minutes',
      context: {
        background: `Un entrepreneur individuel résident fiscal français exploite deux commerces, l'un en France et l'autre dans un pays non conventionné.`,
        additionalInfo: [
          "Bénéfice du commerce en France : 75.000€",
          "Bénéfice du commerce à l'étranger : 35.000€",
          "Impôt payé à l'étranger : 8.000€"
        ]
      },
      calculations: {
        variables: {
          beneficeFrance: 75000,
          beneficeEtranger: 35000,
          impotEtranger: 8000
        },
        formulas: {
          beneficeEtrangerNet: "beneficeEtranger - impotEtranger",
          baseImposableTotale: "beneficeFrance + beneficeEtrangerNet"
        }
      },
      steps: [
        {
          id: 1,
          question: "Quelle est la base imposable totale en France ?",
          hints: [
            "Pensez à déduire l'impôt étranger du bénéfice étranger",
            "La base imposable comprend les revenus mondiaux",
            "L'impôt étranger est considéré comme une charge déductible"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "110.000€ (somme des deux bénéfices)",
              "102.000€ (75.000€ + 27.000€)",
              "75.000€ (uniquement le bénéfice français)"
            ],
            value: 1,
            explanation: "La base imposable totale est de 102.000€, car on doit additionner le bénéfice français (75.000€) et le bénéfice étranger net d'impôt (35.000€ - 8.000€ = 27.000€).",
            calculation: {
              formula: "beneficeFrance + (beneficeEtranger - impotEtranger)",
              variables: ["beneficeFrance", "beneficeEtranger", "impotEtranger"],
              result: 102000,
              intermediateSteps: [
                {
                  description: "Calcul du bénéfice étranger net",
                  formula: "beneficeEtranger - impotEtranger",
                  result: 27000
                },
                {
                  description: "Addition avec le bénéfice français",
                  formula: "beneficeFrance + beneficeEtrangerNet",
                  result: 102000
                }
              ]
            }
          },
          tools: {
            calculator: true,
            formulas: [
              "Bénéfice étranger net = Bénéfice étranger - Impôt étranger",
              "Base imposable totale = Bénéfice France + Bénéfice étranger net"
            ],
            variables: ["beneficeFrance", "beneficeEtranger", "impotEtranger"]
          }
        },
        {
          id: 2,
          question: "Comment doit-on traiter l'impôt payé à l'étranger ?",
          hints: [
            "L'impôt étranger peut être traité de différentes manières",
            "Pensez au principe de déductibilité des charges"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Il n'est pas pris en compte dans le calcul",
              "Il est déduit du bénéfice étranger avant addition",
              "Il est déduit du montant final de l'impôt français"
            ],
            value: 1,
            explanation: "L'impôt payé à l'étranger est considéré comme une charge déductible du bénéfice étranger. Il doit donc être soustrait du bénéfice étranger avant d'additionner ce dernier au bénéfice français.",
            calculation: {
              formula: "beneficeEtranger - impotEtranger",
              variables: ["beneficeEtranger", "impotEtranger"],
              result: 27000,
              intermediateSteps: [
                {
                  description: "Déduction de l'impôt étranger",
                  formula: "35000 - 8000",
                  result: 27000
                }
              ]
            }
          }
        },
        {
          id: 3,
          question: "Quelles déclarations l'entrepreneur doit-il faire ?",
          hints: [
            "Pensez aux obligations déclaratives spécifiques aux revenus étrangers",
            "Il existe des formulaires dédiés aux revenus étrangers"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Uniquement la déclaration 2042",
              "Uniquement la déclaration 2047",
              "Les déclarations 2042 et 2047"
            ],
            value: 2,
            explanation: "L'entrepreneur doit remplir deux déclarations : la 2042 pour l'ensemble de ses revenus (102.000€) et la 2047 pour déclarer spécifiquement ses revenus étrangers (35.000€) et l'impôt payé à l'étranger (8.000€)."
          }
        }
      ],
      conclusion: "Ce cas pratique illustre les principes fondamentaux de l'imposition des revenus mondiaux pour un résident fiscal français : la prise en compte de tous les revenus, la déductibilité de l'impôt étranger comme charge, et les obligations déclaratives spécifiques aux revenus étrangers."
    },
    {
      id: 2,
      title: "Détermination du taux effectif pour un non-résident",
      difficulty: 'easy',
      estimatedTime: '5 minutes',
      context: {
        background: `Un entrepreneur individuel italien (pays conventionné) a une exploitation en France et en Italie.`,
        additionalInfo: [
          "Bénéfice en France : 22.000€",
          "Bénéfice en Italie : 18.000€ (après impôt local)",
          "Seuil de la deuxième tranche : 26.070€",
          "Taux sans option : 20%",
          "Taux de la deuxième tranche du barème : 11%"
        ]
      },
      calculations: {
        variables: {
          beneficeFrance: 22000,
          beneficeItalie: 18000,
          seuilTranche: 26070,
          tauxSansOption: 20,
          tauxAvecOption: 11
        },
        formulas: {
          impotSansOption: "beneficeFrance × tauxSansOption",
          revenuTotal: "beneficeFrance + beneficeItalie",
          impotAvecOption: "beneficeFrance × tauxAvecOption"
        }
      },
      steps: [
        {
          id: 1,
          question: "Quel est le montant de l'impôt sans option pour le régime des résidents ?",
          hints: [
            "Appliquez le taux de 20% directement au revenu français",
            "Les revenus italiens ne sont pas pris en compte sans option"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "4.400€ (22.000€ × 20%)",
              "2.420€ (22.000€ × 11%)",
              "8.000€ (40.000€ × 20%)"
            ],
            value: 0,
            explanation: "Sans option pour le régime des résidents, le taux de 20% s'applique directement aux revenus de source française, soit 22.000€ × 20% = 4.400€.",
            calculation: {
              formula: "beneficeFrance × (tauxSansOption / 100)",
              variables: ["beneficeFrance", "tauxSansOption"],
              result: 4400,
              intermediateSteps: [
                {
                  description: "Application du taux de 20% au revenu français",
                  formula: "22000 × 20%",
                  result: 4400
                }
              ]
            }
          },
          tools: {
            calculator: true,
            formulas: [
              "Impôt sans option = Revenu français × 20%"
            ],
            variables: ["beneficeFrance", "tauxSansOption"]
          }
        },
        {
          id: 2,
          question: "Quel est le montant de l'impôt avec option pour le régime des résidents ?",
          hints: [
            "Le revenu total détermine la tranche applicable",
            "Le taux de 11% s'applique car le revenu total est inférieur à 26.070€"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "4.400€",
              "2.420€",
              "3.300€"
            ],
            value: 1,
            explanation: "Avec l'option, on prend en compte le revenu mondial (40.000€) pour déterminer le taux applicable. Comme ce montant est supérieur à 26.070€, le taux de 11% s'applique au revenu français : 22.000€ × 11% = 2.420€.",
            calculation: {
              formula: "beneficeFrance × (tauxAvecOption / 100)",
              variables: ["beneficeFrance", "beneficeItalie", "tauxAvecOption"],
              result: 2420,
              intermediateSteps: [
                {
                  description: "Calcul du revenu mondial pour déterminer le taux",
                  formula: "22000 + 18000",
                  result: 40000
                },
                {
                  description: "Application du taux de 11% au revenu français",
                  formula: "22000 × 11%",
                  result: 2420
                }
              ]
            }
          },
          tools: {
            calculator: true,
            formulas: [
              "Revenu mondial = Revenu français + Revenu italien",
              "Impôt avec option = Revenu français × 11%"
            ],
            variables: ["beneficeFrance", "beneficeItalie", "tauxAvecOption"]
          }
        },
        {
          id: 3,
          question: "Quelle option est la plus avantageuse ?",
          hints: [
            "Comparez les montants d'impôt des deux options",
            "Le choix le plus avantageux est celui qui minimise l'impôt"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Sans option (taux de 20%)",
              "Avec option (taux de 11%)",
              "Les deux options sont équivalentes"
            ],
            value: 1,
            explanation: "L'option pour le régime des résidents est plus avantageuse car elle conduit à un impôt de 2.420€, contre 4.400€ sans option, soit une économie de 1.980€.",
            calculation: {
              formula: "impotSansOption - impotAvecOption",
              variables: ["beneficeFrance", "tauxSansOption", "tauxAvecOption"],
              result: 1980,
              intermediateSteps: [
                {
                  description: "Impôt sans option",
                  formula: "22000 × 20%",
                  result: 4400
                },
                {
                  description: "Impôt avec option",
                  formula: "22000 × 11%",
                  result: 2420
                },
                {
                  description: "Économie réalisée",
                  formula: "4400 - 2420",
                  result: 1980
                }
              ]
            }
          },
          tools: {
            calculator: true,
            formulas: [
              "Économie = Impôt sans option - Impôt avec option"
            ],
            variables: ["beneficeFrance", "tauxSansOption", "tauxAvecOption"]
          }
        }
      ],
      conclusion: "Ce cas pratique illustre l'intérêt de l'option pour le régime des résidents lorsque le taux moyen d'imposition qui en résulte est inférieur au taux minimum de 20%. L'économie réalisée est significative (1.980€) et justifie pleinement l'exercice de l'option."
    },
    {
      id: 3,
      title: "Impact du lieu de résidence de la famille sur le foyer fiscal",
      difficulty: 'easy',
      estimatedTime: '5 minutes',
      context: {
        background: `Un cadre dirigeant français travaille pour une multinationale. Sa situation familiale et professionnelle est complexe avec des éléments répartis entre plusieurs pays.`,
        additionalInfo: [
          "Il travaille principalement à Singapour (9 mois par an)",
          "Sa femme et ses enfants vivent en France dans une résidence principale",
          "Il possède un appartement à Singapour où il séjourne pendant ses périodes de travail",
          "Ses revenus principaux sont versés à Singapour",
          "Il dispose d'un compte bancaire dans chaque pays"
        ]
      },
      steps: [
        {
          id: 1,
          question: "Quel est le critère déterminant pour établir son domicile fiscal ?",
          hints: [
            "Pensez à la hiérarchie des critères de l'article 4B du CGI",
            "La présence de la famille est un élément important",
            "Le lieu de perception des revenus n'est pas le critère principal"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Le lieu de séjour principal (Singapour - 9 mois)",
              "Le lieu de perception des revenus (Singapour)",
              "Le lieu où réside sa famille (France)",
              "Le lieu où il possède un compte bancaire"
            ],
            value: 2,
            explanation: "Le foyer, défini comme le lieu où le contribuable habite normalement avec sa famille, est le critère déterminant. Même si le contribuable séjourne principalement à Singapour pour son travail, le fait que sa famille réside en France établit son foyer fiscal en France."
          }
        },
        {
          id: 2,
          question: "Le fait qu'il passe 9 mois par an à Singapour peut-il remettre en cause sa résidence fiscale française ?",
          hints: [
            "Rappelez-vous que les critères de l'article 4B sont alternatifs",
            "Le caractère temporaire ou permanent du séjour est important",
            "La présence de la famille est un élément stable"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Oui, car il passe plus de 6 mois à Singapour",
              "Non, car le critère du foyer suffit à lui seul",
              "Oui, car ses revenus sont perçus à Singapour",
              "Non, car il a un compte bancaire en France"
            ],
            value: 1,
            explanation: "Non, la durée du séjour à Singapour ne remet pas en cause sa résidence fiscale française. Le critère du foyer (présence de la famille en France) suffit à lui seul pour établir la domiciliation fiscale en France, les critères étant alternatifs."
          }
        },
        {
          id: 3,
          question: "Si sa famille déménageait à Singapour, quel serait l'impact sur sa situation fiscale ?",
          hints: [
            "Le déplacement du foyer modifie la situation fiscale",
            "Les autres critères deviennent alors pertinents",
            "La durée de séjour prend plus d'importance"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Aucun impact car il travaillait déjà à Singapour",
              "Il deviendrait résident fiscal de Singapour",
              "Il resterait résident fiscal français",
              "Il aurait une double résidence fiscale"
            ],
            value: 1,
            explanation: "Si sa famille déménageait à Singapour, il deviendrait résident fiscal de Singapour car son foyer y serait établi, et ce critère serait renforcé par sa présence physique majoritaire (9 mois) et la perception de ses revenus dans ce pays."
          }
        }
      ],
      conclusion: "Ce cas illustre l'importance primordiale du critère du foyer dans la détermination de la résidence fiscale. La présence de la famille dans un pays établit généralement le foyer fiscal dans ce pays, indépendamment du temps passé ailleurs pour des raisons professionnelles. Cependant, le déplacement du foyer peut entraîner un changement complet de la situation fiscale."
    },
    {
      id: 4,
      title: "Application des critères conventionnels de résidence",
      difficulty: 'easy',
      estimatedTime: '5 minutes',
      context: {
        background: `Un entrepreneur a des activités dans deux pays conventionnés (France et Allemagne). Sa situation présente plusieurs points de rattachement dans les deux pays.`,
        additionalInfo: [
          "Il possède un appartement dans chaque pays",
          "Il a des activités commerciales dans les deux pays",
          "Sa famille (femme et enfants) réside en France",
          "Il a la nationalité allemande",
          "Il passe 6 mois dans chaque pays"
        ]
      },
      steps: [
        {
          id: 1,
          question: "Quel critère conventionnel doit être examiné en premier ?",
          hints: [
            "Les critères conventionnels s'appliquent dans un ordre précis",
            "Le premier critère concerne le lieu d'habitation",
            "La nationalité intervient plus tard"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "La nationalité",
              "Le foyer d'habitation permanent",
              "Le centre des intérêts économiques",
              "Le séjour habituel"
            ],
            value: 1,
            explanation: "Dans l'ordre d'application des critères conventionnels, le foyer d'habitation permanent est examiné en premier. Ce n'est qu'en cas d'impossibilité de déterminer le foyer d'habitation permanent qu'on passe aux critères suivants."
          }
        },
        {
          id: 2,
          question: "Dans ce cas, le premier critère est-il concluant ?",
          hints: [
            "Il possède un appartement dans chaque pays",
            "La présence de la famille est importante",
            "Le foyer permanent n'est pas seulement une question de propriété"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Oui, son foyer est en France car sa famille y réside",
              "Non, car il a deux habitations permanentes",
              "Oui, son foyer est en Allemagne car il en a la nationalité",
              "Non, car il passe autant de temps dans les deux pays"
            ],
            value: 0,
            explanation: "Bien qu'il possède deux habitations, le foyer d'habitation permanent est en France car c'est là que réside sa famille. La présence de la famille est un élément déterminant pour établir le caractère permanent du foyer."
          }
        },
        {
          id: 3,
          question: "Est-il nécessaire d'examiner les autres critères conventionnels ?",
          hints: [
            "Les critères s'appliquent dans un ordre hiérarchique",
            "Si un critère est concluant, on s'arrête là",
            "La nationalité n'est examinée qu'en dernier recours"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Oui, il faut examiner tous les critères",
              "Non, le premier critère étant concluant",
              "Oui, car il a la nationalité allemande",
              "Oui, car il passe 6 mois dans chaque pays"
            ],
            value: 1,
            explanation: "Non, il n'est pas nécessaire d'examiner les autres critères car le premier critère (foyer d'habitation permanent) est concluant. Les critères conventionnels s'appliquent de manière hiérarchique et on s'arrête dès qu'un critère permet de déterminer la résidence."
          }
        }
      ],
      conclusion: "Ce cas pratique illustre l'application hiérarchique des critères conventionnels de résidence fiscale. Le foyer d'habitation permanent, examiné en premier, est souvent déterminé par la présence de la famille. Lorsque ce critère est concluant, il n'est pas nécessaire d'examiner les critères suivants, même si le contribuable présente des liens avec l'autre État."
    },
    {
      id: 5,
      title: "Calcul d'imposition avec exemption et réserve de progressivité",
      difficulty: 'medium',
      estimatedTime: '5 minutes',
      context: {
        background: `Un entrepreneur individuel français a une exploitation en France et dans un pays conventionné. La convention prévoit la méthode d'exemption avec réserve de progressivité pour les bénéfices de l'exploitation étrangère.`,
        additionalInfo: [
          "Bénéfice en France : 60.000€",
          "Bénéfice dans le pays conventionné : 90.000€",
          "Impôt payé à l'étranger : 25.000€",
          "Barème progressif : jusqu'à 100.000€ : 30%, au-delà : 41%"
        ]
      },
      calculations: {
        variables: {
          beneficeFrance: 60000,
          beneficeEtranger: 90000,
          impotEtranger: 25000,
          tauxTranche1: 30,
          tauxTranche2: 41,
          seuilTranche: 100000
        },
        formulas: {
          revenuMondial: "beneficeFrance + beneficeEtranger",
          revenuEtrangerNet: "beneficeEtranger - impotEtranger",
          tauxMoyen: "calculé selon les tranches du barème"
        }
      },
      steps: [
        {
          id: 1,
          question: "Quel montant doit être utilisé pour déterminer le taux d'imposition ?",
          hints: [
            "La réserve de progressivité prend en compte l'ensemble des revenus",
            "L'impôt étranger n'intervient pas dans ce calcul",
            "On utilise les revenus bruts pour le taux"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "60.000€ (uniquement le bénéfice français)",
              "125.000€ (60.000€ + (90.000€ - 25.000€))",
              "150.000€ (60.000€ + 90.000€)",
              "85.000€ (60.000€ + 25.000€)"
            ],
            value: 2,
            explanation: "Pour déterminer le taux d'imposition, on prend en compte l'ensemble des revenus mondiaux bruts (150.000€), sans déduire l'impôt étranger. C'est le principe de la réserve de progressivité.",
            calculation: {
              formula: "beneficeFrance + beneficeEtranger",
              variables: ["beneficeFrance", "beneficeEtranger"],
              result: 150000,
              intermediateSteps: [
                {
                  description: "Addition des bénéfices bruts",
                  formula: "60000 + 90000",
                  result: 150000
                }
              ]
            }
          },
          tools: {
            calculator: true,
            formulas: [
              "Revenu mondial = Bénéfice France + Bénéfice étranger"
            ],
            variables: ["beneficeFrance", "beneficeEtranger"]
          }
        },
        {
          id: 2,
          question: "Quel est le taux moyen d'imposition applicable ?",
          hints: [
            "Le barème est progressif",
            "Il faut calculer l'impôt théorique sur le revenu mondial",
            "Le taux moyen est le rapport entre l'impôt théorique et le revenu mondial"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "30% (première tranche uniquement)",
              "41% (tranche supérieure)",
              "37% (taux moyen calculé)",
              "35% (taux forfaitaire)"
            ],
            value: 2,
            explanation: "Pour 150.000€ de revenu mondial, l'impôt théorique serait de 30% sur 100.000€ (30.000€) plus 41% sur 50.000€ (20.500€), soit 50.500€ au total. Le taux moyen est donc de 50.500/150.000 = 37%",
            calculation: {
              formula: "(impotTranche1 + impotTranche2) / revenuMondial",
              variables: ["seuilTranche", "tauxTranche1", "tauxTranche2"],
              result: 37,
              intermediateSteps: [
                {
                  description: "Impôt sur la première tranche",
                  formula: "100000 × 30%",
                  result: 30000
                },
                {
                  description: "Impôt sur la deuxième tranche",
                  formula: "50000 × 41%",
                  result: 20500
                },
                {
                  description: "Calcul du taux moyen",
                  formula: "50500 / 150000 × 100",
                  result: 37
                }
              ]
            }
          },
          tools: {
            calculator: true,
            formulas: [
              "Impôt première tranche = min(revenu mondial, 100.000€) × 30%",
              "Impôt deuxième tranche = max(0, revenu mondial - 100.000€) × 41%",
              "Taux moyen = (Impôt total / Revenu mondial) × 100"
            ],
            variables: ["seuilTranche", "tauxTranche1", "tauxTranche2"]
          }
        },
        {
          id: 3,
          question: "Quel est le montant final de l'impôt français ?",
          hints: [
            "Le taux moyen s'applique uniquement au revenu français",
            "Les revenus étrangers sont exemptés",
            "L'impôt étranger n'est pas déduit de l'impôt français"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "55.500€ (150.000€ × 37%)",
              "22.200€ (60.000€ × 37%)",
              "18.000€ (60.000€ × 30%)",
              "24.600€ (60.000€ × 41%)"
            ],
            value: 1,
            explanation: "L'impôt français est calculé en appliquant le taux moyen de 37% uniquement au revenu français de 60.000€, soit 22.200€. Les revenus étrangers sont exemptés mais ont servi à déterminer le taux.",
            calculation: {
              formula: "beneficeFrance × (tauxMoyen / 100)",
              variables: ["beneficeFrance"],
              result: 22200,
              intermediateSteps: [
                {
                  description: "Application du taux moyen au revenu français",
                  formula: "60000 × 37%",
                  result: 22200
                }
              ]
            }
          },
          tools: {
            calculator: true,
            formulas: [
              "Impôt final = Revenu français × Taux moyen"
            ],
            variables: ["beneficeFrance"]
          }
        }
      ],
      conclusion: "Ce cas pratique illustre le mécanisme de l'exemption avec réserve de progressivité : les revenus étrangers sont exemptés d'impôt en France mais sont pris en compte pour déterminer le taux d'imposition applicable aux revenus français. Cette méthode permet de respecter la progressivité de l'impôt tout en évitant la double imposition."
    },
    {
      id: 6,
      title: "Détermination des obligations déclaratives",
      difficulty: 'medium',
      estimatedTime: '5 minutes',
      context: {
        background: `Un entrepreneur individuel avec des revenus mixtes (France et étranger) doit déterminer ses obligations déclaratives. Il est résident fiscal français.`,
        additionalInfo: [
          "Bénéfice d'exploitation en France : 45.000€",
          "Bénéfice d'exploitation à l'étranger : 30.000€",
          "Impôt payé à l'étranger : 7.000€",
          "Pays non conventionné"
        ]
      },
      calculations: {
        variables: {
          beneficeFrance: 45000,
          beneficeEtranger: 30000,
          impotEtranger: 7000
        },
        formulas: {
          revenuEtrangerNet: "beneficeEtranger - impotEtranger",
          revenuMondial: "beneficeFrance + revenuEtrangerNet"
        }
      },
      steps: [
        {
          id: 1,
          question: "Que doit contenir la déclaration 2042 ?",
          hints: [
            "La 2042 est la déclaration principale",
            "Elle doit refléter la base imposable totale",
            "L'impôt étranger est une charge déductible"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Uniquement le revenu français (45.000€)",
              "Le revenu mondial net (68.000€)",
              "Les revenus bruts sans déduction (75.000€)",
              "Uniquement le revenu étranger net (23.000€)"
            ],
            value: 1,
            explanation: "La déclaration 2042 doit contenir le revenu mondial net, soit 68.000€ (45.000€ de revenus français + (30.000€ - 7.000€) de revenus étrangers nets).",
            calculation: {
              formula: "beneficeFrance + (beneficeEtranger - impotEtranger)",
              variables: ["beneficeFrance", "beneficeEtranger", "impotEtranger"],
              result: 68000,
              intermediateSteps: [
                {
                  description: "Calcul du revenu étranger net",
                  formula: "30000 - 7000",
                  result: 23000
                },
                {
                  description: "Addition avec le revenu français",
                  formula: "45000 + 23000",
                  result: 68000
                }
              ]
            }
          },
          tools: {
            calculator: true,
            formulas: [
              "Revenu étranger net = Bénéfice étranger - Impôt étranger",
              "Revenu mondial = Bénéfice France + Revenu étranger net"
            ],
            variables: ["beneficeFrance", "beneficeEtranger", "impotEtranger"]
          }
        },
        {
          id: 2,
          question: "Que doit contenir la déclaration 2047 ?",
          hints: [
            "La 2047 est spécifique aux revenus étrangers",
            "Elle doit permettre de comprendre le calcul du revenu étranger net",
            "L'impôt étranger doit être mentionné"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Uniquement le revenu étranger brut (30.000€)",
              "Le revenu étranger net (23.000€)",
              "Le revenu étranger brut et l'impôt payé",
              "Le revenu mondial (75.000€)"
            ],
            value: 2,
            explanation: "La déclaration 2047 doit mentionner le revenu étranger brut (30.000€) ET l'impôt payé à l'étranger (7.000€) pour justifier le calcul du revenu net.",
            calculation: {
              formula: "beneficeEtranger et impotEtranger",
              variables: ["beneficeEtranger", "impotEtranger"],
              result: 30000,
              intermediateSteps: [
                {
                  description: "Montants à déclarer sur la 2047",
                  formula: "Revenu brut : 30000€, Impôt payé : 7000€",
                  result: 30000
                }
              ]
            }
          },
          tools: {
            calculator: true,
            formulas: [
              "Déclaration 2047 = Revenu étranger brut + Mention de l'impôt payé"
            ],
            variables: ["beneficeEtranger", "impotEtranger"]
          }
        },
        {
          id: 3,
          question: "Comment traiter l'impôt étranger dans les déclarations ?",
          hints: [
            "L'impôt étranger est une charge déductible",
            "Il doit être mentionné sur la déclaration spécifique",
            "Il impacte le montant du revenu net imposable"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Ne pas le déclarer",
              "Le déclarer sur la 2047 uniquement",
              "Le déclarer sur les deux déclarations",
              "Le déduire directement de l'impôt français"
            ],
            value: 1,
            explanation: "L'impôt étranger doit être déclaré uniquement sur la 2047 pour justifier la déduction opérée sur le revenu étranger. Sur la 2042, seul le revenu net après déduction apparaît.",
            calculation: {
              formula: "Déclaration séparée des montants",
              variables: ["impotEtranger"],
              result: 7000,
              intermediateSteps: [
                {
                  description: "2047 : Mention de l'impôt payé",
                  formula: "Impôt étranger : 7000€",
                  result: 7000
                },
                {
                  description: "2042 : Impact sur le revenu net",
                  formula: "Revenu net déjà calculé",
                  result: 23000
                }
              ]
            }
          },
          tools: {
            calculator: true,
            formulas: [
              "2047 : Mention explicite de l'impôt",
              "2042 : Inclusion dans le calcul du revenu net"
            ],
            variables: ["impotEtranger"]
          }
        }
      ],
      conclusion: "Ce cas pratique illustre la complémentarité des déclarations 2042 et 2047. La 2042 présente le résultat final imposable, tandis que la 2047 détaille le calcul et la justification des revenus étrangers et des impôts payés à l'étranger. Cette documentation complète est essentielle pour la bonne application du droit fiscal international."
    },
    {
      id: 7,
      title: "Double résidence et optimisation fiscale",
      difficulty: 'medium',
      estimatedTime: '5 minutes',
      context: {
        background: `Un entrepreneur individuel a des activités réparties entre la France et l'Italie (pays conventionné). Il doit analyser sa situation fiscale et les options disponibles.`,
        additionalInfo: [
          "Revenu France : 85.000€",
          "Revenu Italie : 65.000€",
          "Impôt payé en Italie : 20.000€",
          "Option 1 : Régime des non-résidents (taux minimum 20%)",
          "Option 2 : Option pour le régime des résidents (barème progressif)",
          "Taux moyen d'imposition pour l'option 2 : 41%"
        ]
      },
      calculations: {
        variables: {
          revenuFrance: 85000,
          revenuItalie: 65000,
          impotItalie: 20000,
          tauxNonResident: 20,
          tauxResident: 41
        },
        formulas: {
          impotSansOption: "revenuFrance × tauxNonResident / 100",
          revenuTotal: "revenuFrance + revenuItalie",
          impotAvecOption: "revenuFrance × tauxResident / 100"
        }
      },
      steps: [
        {
          id: 1,
          question: "Quel est le montant de l'impôt en régime non-résident ?",
          hints: [
            "Le taux de 20% s'applique aux revenus de source française",
            "Les revenus italiens ne sont pas concernés",
            "L'impôt italien n'intervient pas dans ce calcul"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "17.000€ (85.000€ × 20%)",
              "26.000€ (130.000€ × 20%)",
              "13.000€ (65.000€ × 20%)",
              "30.000€ (150.000€ × 20%)"
            ],
            value: 0,
            explanation: "En régime de non-résident, le taux de 20% s'applique uniquement aux revenus de source française : 85.000€ × 20% = 17.000€.",
            calculation: {
              formula: "revenuFrance × (tauxNonResident / 100)",
              variables: ["revenuFrance", "tauxNonResident"],
              result: 17000,
              intermediateSteps: [
                {
                  description: "Application du taux de 20% au revenu français",
                  formula: "85000 × 20%",
                  result: 17000
                }
              ]
            }
          },
          tools: {
            calculator: true,
            formulas: [
              "Impôt non-résident = Revenu français × 20%"
            ],
            variables: ["revenuFrance", "tauxNonResident"]
          }
        },
        {
          id: 2,
          question: "Quel est le montant de l'impôt avec option pour le régime des résidents ?",
          hints: [
            "Le taux de 41% s'applique aux revenus français",
            "Le revenu mondial détermine le taux",
            "L'impôt italien reste distinct"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "17.000€ (taux non-résident)",
              "34.850€ (85.000€ × 41%)",
              "61.500€ (150.000€ × 41%)",
              "26.650€ (65.000€ × 41%)"
            ],
            value: 1,
            explanation: "Avec l'option pour le régime des résidents, le taux de 41% (déterminé sur le revenu mondial) s'applique aux revenus français : 85.000€ × 41% = 34.850€.",
            calculation: {
              formula: "revenuFrance × (tauxResident / 100)",
              variables: ["revenuFrance", "tauxResident"],
              result: 34850,
              intermediateSteps: [
                {
                  description: "Calcul du revenu mondial pour déterminer le taux",
                  formula: "85000 + 65000",
                  result: 150000
                },
                {
                  description: "Application du taux de 41% au revenu français",
                  formula: "85000 × 41%",
                  result: 34850
                }
              ]
            }
          },
          tools: {
            calculator: true,
            formulas: [
              "Revenu mondial = Revenu français + Revenu italien",
              "Impôt avec option = Revenu français × 41%"
            ],
            variables: ["revenuFrance", "revenuItalie", "tauxResident"]
          }
        },
        {
          id: 3,
          question: "Quelle option est la plus avantageuse ?",
          hints: [
            "Comparez les montants d'impôt des deux options",
            "La différence est significative",
            "Le choix impacte directement la trésorerie"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Régime non-résident (17.000€)",
              "Régime résident (34.850€)",
              "Les deux options sont équivalentes",
              "Cela dépend des années"
            ],
            value: 0,
            explanation: "Le régime non-résident est plus avantageux car il conduit à un impôt de 17.000€, contre 34.850€ avec l'option pour le régime des résidents, soit une économie de 17.850€.",
            calculation: {
              formula: "impotAvecOption - impotSansOption",
              variables: ["revenuFrance", "tauxNonResident", "tauxResident"],
              result: 17850,
              intermediateSteps: [
                {
                  description: "Impôt en régime non-résident",
                  formula: "85000 × 20%",
                  result: 17000
                },
                {
                  description: "Impôt avec option résident",
                  formula: "85000 × 41%",
                  result: 34850
                },
                {
                  description: "Différence entre les deux options",
                  formula: "34850 - 17000",
                  result: 17850
                }
              ]
            }
          },
          tools: {
            calculator: true,
            formulas: [
              "Économie = Impôt avec option - Impôt sans option"
            ],
            variables: ["revenuFrance", "tauxNonResident", "tauxResident"]
          }
        }
      ],
      conclusion: "Ce cas pratique démontre l'importance d'analyser les différentes options fiscales disponibles. Le régime de non-résident, avec son taux de 20%, s'avère ici plus avantageux que l'option pour le régime des résidents, permettant une économie substantielle de 17.850€. Cette analyse doit être renouvelée chaque année car les paramètres peuvent évoluer."
    },
    {
      id: 8,
      title: "Changement de résidence fiscale en cours d'année",
      difficulty: 'medium',
      estimatedTime: '5 minutes',
      context: {
        background: `Un entrepreneur individuel déménage sa famille et son entreprise d'un pays non conventionné vers la France le 1er juillet. Il faut déterminer les modalités d'imposition pour cette année de transition.`,
        additionalInfo: [
          "Revenus pays d'origine (janvier-juin) : 45.000€",
          "Impôt payé dans le pays d'origine : 12.000€",
          "Revenus France (juillet-décembre) : 55.000€",
          "Installation complète en France (famille et entreprise) au 1er juillet"
        ]
      },
      calculations: {
        variables: {
          revenuEtranger: 45000,
          impotEtranger: 12000,
          revenuFrance: 55000,
          moisEtranger: 6,
          moisFrance: 6
        },
        formulas: {
          revenuEtrangerNet: "revenuEtranger - impotEtranger",
          revenuEtrangerProrata: "(revenuEtranger - impotEtranger) × (moisFrance/12)",
          baseImposable: "revenuFrance + revenuEtrangerProrata"
        }
      },
      steps: [
        {
          id: 1,
          question: "Comment calculer la période d'imposition en France ?",
          hints: [
            "Le changement de résidence intervient en cours d'année",
            "La résidence fiscale française commence à l'installation",
            "Les revenus étrangers doivent être proratisés"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Sur l'année entière",
              "Au prorata temporis (6 mois)",
              "Uniquement sur les revenus français",
              "À partir du mois suivant l'installation"
            ],
            value: 1,
            explanation: "L'imposition en France s'effectue au prorata temporis, soit 6 mois, à partir de la date d'installation. Les revenus étrangers de cette période sont également imposables en France.",
            calculation: {
              formula: "moisFrance / 12",
              variables: ["moisFrance"],
              result: 0.5,
              intermediateSteps: [
                {
                  description: "Calcul du prorata temporis",
                  formula: "6 / 12",
                  result: 0.5
                }
              ]
            }
          },
          tools: {
            calculator: true,
            formulas: [
              "Prorata = Nombre de mois de résidence / 12"
            ],
            variables: ["moisFrance"]
          }
        },
        {
          id: 2,
          question: "Quelle est la base imposable en France ?",
          hints: [
            "Les revenus français sont pris en compte intégralement",
            "Les revenus étrangers sont proratisés",
            "L'impôt étranger est déductible"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "55.000€ (uniquement revenus français)",
              "71.500€ (55.000€ + 16.500€)",
              "100.000€ (totalité des revenus)",
              "88.000€ (revenus nets sans prorata)"
            ],
            value: 1,
            explanation: "La base imposable comprend les revenus français (55.000€) plus la quote-part des revenus étrangers nets correspondant à la période de résidence française : (45.000€ - 12.000€) × 6/12 = 16.500€, soit un total de 71.500€.",
            calculation: {
              formula: "revenuFrance + ((revenuEtranger - impotEtranger) × (moisFrance/12))",
              variables: ["revenuFrance", "revenuEtranger", "impotEtranger", "moisFrance"],
              result: 71500,
              intermediateSteps: [
                {
                  description: "Calcul du revenu étranger net",
                  formula: "45000 - 12000",
                  result: 33000
                },
                {
                  description: "Proratisation du revenu étranger net",
                  formula: "33000 × (6/12)",
                  result: 16500
                },
                {
                  description: "Addition avec le revenu français",
                  formula: "55000 + 16500",
                  result: 71500
                }
              ]
            }
          },
          tools: {
            calculator: true,
            formulas: [
              "Revenu étranger net proratisé = (Revenu étranger - Impôt étranger) × (Mois FR/12)",
              "Base imposable = Revenu français + Revenu étranger net proratisé"
            ],
            variables: ["revenuFrance", "revenuEtranger", "impotEtranger", "moisFrance"]
          }
        },
        {
          id: 3,
          question: "Comment déclarer les revenus étrangers ?",
          hints: [
            "La déclaration 2047 est nécessaire pour les revenus étrangers",
            "Le prorata doit être explicité",
            "L'impôt étranger doit être mentionné"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "En totalité sur la 2047",
              "Au prorata sur la 2047",
              "Ne pas les déclarer",
              "Les déclarer sans l'impôt payé"
            ],
            value: 0,
            explanation: "Les revenus étrangers doivent être déclarés en totalité sur la 2047 (45.000€ et 12.000€ d'impôt), même si seule une partie sera retenue pour l'imposition. Le prorata sera appliqué lors du calcul de l'impôt.",
            calculation: {
              formula: "Déclaration des montants bruts",
              variables: ["revenuEtranger", "impotEtranger"],
              result: 45000,
              intermediateSteps: [
                {
                  description: "Montants à déclarer sur la 2047",
                  formula: "Revenu : 45000€, Impôt : 12000€",
                  result: 45000
                }
              ]
            }
          },
          tools: {
            calculator: true,
            formulas: [
              "2047 : Déclaration des montants totaux",
              "2042 : Application du prorata"
            ],
            variables: ["revenuEtranger", "impotEtranger"]
          }
        }
      ],
      conclusion: "Ce cas pratique illustre le traitement fiscal d'un changement de résidence en cours d'année. Les revenus français sont intégralement imposables, tandis que les revenus étrangers sont pris en compte au prorata de la période de résidence française, après déduction de l'impôt étranger. La documentation complète des revenus étrangers reste nécessaire, même si seule une partie est effectivement imposée."
    }],
    'Audit interne': [
    {
      id: 9,
      title: "Évaluation des risques et activités de contrôle",
      difficulty: 'medium',
      estimatedTime: '15 minutes',
      context: {
        background: "Vous êtes le Responsable du Contrôle Interne dans une entreprise manufacturière de taille moyenne qui vient d'implémenter un nouveau syst��me de production automatisé.",
        additionalInfo: [
          "Le système est récemment mis en place",
          "L'entreprise passe d'un système manuel à un système automatisé",
          "Les employés doivent être formés au nouveau système",
          "De nouvelles politiques doivent être mises en place"
        ]
      },
      steps: [
        {
          id: 1,
          question: "Quelle est l'étape la plus critique à mettre en œuvre en premier lieu pour les contrôles du nouveau système ?",
          hints: [
            "Pensez à l'ordre logique des étapes de contrôle",
            "La compréhension des risques est fondamentale",
            "Les actions doivent être basées sur une analyse préalable"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Installation de logiciels de surveillance",
              "Réalisation d'une évaluation complète des risques",
              "Formation des employés au nouveau système",
              "Mise à jour des politiques de l'entreprise"
            ],
            value: 1,
            explanation: "L'évaluation des risques doit être la première étape pour identifier les problèmes potentiels avant de mettre en place des contrôles. Les autres actions, bien qu'importantes, doivent découler de cette évaluation initiale."
          }
        },
        {
          id: 2,
          question: "Quelle approche serait la plus efficace pour mettre en œuvre des contrôles qualité automatisés ?",
          hints: [
            "Considérez l'importance de la supervision humaine",
            "L'automatisation totale peut présenter des risques",
            "La redondance peut créer de l'inefficacité"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "100% de contrôles automatisés sans supervision manuelle",
              "Maintien de tous les contrôles manuels existants en plus de l'automatisation",
              "Un système hybride avec des contrôles automatisés et une vérification humaine aux points critiques",
              "Délégation de tout le contrôle qualité au département IT"
            ],
            value: 2,
            explanation: "Un système hybride est optimal car il combine les avantages de l'automatisation avec l'expertise et la supervision humaine nécessaires aux points critiques."
          }
        },
        {
          id: 3,
          question: "Comment l'efficacité du nouveau système de contrôle doit-elle être surveillée ?",
          hints: [
            "La fréquence de surveillance est cruciale",
            "L'automatisation peut faciliter la surveillance continue",
            "L'analyse humaine reste importante"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Audit annuel uniquement",
              "Surveillance automatisée continue avec revue humaine hebdomadaire",
              "Rapports de gestion mensuels",
              "Vérifications manuelles quotidiennes de tous les processus"
            ],
            value: 1,
            explanation: "La surveillance automatisée continue avec une revue hebdomadaire offre le meilleur équilibre entre détection précoce des problèmes et analyse experte régulière."
          }
        }
      ]
    },
    {
      id: 10,
      title: "Développement de la politique de contrôle interne",
      difficulty: 'medium',
      estimatedTime: '20 minutes',
      context: {
        background: "Votre organisation développe une nouvelle politique complète de contrôle interne.",
        additionalInfo: [
          "La politique doit couvrir l'ensemble de l'organisation",
          "Les rôles et responsabilités doivent être clairement définis",
          "La politique doit être régulièrement mise à jour",
          "Les procédures de mise en œuvre doivent être précisées"
        ]
      },
      steps: [
        {
          id: 1,
          question: "Quel doit être le focus principal de la section 'périmètre' de la politique ?",
          hints: [
            "Le périmètre définit les limites d'application",
            "La clarté est essentielle pour l'application",
            "Les détails techniques appartiennent à d'autres sections"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Procédures techniques détaillées",
              "Liste du personnel responsable",
              "Limites claires d'application et d'autorité",
              "Allocations budgétaires"
            ],
            value: 2,
            explanation: "La section périmètre doit clairement définir où et comment la politique s'applique dans l'organisation, sans entrer dans les détails techniques ou opérationnels."
          }
        },
        {
          id: 2,
          question: "Quel élément est le plus critique dans la section des rôles et responsabilités ?",
          hints: [
            "La clarté des responsabilités est essentielle",
            "Les descriptions détaillées appartiennent ailleurs",
            "L'accent doit être mis sur la responsabilisation"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Descriptions de poste détaillées",
              "Hiérarchies de reporting",
              "Attribution claire des responsabilités pour chaque composante du contrôle",
              "Métriques de performance des employés"
            ],
            value: 2,
            explanation: "L'attribution claire des responsabilités pour chaque composante du contrôle est essentielle pour assurer une mise en œuvre efficace."
          }
        },
        {
          id: 3,
          question: "À quelle fréquence la politique de contrôle interne doit-elle être revue et mise à jour ?",
          hints: [
            "La régularité est importante",
            "Les changements d'environnement doivent être pris en compte",
            "La flexibilité est nécessaire"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Uniquement lors d'incidents",
              "Annuellement avec des mises à jour intermédiaires si nécessaire",
              "Tous les cinq ans",
              "Mensuellement"
            ],
            value: 1,
            explanation: "Une revue annuelle avec possibilité de mises à jour intermédiaires offre un bon équilibre entre régularité et flexibilité."
          }
        }
      ]
    },
    {
      id: 11,
      title: "Coordination des fonctions de contrôle",
      difficulty: 'medium',
      estimatedTime: '25 minutes',
      context: {
        background: "Vous êtes responsable de l'amélioration de la coordination entre les fonctions de deuxième ligne de défense.",
        additionalInfo: [
          "Plusieurs fonctions de contrôle existent dans l'organisation",
          "La coordination actuelle est informelle",
          "Des conflits surviennent entre les différentes fonctions",
          "Les rapports ne sont pas standardisés"
        ]
      },
      steps: [
        {
          id: 1,
          question: "Quelle est la méthode la plus efficace pour coordonner les différentes fonctions de contrôle ?",
          hints: [
            "Une approche structurée est nécessaire",
            "Les objectifs doivent être clairs",
            "La planification est essentielle"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Réunions mensuelles de coordination sans agenda défini",
              "Planning intégré d'évaluation des risques et de tests de contrôle",
              "Canaux de communication informels",
              "Session annuelle de planification conjointe"
            ],
            value: 1,
            explanation: "Un planning intégré fournit une approche systématique de la coordination avec des livrables clairs."
          }
        },
        {
          id: 2,
          question: "Quelle structure de reporting soutient le mieux la coordination ?",
          hints: [
            "La standardisation facilite la comparaison",
            "La vue d'ensemble est importante",
            "Les détails techniques ne sont pas toujours nécessaires"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Rapports séparés de chaque fonction",
              "Tableau de bord consolidé avec des métriques standardisées",
              "Rapports techniques détaillés",
              "Reporting ad-hoc selon les besoins"
            ],
            value: 1,
            explanation: "Un tableau de bord consolidé permet une comparaison facile et une vue holistique de l'efficacité des contrôles."
          }
        },
        {
          id: 3,
          question: "Quelle est la meilleure approche pour résoudre les conflits entre fonctions de contrôle ?",
          hints: [
            "Un processus clair est nécessaire",
            "L'efficacité est importante",
            "Les décisions doivent être basées sur des critères"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Le PDG décide tous les conflits",
              "Processus d'escalade structuré avec des critères de décision clairs",
              "Vote majoritaire entre les responsables de fonction",
              "Résolution par consultant externe"
            ],
            value: 1,
            explanation: "Un processus d'escalade structuré fournit un cadre clair tout en maintenant l'efficacité."
          }
        }
      ]
    },
    {
      id: 12,
      title: "Impact de la transformation digitale",
      difficulty: 'medium',
      estimatedTime: '30 minutes',
      context: {
        background: "Votre organisation met en œuvre des initiatives de transformation digitale.",
        additionalInfo: [
          "Les processus deviennent de plus en plus digitalisés",
          "De nouveaux risques émergent",
          "Les contrôles existants doivent être adaptés",
          "L'automatisation devient une priorité"
        ]
      },
      steps: [
        {
          id: 1,
          question: "Quelle devrait être la première priorité lors de l'adaptation des contrôles pour la transformation digitale ?",
          hints: [
            "La compréhension des risques est fondamentale",
            "La technologie doit servir un objectif",
            "Les changements doivent être planifiés"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Installation de nouveaux logiciels",
              "Évaluation des risques des processus digitaux",
              "Formation des employés",
              "Mise à jour des politiques"
            ],
            value: 1,
            explanation: "L'évaluation des risques des processus digitaux est essentielle avant d'adapter les contrôles."
          }
        },
        {
          id: 2,
          question: "Comment les contrôles automatisés doivent-ils être implémentés ?",
          hints: [
            "Le changement doit être géré",
            "Les tests sont importants",
            "L'approche progressive réduit les risques"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Remplacer tous les contrôles manuels immédiatement",
              "Approche progressive avec tests et validation",
              "Attendre les standards de l'industrie",
              "Implémenter uniquement dans les zones à haut risque"
            ],
            value: 1,
            explanation: "Une approche progressive permet des tests appropriés et des ajustements."
          }
        },
        {
          id: 3,
          question: "Quelle est la méthode la plus efficace pour surveiller les contrôles digitaux ?",
          hints: [
            "L'automatisation peut améliorer la surveillance",
            "L'analyse avancée peut détecter des patterns",
            "La fréquence est importante"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Tests manuels uniquement",
              "Surveillance automatisée avec analyse IA",
              "Audit externe annuel",
              "Vérifications trimestrielles du système"
            ],
            value: 1,
            explanation: "La surveillance automatisée avec analyse IA fournit un monitoring continu avec analyse avancée."
          }
        }
      ]
    },
    {
      id: 13,
      title: "Évaluation de l'efficacité des contrôles",
      difficulty: 'medium',
      estimatedTime: '20 minutes',
      context: {
        background: "Vous devez évaluer l'efficacité de votre système de contrôle interne.",
        additionalInfo: [
          "Le système est en place depuis plusieurs années",
          "Différentes méthodes d'évaluation sont disponibles",
          "Les résultats doivent être utilisables",
          "L'amélioration continue est un objectif"
        ]
      },
      steps: [
        {
          id: 1,
          question: "Quel est le facteur le plus important dans l'évaluation de l'efficacité des contrôles ?",
          hints: [
            "L'objectif principal des contrôles est important",
            "Le coût n'est pas le facteur principal",
            "La quantité ne garantit pas la qualité"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Coût des contrôles",
              "Nombre de contrôles",
              "Atteinte des objectifs de contrôle",
              "Vitesse de mise en œuvre"
            ],
            value: 2,
            explanation: "L'atteinte des objectifs de contrôle est le facteur le plus important."
          }
        },
        {
          id: 2,
          question: "Quelle méthode d'évaluation est la plus fiable ?",
          hints: [
            "L'indépendance est importante",
            "Les perspectives multiples sont utiles",
            "La validation externe peut être nécessaire"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Auto-évaluation par les propriétaires des contrôles",
              "Audit externe uniquement",
              "Approche combinée avec auto-évaluation, audit interne et validation externe",
              "Revue par les pairs"
            ],
            value: 2,
            explanation: "Une approche combinée fournit une évaluation complète et équilibrée."
          }
        },
        {
          id: 3,
          question: "Comment les résultats de l'évaluation doivent-ils être utilisés ?",
          hints: [
            "L'amélioration continue est importante",
            "Les résultats doivent avoir un impact",
            "La perspective doit être large"
          ],
          expectedAnswer: {
            type: 'multiple_choice',
            options: [
              "Évaluation de la performance uniquement",
              "Amélioration continue et adaptation du système de contrôle",
              "Reporting réglementaire uniquement",
              "Planification budgétaire"
            ],
            value: 1,
            explanation: "Les résultats doivent servir à l'amélioration continue du système de contrôle."
          }
        }
      ]
    }
  ]
}; 