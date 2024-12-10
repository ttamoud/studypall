import { Question } from '../types';

export const mockQuestions: Record<string, Question[]> = {
  'Fiscalité internationales des entreprise': [
    {
      id: 1,
      question: "Quelle est la différence principale entre les termes \"domicile fiscal\" et \"résidence fiscale\" ?",
      options: [
        "Les deux termes ont des définitions juridiques différentes",
        "Le domicile fiscal s'applique au droit interne tandis que la résidence fiscale s'applique au droit conventionnel",
        "La résidence fiscale est uniquement utilisée pour les personnes morales",
        "Le domicile fiscal ne concerne que les personnes physiques"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - Les termes sont en fait synonymes, leur différence réside uniquement dans leur contexte d'utilisation",
        B: "Correct - Comme indiqué dans le cours, la seule différence entre ces termes est leur contexte d'application : le domicile fiscal est utilisé en droit interne, tandis que la résidence fiscale est utilisée dans le cadre conventionnel",
        C: "Incorrect - La résidence fiscale s'applique tant aux personnes physiques qu'aux personnes morales",
        D: "Incorrect - Le domicile fiscal s'applique aux deux types de personnes (physiques et morales)"
      }
    },
    {
      id: 2,
      question: "Selon l'article 4A du CGI, une personne ayant son domicile fiscal en France est imposable sur :",
      options: [
        "Uniquement ses revenus de source française",
        "Uniquement ses revenus de source étrangère",
        "L'ensemble de ses revenus de sources française et étrangère",
        "Ses revenus de source française et 50% de ses revenus étrangers"
      ],
      correctAnswer: 2,
      explanations: {
        A: "Incorrect - Cette règle s'applique aux non-résidents fiscaux",
        B: "Incorrect - L'imposition ne se limite pas aux seuls revenus étrangers",
        C: "Correct - L'article 4A du CGI stipule clairement que les personnes ayant leur domicile fiscal en France sont imposables sur l'ensemble de leurs revenus, quelle que soit leur source",
        D: "Incorrect - Il n'existe pas de règle de partage à 50% pour les revenus étrangers"
      }
    },
    {
      id: 3,
      question: "D'après le droit interne français, combien de critères alternatifs existe-t-il pour déterminer le domicile fiscal ?",
      options: [
        "2 critères",
        "3 critères",
        "4 critères",
        "5 critères"
      ],
      correctAnswer: 2,
      explanations: {
        A: "Incorrect - Le nombre de critères est plus élevé selon l'article 4B du CGI",
        B: "Incorrect - Il manque un critère dans ce décompte",
        C: "Correct - L'article 4B du CGI définit quatre critères alternatifs : le foyer, le lieu de séjour principal, l'activité professionnelle principale, et le centre des intérêts économiques",
        D: "Incorrect - Le texte ne prévoit que quatre critères alternatifs"
      }
    },
    {
      id: 4,
      question: "Concernant le critère du \"foyer\", lequel de ces énoncés est correct ?",
      options: [
        "Le foyer est uniquement déterminé par la présence du conjoint",
        "La présence des enfants n'a aucune influence sur la détermination du foyer",
        "Le foyer reste en France même si le contribuable séjourne ailleurs temporairement pour des raisons professionnelles",
        "Le foyer suit automatiquement le lieu de travail principal"
      ],
      correctAnswer: 2,
      explanations: {
        A: "Incorrect - Le foyer prend en compte l'ensemble de la famille, pas uniquement le conjoint",
        B: "Incorrect - La présence des enfants est un élément important dans la détermination du foyer",
        C: "Correct - Le cours précise que le foyer reste en France même si le contribuable séjourne ailleurs temporairement pour des raisons professionnelles, tant que sa famille y réside",
        D: "Incorrect - Le lieu de travail n'est pas le critère déterminant pour le foyer"
      }
    },
    {
      id: 5,
      question: "En ce qui concerne le lieu de séjour principal, quelle durée minimum de séjour en France entraîne généralement la qualification de domiciliation fiscale ?",
      options: [
        "3 mois",
        "Plus de 6 mois",
        "9 mois",
        "12 mois"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - Cette durée est insuffisante pour qualifier le séjour principal",
        B: "Correct - Le cours indique qu'une personne qui séjourne plus de 6 mois en France est en principe considérée comme fiscalement domiciliée en France",
        C: "Incorrect - Bien que suffisante, cette durée n'est pas le seuil minimal requis",
        D: "Incorrect - La présence d'une année entière n'est pas nécessaire"
      }
    },
    {
      id: 6,
      question: "Dans le cadre d'une activité professionnelle multiple, comment détermine-t-on l'activité principale ?",
      options: [
        "Uniquement par le montant des revenus générés",
        "Par le temps consacré à l'activité, même si elle ne génère pas le revenu le plus important",
        "Toujours par le lieu où se trouve le siège social",
        "Par la nationalité du contribuable"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - Le montant des revenus n'est pas le critère principal",
        B: "Correct - Le cours précise que l'activité principale est celle à laquelle le contribuable consacre le plus de temps, même s'il n'en tire pas l'essentiel de ses revenus",
        C: "Incorrect - Le siège social n'est pas un critère déterminant pour l'activité principale personnelle",
        D: "Incorrect - La nationalité n'intervient pas dans la détermination de l'activité principale"
      }
    },
    {
      id: 7,
      question: "Comment est défini le centre des intérêts économiques selon le droit fiscal français ?",
      options: [
        "Uniquement par le lieu des investissements",
        "Exclusivement par le lieu de perception des revenus",
        "Par le lieu où le contribuable possède son compte bancaire principal",
        "Par le lieu où le contribuable a effectué ses principaux investissements, possède le siège de ses affaires et administre ses biens"
      ],
      correctAnswer: 3,
      explanations: {
        A: "Incorrect - Ce n'est pas le seul critère",
        B: "Incorrect - La perception des revenus n'est qu'un des éléments",
        C: "Incorrect - Le compte bancaire n'est pas un critère déterminant",
        D: "Correct - Le cours définit le centre des intérêts économiques comme le lieu où le contribuable a ses principaux investissements, le siège de ses affaires et d'où il administre ses biens"
      }
    },
    {
      id: 8,
      question: "Quelle est la principale différence entre les critères de domiciliation fiscale en droit interne et en droit conventionnel ?",
      options: [
        "Les critères conventionnels sont moins nombreux",
        "Les critères internes sont hiérarchisés",
        "Les critères conventionnels s'appliquent de façon successive alors que les critères internes sont alternatifs",
        "Les critères conventionnels ne concernent que les entreprises"
      ],
      correctAnswer: 2,
      explanations: {
        A: "Incorrect - Le nombre de critères n'est pas le point différenciant",
        B: "Incorrect - C'est l'inverse, les critères internes ne sont pas hiérarchisés",
        C: "Correct - Le cours indique clairement que les critères internes sont alternatifs alors que les critères conventionnels s'appliquent de façon successive",
        D: "Incorrect - Les critères conventionnels s'appliquent tant aux personnes physiques qu'aux entreprises"
      }
    },
    {
      id: 9,
      question: "Dans le cadre conventionnel, que signifie la notion de \"foyer d'habitation permanent\" ?",
      options: [
        "Un lieu où le contribuable séjourne occasionnellement",
        "Une habitation dont le contribuable est nécessairement propriétaire",
        "Une habitation à la disposition permanente du contribuable, qu'il soit propriétaire ou locataire",
        "Uniquement le domicile familial principal"
      ],
      correctAnswer: 2,
      explanations: {
        A: "Incorrect - La permanence est essentielle, les séjours occasionnels ne suffisent pas",
        B: "Incorrect - La propriété n'est pas une condition nécessaire",
        C: "Correct - Le cours précise que toute forme d'habitation peut être prise en compte, que le contribuable en soit propriétaire ou locataire, tant qu'elle est à sa disposition de façon permanente",
        D: "Incorrect - Le domicile familial n'est pas le seul critère"
      }
    },
    {
      id: 10,
      question: "Comment s'applique le critère de séjour habituel dans le cadre conventionnel ?",
      options: [
        "Il s'applique uniquement si le contribuable n'a pas de foyer permanent dans aucun État",
        "Il s'applique en premier lieu, avant tout autre critère",
        "Il ne s'applique jamais aux personnes physiques",
        "Il s'applique uniquement aux séjours professionnels"
      ],
      correctAnswer: 0,
      explanations: {
        A: "Correct - Le cours indique que ce critère s'applique soit lorsque le contribuable ne dispose de foyer permanent dans aucun des États, soit lorsque le centre des intérêts vitaux ne peut être déterminé",
        B: "Incorrect - C'est un critère subsidiaire qui n'intervient qu'après les autres",
        C: "Incorrect - Il s'applique aussi aux personnes physiques",
        D: "Incorrect - Tous les types de séjours sont pris en compte"
      }
    },
    {
      id: 11,
      question: "En cas de conflit de résidence fiscale entre deux États conventionnés, dans quel ordre s'appliquent les critères conventionnels ?",
      options: [
        "Nationalité, foyer permanent, séjour habituel, centre des intérêts vitaux",
        "Foyer permanent, centre des intérêts vitaux, séjour habituel, nationalité",
        "Centre des intérêts vitaux, nationalité, foyer permanent, séjour habituel",
        "Séjour habituel, foyer permanent, nationalité, centre des intérêts vitaux"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - La nationalité n'est pas le premier critère mais le dernier avant l'accord amiable",
        B: "Correct - Le cours précise cet ordre exact des critères conventionnels : d'abord le foyer permanent, puis le centre des intérêts vitaux, ensuite le séjour habituel, et enfin la nationalité",
        C: "Incorrect - Le centre des intérêts vitaux n'est pas le premier critère à examiner",
        D: "Incorrect - Le séjour habituel n'intervient qu'après le foyer permanent et le centre des intérêts vitaux"
      }
    },
    {
      id: 12,
      question: "Quelle est la principale différence entre une entreprise individuelle et une société ?",
      options: [
        "Une entreprise individuelle ne peut pas avoir de salariés",
        "Une entreprise individuelle n'est pas inscrite au registre du commerce",
        "Une entreprise individuelle n'a pas de personnalité morale distincte de celle de l'entrepreneur",
        "Une entreprise individuelle ne peut pas faire de bénéfices"
      ],
      correctAnswer: 2,
      explanations: {
        A: "Incorrect - Le cours précise qu'une entreprise individuelle peut avoir des salariés",
        B: "Incorrect - Les entreprises individuelles doivent être inscrites aux registres appropriés",
        C: "Correct - La principale différence est l'absence de personnalité morale distincte pour l'entreprise individuelle, contrairement à une société",
        D: "Incorrect - Une entreprise individuelle peut générer des bénéfices comme toute autre entreprise"
      }
    },
    {
      id: 13,
      question: "Comment sont imposés les résultats d'une entreprise individuelle française ayant une exploitation à l'étranger dans un pays non conventionné ?",
      options: [
        "Uniquement dans le pays étranger",
        "Uniquement en France",
        "En France sur l'ensemble des revenus, avec déduction de l'impôt payé à l'étranger",
        "Les revenus sont exonérés d'impôt dans les deux pays"
      ],
      correctAnswer: 2,
      explanations: {
        A: "Incorrect - Les revenus sont aussi imposables en France",
        B: "Incorrect - L'impôt payé à l'étranger est pris en compte",
        C: "Correct - Le cours indique que les revenus sont imposés en France avec déduction de l'impôt payé à l'étranger comme charge déductible",
        D: "Incorrect - Il n'y a pas d'exonération totale"
      }
    },
    {
      id: 14,
      question: "Quel est le taux minimum d'imposition applicable aux non-résidents percevant des revenus de source française selon l'article 197A du CGI ?",
      options: [
        "10% pour tous les revenus",
        "20% pour la fraction inférieure à 26.070€ et 30% au-delà",
        "30% pour tous les revenus",
        "40% pour tous les revenus"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - Le taux minimum est de 20% pour la première tranche",
        B: "Correct - Le cours précise ces taux exacts : 20% jusqu'à 26.070€ et 30% au-delà",
        C: "Incorrect - Le taux de 30% ne s'applique qu'à la fraction supérieure à 26.070€",
        D: "Incorrect - Il n'existe pas de taux minimum de 40%"
      }
    },
    {
      id: 15,
      question: "Dans quel cas un non-résident peut-il opter pour les règles d'imposition des résidents fiscaux français ?",
      options: [
        "Uniquement s'il est européen",
        "S'il peut prouver que le taux moyen d'imposition serait plus avantageux",
        "Uniquement s'il a des enfants scolarisés en France",
        "Uniquement s'il possède un bien immobilier en France"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - Cette option n'est pas limitée aux européens",
        B: "Correct - Le cours indique que si le contribuable peut démontrer que le taux moyen serait plus avantageux, il peut opter pour les règles d'imposition des résidents",
        C: "Incorrect - La scolarisation des enfants n'est pas un critère pour cette option",
        D: "Incorrect - La possession d'un bien immobilier n'est pas un critère déterminant"
      }
    },
    {
      id: 16,
      question: "Dans le cadre de l'imposition d'une entreprise individuelle étrangère en France, quel est le régime fiscal applicable ?",
      options: [
        "Uniquement l'impôt sur les sociétés (IS)",
        "L'impôt sur le revenu dans la catégorie des BIC, sur les seuls revenus de source française",
        "Une taxe forfaitaire spéciale pour les entreprises étrangères",
        "L'impôt sur le revenu sur l'ensemble des revenus mondiaux"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - Les entreprises individuelles sont soumises à l'IR et non à l'IS",
        B: "Correct - Le cours précise que l'entreprise étrangère est imposée à l'IR dans la catégorie des BIC, uniquement sur ses revenus de source française",
        C: "Incorrect - Il n'existe pas de taxe forfaitaire spéciale",
        D: "Incorrect - Seuls les revenus de source française sont imposables"
      }
    },
    {
      id: 17,
      question: "En cas d'application d'une convention fiscale, comment est traitée l'imposition d'une entreprise individuelle française ayant une exploitation à l'étranger ?",
      options: [
        "Double imposition systématique",
        "Exonération en France avec prise en compte pour le taux effectif",
        "Imposition uniquement dans le pays étranger",
        "Imposition uniquement en France"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - Les conventions visent justement à éviter la double imposition",
        B: "Correct - Le cours indique que la France pratique la méthode d'exemption avec réserve de progressivité",
        C: "Incorrect - Le revenu est pris en compte pour le calcul du taux effectif en France",
        D: "Incorrect - L'exploitation à l'étranger est imposée dans le pays d'exploitation"
      }
    },
    {
      id: 18,
      question: "Comment est déterminé le caractère \"accessoire\" d'une activité professionnelle en France ?",
      options: [
        "Uniquement par le montant des revenus générés",
        "Par le temps consacré à l'activité et éventuellement les revenus générés",
        "Par la nature de l'activité uniquement",
        "Par la nationalité du contribuable"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - Les revenus ne sont pas le seul critère",
        B: "Correct - Le cours indique que c'est d'abord le temps consacré qui compte, et si ce critère n'est pas concluant, les revenus sont pris en compte",
        C: "Incorrect - La nature de l'activité n'est pas déterminante",
        D: "Incorrect - La nationalité n'intervient pas dans cette détermination"
      }
    },
    {
      id: 19,
      question: "Quelle déclaration doit faire un résident fiscal français ayant des revenus de source étrangère ?",
      options: [
        "Uniquement la déclaration 2042",
        "Uniquement la déclaration 2047",
        "Les déclarations 2042 et 2047",
        "Une déclaration spéciale auprès du pays étranger"
      ],
      correctAnswer: 2,
      explanations: {
        A: "Incorrect - La déclaration 2047 est également nécessaire",
        B: "Incorrect - La déclaration 2042 est également nécessaire",
        C: "Correct - Le cours précise qu'il faut faire deux déclarations : la 2042 pour l'ensemble des revenus et la 2047 pour les revenus étrangers",
        D: "Incorrect - Les déclarations concernent l'administration fiscale française"
      }
    },
    {
      id: 20,
      question: "Comment sont imposés les déficits d'une entreprise individuelle étrangère en France ?",
      options: [
        "Ils sont toujours déductibles des revenus de source française",
        "Ils sont uniquement déductibles des revenus de source étrangère",
        "Ils ne sont jamais déductibles",
        "Ils sont déductibles uniquement des revenus de source française de même nature"
      ],
      correctAnswer: 3,
      explanations: {
        A: "Incorrect - La déduction n'est pas possible sur tous les types de revenus",
        B: "Incorrect - Les déficits peuvent être imputés sur les revenus de source française",
        C: "Incorrect - Les déficits sont déductibles dans certains cas",
        D: "Correct - Le cours indique que les déficits de source française sont imputables sur les revenus de source française de même nature"
      }
    }
  ],
  'Audit interne': [
    {
      id: 1,
      question: "Le contrôle interne est un processus mis en œuvre par le conseil, le management et les collaborateurs d'une entité, destiné à fournir une assurance raisonnable quant à la réalisation d'objectifs liés :",
      options: [
        "à la protection des actifs, au reporting et à la conformité",
        "aux opérations, au reporting et à la conformité",
        "aux opérations, à la fiabilité des informations financières et à la conformité",
        "à la stratégie, aux opérations, à la fiabilité des informations financières et à la conformité"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - Cette définition n'est pas complète et met trop l'accent sur la protection des actifs",
        B: "Correct - Le contrôle interne vise effectivement ces trois objectifs principaux : opérations, reporting et conformité",
        C: "Incorrect - Cette définition mélange les concepts de reporting et de fiabilité des informations financières",
        D: "Incorrect - La stratégie n'est pas un des objectifs principaux du contrôle interne"
      }
    },
    {
      id: 2,
      question: "Quel est le référentiel de contrôle interne le plus appliqué au monde ?",
      options: [
        "Turnbull",
        "CoCo",
        "Coso",
        "CobiT"
      ],
      correctAnswer: 2,
      explanations: {
        A: "Incorrect - Turnbull est un référentiel moins utilisé internationalement",
        B: "Incorrect - CoCo est principalement utilisé au Canada",
        C: "Correct - Le COSO est effectivement le référentiel de contrôle interne le plus utilisé mondialement",
        D: "Incorrect - CobiT est plus orienté vers la gouvernance IT"
      }
    },
    {
      id: 3,
      question: "Quelle composante de contrôle interne comprend les actions définies par les politiques et les procédures afin de s'assurer que les directives du management sont suivies ?",
      options: [
        "Environnement de contrôle",
        "Evaluation des risques",
        "Activités de contrôle interne",
        "Pilotage"
      ],
      correctAnswer: 2,
      explanations: {
        A: "Incorrect - L'environnement de contrôle définit le cadre général mais pas les actions spécifiques",
        B: "Incorrect - L'évaluation des risques identifie les risques mais ne définit pas les actions de contrôle",
        C: "Correct - Les activités de contrôle interne sont effectivement les actions concrètes mises en place pour appliquer les directives",
        D: "Incorrect - Le pilotage supervise l'ensemble du dispositif mais ne définit pas les actions de contrôle"
      }
    },
    {
      id: 4,
      question: "Laquelle de ces propositions NE définit PAS un risque ?",
      options: [
        "La possibilité qu'un événement survienne et ait un impact défavorable sur la réalisation des objectifs",
        "L'écart acceptable entre les objectifs et la performance réelle",
        "L'effet de l'incertitude sur des objectifs",
        "La possibilité qu'un évènement survienne et dont les conséquences seraient susceptibles d'affecter les personnes, les actifs, l'environnement, les objectifs de la société ou sa réputation"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - C'est une définition valide du risque",
        B: "Correct - Cette définition correspond plutôt à la tolérance au risque, pas au risque lui-même",
        C: "Incorrect - C'est une définition valide du risque selon ISO 31000",
        D: "Incorrect - C'est une définition valide et complète du risque"
      }
    },
    {
      id: 5,
      question: "Le niveau de risque auquel une organisation accepte de faire face, correspond à la définition de :",
      options: [
        "La tolérance au risque",
        "L'appétence au risque",
        "Le risque résiduel",
        "Le risque inhérent"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - La tolérance au risque est l'écart acceptable par rapport aux objectifs",
        B: "Correct - L'appétence au risque est effectivement le niveau de risque qu'une organisation est prête à accepter",
        C: "Incorrect - Le risque résiduel est le risque qui subsiste après les mesures de contrôle",
        D: "Incorrect - Le risque inhérent est le risque brut avant les mesures de contrôle"
      }
    },
    {
      id: 6,
      question: "Quelle forme d'évaluation N'est généralement PAS intégrée dans une unité opérationnelle, mais peut être utile pour évaluer si les cinq composantes de contrôle interne sont mises en œuvre et fonctionnent ?",
      options: [
        "Evaluations continues",
        "Evaluations préventives",
        "Evaluations ponctuelles",
        "Evaluations automatisées"
      ],
      correctAnswer: 2,
      explanations: {
        A: "Incorrect - Les évaluations continues font partie intégrante des opérations",
        B: "Incorrect - Les évaluations préventives sont intégrées aux processus",
        C: "Correct - Les évaluations ponctuelles sont effectuées de manière périodique et ne sont pas intégrées aux opérations quotidiennes",
        D: "Incorrect - Les évaluations automatisées sont généralement intégrées aux systèmes"
      }
    },
    {
      id: 7,
      question: "L'audit interne aide une organisation à atteindre ses objectifs en évaluant, par une approche systématique et méthodique, de :",
      options: [
        "ses processus de management des risques",
        "ses processus de contrôle",
        "ses processus de gouvernance",
        "ses processus de management des risques, de contrôle et de gouvernance"
      ],
      correctAnswer: 3,
      explanations: {
        A: "Incorrect - Cette réponse n'est que partielle, l'audit interne évalue plus que cela",
        B: "Incorrect - Les processus de contrôle ne sont qu'un aspect de l'audit interne",
        C: "Incorrect - La gouvernance n'est qu'une partie des éléments évalués",
        D: "Correct - L'audit interne évalue l'ensemble de ces processus de manière intégrée"
      }
    },
    {
      id: 8,
      question: "CRIPP est l'abréviation de :",
      options: [
        "Commission des référents internationaux pour les pratiques professionnelles",
        "Cadre de référence pour l'information des pratiques professionnelles",
        "Centre régional pour l'information sur les professions paramédicales",
        "Cadre de référence internationale des pratiques professionnelles"
      ],
      correctAnswer: 3,
      explanations: {
        A: "Incorrect - Ce n'est pas la bonne signification de l'acronyme",
        B: "Incorrect - Cette définition est incomplète et inexacte",
        C: "Incorrect - Cette définition n'a rien à voir avec l'audit interne",
        D: "Correct - CRIPP signifie effectivement Cadre de référence internationale des pratiques professionnelles"
      }
    },
    {
      id: 9,
      question: "Quelles sont les dispositions d'audit interne qui NE sont PAS obligatoires dans le Cadre de Référence International des Pratiques Professionnelles de l'audit interne (CRIPP) ?",
      options: [
        "Les lignes directrices",
        "Les normes de qualification",
        "Les normes de fonctionnement",
        "La définition de l'audit interne"
      ],
      correctAnswer: 0,
      explanations: {
        A: "Correct - Les lignes directrices sont en effet les seules dispositions non obligatoires du CRIPP",
        B: "Incorrect - Les normes de qualification sont obligatoires",
        C: "Incorrect - Les normes de fonctionnement sont obligatoires",
        D: "Incorrect - La définition de l'audit interne est obligatoire"
      }
    },
    {
      id: 10,
      question: "\"Les auditeurs internes doivent réaliser leurs travaux d'audit interne dans le respect des Normes internationales pour la pratique professionnelle de l'audit interne\". A quel principe du code de déontologie de l'audit interne, cette règle de conduite fait elle référence ?",
      options: [
        "Objectivité",
        "Compétence",
        "Intégrité",
        "Confidentialité"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - L'objectivité concerne l'impartialité dans le jugement",
        B: "Correct - Cette règle fait référence au principe de compétence qui exige le respect des normes professionnelles",
        C: "Incorrect - L'intégrité concerne l'honnêteté et la droiture",
        D: "Incorrect - La confidentialité concerne la protection des informations"
      }
    },
    {
      id: 11,
      question: "Quelle est la principale différence entre l'audit interne et l'audit externe ?",
      options: [
        "L'audit interne est moins rigoureux que l'audit externe",
        "L'audit interne est réalisé par des employés de l'organisation tandis que l'audit externe est réalisé par des professionnels indépendants",
        "L'audit interne se concentre uniquement sur la comptabilité",
        "L'audit externe est plus fréquent que l'audit interne"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - L'audit interne est tout aussi rigoureux que l'audit externe",
        B: "Correct - C'est la principale différence organisationnelle entre les deux types d'audit",
        C: "Incorrect - L'audit interne couvre de nombreux domaines au-delà de la comptabilité",
        D: "Incorrect - La fréquence dépend des besoins et des exigences réglementaires"
      }
    },
    {
      id: 12,
      question: "Quelle est la finalité principale d'une cartographie des risques ?",
      options: [
        "Identifier et hiérarchiser les risques pour mieux les gérer",
        "Satisfaire les exigences réglementaires uniquement",
        "Réduire les coûts opérationnels",
        "Améliorer la communication interne"
      ],
      correctAnswer: 0,
      explanations: {
        A: "Correct - La cartographie des risques permet d'avoir une vue d'ensemble et de prioriser les actions",
        B: "Incorrect - La conformité n'est qu'un des aspects de la cartographie des risques",
        C: "Incorrect - La réduction des coûts peut être une conséquence mais n'est pas l'objectif principal",
        D: "Incorrect - La communication n'est pas l'objectif principal de la cartographie"
      }
    },
    {
      id: 13,
      question: "Qu'est-ce qu'un contrôle compensatoire ?",
      options: [
        "Un contrôle qui remplace un contrôle défaillant ou manquant",
        "Un contrôle qui compense les employés pour leur vigilance",
        "Un contrôle qui équilibre les coûts et les bénéfices",
        "Un contrôle qui vérifie les compensations financières"
      ],
      correctAnswer: 0,
      explanations: {
        A: "Correct - Un contrôle compensatoire est mis en place pour pallier l'absence ou la faiblesse d'un autre contrôle",
        B: "Incorrect - La compensation des employés n'est pas liée aux contrôles compensatoires",
        C: "Incorrect - L'analyse coût-bénéfice est un autre concept",
        D: "Incorrect - Les compensations financières ne sont pas concernées"
      }
    },
    {
      id: 14,
      question: "Que signifie la notion de 'piste d'audit' ?",
      options: [
        "Un chemin physique que suivent les auditeurs",
        "Une trace documentaire permettant de reconstituer un processus ou une transaction",
        "Une liste des audits à réaliser",
        "Un plan d'amélioration des processus"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - La piste d'audit n'est pas un chemin physique",
        B: "Correct - La piste d'audit permet de suivre et de reconstituer chronologiquement les opérations",
        C: "Incorrect - Il ne s'agit pas d'une liste d'audits",
        D: "Incorrect - Le plan d'amélioration est un autre concept"
      }
    },
    {
      id: 15,
      question: "Qu'est-ce que la séparation des tâches en contrôle interne ?",
      options: [
        "La répartition équitable du travail entre les employés",
        "L'attribution des tâches selon les compétences",
        "La division des responsabilités critiques entre différentes personnes",
        "L'organisation des horaires de travail"
      ],
      correctAnswer: 2,
      explanations: {
        A: "Incorrect - La séparation des tâches ne concerne pas l'équité de la charge de travail",
        B: "Incorrect - Les compétences ne sont pas le critère principal de séparation",
        C: "Correct - La séparation des tâches vise à réduire les risques en divisant les responsabilités clés",
        D: "Incorrect - Les horaires ne sont pas concernés par ce principe"
      }
    },
    {
      id: 16,
      question: "Quel est le rôle du Comité d'Audit ?",
      options: [
        "Réaliser les audits internes",
        "Superviser le processus d'audit et de contrôle interne",
        "Gérer les ressources humaines",
        "Définir la stratégie commerciale"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - Le Comité d'Audit ne réalise pas lui-même les audits",
        B: "Correct - Le Comité d'Audit supervise et oriente les processus d'audit et de contrôle",
        C: "Incorrect - La gestion RH n'est pas du ressort du Comité d'Audit",
        D: "Incorrect - La stratégie commerciale relève de la direction générale"
      }
    },
    {
      id: 17,
      question: "Qu'est-ce qu'un échantillonnage statistique en audit ?",
      options: [
        "Une sélection aléatoire des employés à interviewer",
        "Une méthode de sélection d'éléments représentatifs basée sur des critères statistiques",
        "Un calcul de moyennes",
        "Une évaluation des performances"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - L'échantillonnage ne se limite pas aux interviews",
        B: "Correct - L'échantillonnage statistique permet de sélectionner des éléments de manière scientifique",
        C: "Incorrect - Le calcul de moyennes n'est qu'un outil statistique parmi d'autres",
        D: "Incorrect - L'évaluation des performances est un autre domaine"
      }
    },
    {
      id: 18,
      question: "Que signifie la 'matérialité' en audit ?",
      options: [
        "L'importance physique des documents",
        "Le seuil à partir duquel une erreur ou omission peut influencer les décisions",
        "La qualité des équipements",
        "Le nombre de personnes impliquées"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - La matérialité ne concerne pas l'aspect physique",
        B: "Correct - La matérialité définit le niveau d'importance des éléments audités",
        C: "Incorrect - Les équipements ne sont pas liés à la matérialité",
        D: "Incorrect - Le nombre de personnes n'est pas lié à la matérialité"
      }
    },
    {
      id: 19,
      question: "Qu'est-ce qu'un audit de conformité ?",
      options: [
        "Un audit des états financiers",
        "Un audit vérifiant le respect des règles et procédures établies",
        "Un audit de la satisfaction client",
        "Un audit des performances commerciales"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - L'audit financier est différent de l'audit de conformité",
        B: "Correct - L'audit de conformité vérifie le respect des normes et règlements",
        C: "Incorrect - La satisfaction client relève d'autres types d'audit",
        D: "Incorrect - Les performances commerciales ne sont pas l'objet de l'audit de conformité"
      }
    },
    {
      id: 20,
      question: "Quel est le principe de la rotation des auditeurs ?",
      options: [
        "Changer les auditeurs chaque semaine",
        "Alterner les missions entre différents auditeurs pour maintenir l'objectivité",
        "Faire tourner les horaires de travail",
        "Changer de cabinet d'audit chaque année"
      ],
      correctAnswer: 1,
      explanations: {
        A: "Incorrect - La rotation ne se fait pas sur une base hebdomadaire",
        B: "Correct - La rotation des auditeurs permet de maintenir un regard neuf et objectif",
        C: "Incorrect - Les horaires ne sont pas concernés par ce principe",
        D: "Incorrect - Le changement annuel de cabinet n'est pas nécessaire"
      }
    }
  ],
  'Management de la performance': [
    {
      id: 1,
      question: "Quel est le meilleur indicateur de performance d'une équipe ?",
      options: [
        "L'atteinte des objectifs fixés",
        "Le nombre d'heures travaillées",
        "Le budget utilisé",
        "L'ancienneté moyenne"
      ],
      correctAnswer: 0,
      explanations: {
        A: "Correct - L'atteinte des objectifs est le meilleur indicateur car il mesure les résultats concrets",
        B: "Incorrect - Le temps de travail ne garantit pas la performance",
        C: "Incorrect - Le budget n'est qu'un aspect de la performance",
        D: "Incorrect - L'ancienneté n'est pas un indicateur de performance"
      }
    },
    {
      id: 2,
      question: "Quelle est la caractéristique d'un bon objectif SMART ?",
      options: [
        "Il est spécifique et mesurable",
        "Il est vague et flexible",
        "Il est impossible à atteindre",
        "Il est permanent"
      ],
      correctAnswer: 0,
      explanations: {
        A: "Correct - Un objectif SMART doit être Spécifique, Mesurable, Atteignable, Réaliste et Temporel",
        B: "Incorrect - Un objectif vague ne peut pas être mesuré efficacement",
        C: "Incorrect - Un objectif doit être atteignable pour être motivant",
        D: "Incorrect - Un objectif doit avoir une échéance temporelle"
      }
    },
    {
      id: 3,
      question: "Comment motiver efficacement une équipe ?",
      options: [
        "Par la reconnaissance et le développement personnel",
        "Uniquement par des primes",
        "Par la compétition interne",
        "Par des sanctions"
      ],
      correctAnswer: 0,
      explanations: {
        A: "Correct - La motivation durable vient de la reconnaissance et du développement personnel",
        B: "Incorrect - Les primes seules ne garantissent pas une motivation durable",
        C: "Incorrect - La compétition excessive peut nuire à l'esprit d'équipe",
        D: "Incorrect - Les sanctions sont démotivantes et contre-productives"
      }
    },
    {
      id: 4,
      question: "Quel est le rôle du feedback dans le management de la performance ?",
      options: [
        "Permettre l'amélioration continue",
        "Justifier les sanctions",
        "Comparer les employés",
        "Remplir les obligations légales"
      ],
      correctAnswer: 0,
      explanations: {
        A: "Correct - Le feedback constructif permet l'amélioration continue des performances",
        B: "Incorrect - Le feedback ne doit pas être utilisé comme outil de sanction",
        C: "Incorrect - La comparaison entre employés peut être démotivante",
        D: "Incorrect - Le feedback va au-delà des obligations légales"
      }
    },
    {
      id: 5,
      question: "Comment gérer la sous-performance d'un membre de l'équipe ?",
      options: [
        "Identifier les causes et proposer un plan d'action",
        "Appliquer des sanctions immédiates",
        "Ignorer le problème",
        "Transférer la personne"
      ],
      correctAnswer: 0,
      explanations: {
        A: "Correct - Une approche constructive avec analyse des causes et plan d'action est la plus efficace",
        B: "Incorrect - Les sanctions immédiates ne résolvent pas les causes profondes",
        C: "Incorrect - Ignorer le problème ne fait que l'aggraver",
        D: "Incorrect - Le transfert ne résout pas le problème de performance"
      }
    }
  ]
};