/*
  ============================================================
  LISTE DES PROJETS
  ============================================================
  Deux sortes de projets :

  1) Les projets PHARES (phare: true) : ils ont leur grand bloc dans la
     section "Projets", avec image, chiffres clés et rapport en PDF.
  2) Les AUTRES projets : une seule phrase, sans rapport. Ils
     apparaissent comme preuves dans les cartes de compétences
     (competences.js, liste "preuves").

  Pour ajouter un projet, copie un bloc { ... }, colle-le dans la liste,
  donne-lui un id unique, puis ajoute cet id dans "preuves" de la
  compétence concernée.

  id          : mot court unique, sans espace ni accent
  titre       : nom du projet
  formation   : "BUT GMP" ou "INSA"
  annee       : ex. "2024 – 2025"
  accroche    : une phrase qui donne envie de lire la suite
  phare       : true pour un grand bloc (sinon, laisse de côté)

  Seulement pour un projet phare :
  chiffres    : trois chiffres clés [{ v: "...", l: "..." }]
  resume      : 2 à 3 phrases
  competences : identifiants des compétences (étiquettes sous le projet)
  image       : "images/mon-projet.jpg"
  rapport     : "rapports/mon-projet.pdf" ("" s'il n'y en a pas)
*/
window.PROJETS = [
  {
    id: "compresseur",
    phare: true,
    titre: "Optimisation de la cuve d'un compresseur",
    formation: "BUT GMP",
    annee: "2024 – 2025",
    accroche: "Alléger une cuve sans perdre en sécurité.",
    chiffres: [
      { v: "220 000 €", l: "gain annuel estimé" },
      { v: "2 mm", l: "épaisseur retenue, pour un rayon de 146 mm" },
      { v: "75 000", l: "cuves fabriquées par an" }
    ],
    resume: "Cuve d'un compresseur d'air de 50 L en acier S235. Pré-étude sur tableur, simulation sous pression, puis étude de conception sous SolidWorks pour trouver le meilleur couple rayon et épaisseur, en respectant le coefficient de sécurité de la norme et les encombrements imposés.",
    competences: ["simulation", "conception", "durable", "mecanique"],
    image: "images/cuve-compresseur.jpg",
    rapport: "rapports/sae-5-10-cuve-compresseur.pdf"
  },
  {
    id: "voiture-aero",
    phare: true,
    titre: "Voiture aérodynamique : de la simulation à la soufflerie",
    formation: "BUT GMP",
    annee: "2023 – 2024",
    accroche: "Réduire la traînée, du calcul à la soufflerie.",
    chiffres: [
      { v: "0,633", l: "SCx final" },
      { v: "3e sur 14", l: "au classement" },
      { v: "18 / 20", l: "note du rapport" }
    ],
    resume: "Compétition de promotion pour réduire la traînée d'une maquette de voiture. Deux modèles conçus séparément et comparés sous Flow Simulation, puis amélioration du modèle retenu (diffuseur, rampe avant, aileron), impression 3D et essai en soufflerie. Le comparatif entre simulation et soufflerie montre l'écart entre le calcul et la réalité.",
    competences: ["simulation", "conception", "fabrication"],
    image: "images/voiture-aero.jpg",
    rapport: "rapports/snrv-voiture-aerodynamique.pdf"
  },
  {
    id: "debudeuse",
    phare: true,
    titre: "Débudeuse de chanvre",
    formation: "INSA",
    annee: "2025 – 2026",
    accroche: "Une machine low-tech pour les petits producteurs.",
    chiffres: [
      { v: "20 tiges / min", l: "cadence visée" },
      { v: "150 N", l: "effort de traction" },
      { v: "TOPSIS", l: "méthode de choix du concept" }
    ],
    resume: "Les fleurs de chanvre demandent une séparation délicate. Conception d'une machine qui les sépare des tiges par calibrage sur plaque trouée, avec entraînement par rouleaux. Analyse fonctionnelle, éco-conception (matériaux, réparabilité, fin de vie), dimensionnement de la motorisation, puis maquette CAO sous 3D Experience avec des composants standards.",
    competences: ["conception", "innovation", "durable", "mecanique"],
    image: "images/debudeuse-chanvre.jpg",
    rapport: "rapports/rapport-debudeuse-chanvre.pdf"
  },
  {
    id: "compacteur",
    phare: true,
    titre: "Compacteur manuel de canettes",
    formation: "INSA",
    annee: "2025 – 2026",
    accroche: "Faire de la place et faciliter le recyclage.",
    chiffres: [
      { v: "TOPSIS", l: "méthode de choix du concept" },
      { v: "Cycle de vie", l: "étudié avant de choisir" },
      { v: "Squelette CAO", l: "base de la conception" }
    ],
    resume: "Compacteur domestique qui réduit le volume des canettes en aluminium pour faciliter leur stockage et leur recyclage. Analyse du besoin, hiérarchisation des fonctions, recherche de concepts, étude du cycle de vie, choix par TOPSIS, puis squelette CAO de la solution retenue.",
    competences: ["conception", "innovation", "durable"],
    image: "images/compacteur-canettes.jpg",
    rapport: "rapports/rapport-compacteur-canettes.pdf"
  },

  /* ---------- Autres projets : une phrase, sans rapport ---------- */
  {
    id: "cle-pla",
    titre: "Clé dynamométrique jetable en PLA",
    formation: "BUT GMP",
    annee: "2024 – 2025",
    accroche: "Tient 2,9 N.m et cède à 3,2 N.m pour 3 N.m visés, grâce à l'optimisation topologique."
  },
  {
    id: "jumeau",
    titre: "Jumeau numérique d'une poutre",
    formation: "BUT GMP",
    annee: "2024 – 2025",
    accroche: "Fissure détectée dans une poutre de 600 mm avec 1 à 2,2 % d'erreur, entre un programme R et SolidWorks."
  },
  {
    id: "lean",
    titre: "Lean manufacturing sous Flexsim",
    formation: "BUT GMP",
    annee: "2024 – 2025",
    accroche: "Plan d'amélioration à 80 k€ amorti en 5 mois, pour un gain estimé à 185 400 € par an."
  },
  {
    id: "alternance",
    titre: "Alternance en bureau d'études",
    formation: "BUT GMP",
    annee: "2024 – 2025",
    accroche: "Un an dans un bureau d'études de mobilier médical : barrière de lit escamotable, plaque d'alimentation, pièces plastiques et prototypes."
  },
  {
    id: "atelier-3d",
    titre: "Atelier en 3D et réalité virtuelle",
    formation: "BUT GMP",
    annee: "2023 – 2024",
    accroche: "Cisaille manuelle modélisée à partir de cotes relevées sur place, atelier visualisé en réalité virtuelle sous FlexSim."
  },
  {
    id: "solar",
    titre: "Solar Challenge",
    formation: "BUT GMP",
    annee: "2023 – 2024",
    accroche: "Direction, propulsion et support de boîtier d'une voiture, avec des pièces imprimées en 3D."
  },
  {
    id: "stage",
    titre: "Stage en bureau d'études de machines spéciales",
    formation: "BUT GMP",
    annee: "2023 – 2024",
    accroche: "Trois mois pour concevoir un prototype de découpe de boîtes à recycler, avec convoyeur et montage en atelier."
  },
  {
    id: "bielle",
    titre: "Bielle de sécurité",
    formation: "BUT GMP",
    annee: "2022 – 2023",
    accroche: "Bielle allégée qui travaille comme un ressort : coefficient de sécurité de 3,1 en simulation, essai de traction sur éprouvettes."
  },
  {
    id: "ilot-robot",
    titre: "Îlot robotisé de production",
    formation: "BUT GMP",
    annee: "2022 – 2023",
    accroche: "Robot FANUC choisi après calcul de cadence, préhenseur dessiné sous SolidWorks, trois programmes simulés sous ROBOGUIDE."
  },
  {
    id: "support-tel",
    titre: "Support de téléphone inclinable",
    formation: "BUT GMP",
    annee: "2022 – 2023",
    accroche: "Prototype à cinq crans, coefficient de sécurité de 45 en simulation, compatible d'un Pixel 4a à un iPhone 12 Pro Max."
  },
  {
    id: "bracelet",
    titre: "Bracelet haptique pour la randonnée",
    formation: "INSA",
    annee: "2025 – 2026",
    accroche: "Un bracelet qui guide sans smartphone : entretiens d'utilisateurs, test du concept, business model et poster A2."
  }
];
