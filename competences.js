/*
  ============================================================
  LISTE DES COMPÉTENCES
  ============================================================
  Chaque bloc devient une carte de la section "Compétences".

  id        : mot court sans espace ni accent (ex. "simulation")
  titre     : nom de la compétence
  accroche  : phrase courte affichée en grand
  points    : ce que la compétence recouvre (3 ou 4 lignes)
  outils    : logiciels et machines, ex. ["SolidWorks"] ([] pour rien)
  preuves   : identifiants des projets (projets.js) qui prouvent la
              compétence, dans l'ordre d'affichage (4 maximum conseillé).
              Un projet phare (phare: true) renvoie vers son grand bloc.
  image     : facultatif, image en haut de la carte : un fichier du dossier images
              (ex. "images/ma-photo.jpg") ou l'adresse d'une photo Unsplash
*/
window.COMPETENCES = [
  {
    id: "conception",
    titre: "Conception mécanique",
    image: "https://images.unsplash.com/photo-1769147339214-076740872485?auto=format&fit=crop&w=1200&h=675&q=80",
    accroche: "Du besoin à la pièce.",
    points: [
      "Modélisation 3D de pièces et d'assemblages, en conception descendante avec squelette",
      "Dessins de définition, dessins d'ensemble et mises en plan",
      "Pièces plastiques et composants standards, pensés avec la fabrication"
    ],
    outils: ["SolidWorks", "Fusion 360", "3D Experience"],
    preuves: ["debudeuse", "compacteur", "support-tel", "alternance"]
  },
  {
    id: "simulation",
    titre: "Simulation numérique",
    image: "images/simulation-f1.jpg",
    accroche: "Valider avant de fabriquer.",
    points: [
      "Calcul de structures par éléments finis et optimisation topologique",
      "Simulation d'écoulement, comparée à des essais en soufflerie",
      "Simulation d'une cellule robotisée et de flux de production"
    ],
    outils: ["SolidWorks", "Flow Simulation", "ROBOGUIDE", "FlexSim", "R"],
    preuves: ["compresseur", "voiture-aero", "jumeau", "ilot-robot"]
  },
  {
    id: "mecanique",
    titre: "Mécanique et dimensionnement",
    image: "https://images.unsplash.com/photo-1711199694531-e982a79ea381?auto=format&fit=crop&w=1200&h=675&q=80",
    accroche: "Calculer juste pour dimensionner juste.",
    points: [
      "Dimensionnement d'une chaîne de transmission et choix d'une motorisation",
      "Coefficients de sécurité sous pression et en traction",
      "Comportement vibratoire et fréquences propres d'une structure"
    ],
    outils: [],
    preuves: ["debudeuse", "compresseur", "jumeau", "bielle"]
  },
  {
    id: "fabrication",
    titre: "Fabrication et production",
    image: "https://images.unsplash.com/photo-1713371398485-7bde1bde9def?auto=format&fit=crop&w=1200&h=675&q=80",
    accroche: "Penser la fabrication dès la conception.",
    points: [
      "Amélioration de la production : Lean, TPM, SMED, 5S",
      "Impression 3D de prototypes et montage en atelier",
      "Cadence, goulot d'étranglement et implantation d'une ligne"
    ],
    outils: ["FlexSim", "Imprimantes 3D"],
    preuves: ["voiture-aero", "lean", "stage", "solar"]
  },
  {
    id: "innovation",
    titre: "Innovation produit",
    image: "https://images.unsplash.com/photo-1600697395543-ef3ee6e9af7b?auto=format&fit=crop&w=1200&h=675&q=80",
    accroche: "Concevoir ce qui n'existe pas encore.",
    points: [
      "Analyse fonctionnelle et cahier des charges",
      "Entretiens d'utilisateurs et test d'un concept",
      "Choix multicritère (TOPSIS), business model et 4P"
    ],
    outils: [],
    preuves: ["debudeuse", "compacteur", "bracelet", "bielle"]
  },
  {
    id: "durable",
    titre: "Éco-conception",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1200&h=675&q=80",
    accroche: "Concevoir plus sobre.",
    points: [
      "Réduction de la masse et de la matière : cuve, clé en PLA",
      "Étude du cycle de vie, réparabilité et fin de vie",
      "Composants standards et solutions low-tech"
    ],
    outils: [],
    preuves: ["compresseur", "cle-pla", "debudeuse", "compacteur"]
  },
  {
    id: "materiaux",
    titre: "Matériaux et essais",
    image: "https://images.unsplash.com/photo-1613970351372-9804e380bd09?auto=format&fit=crop&w=1200&h=675&q=80",
    accroche: "Comprendre la matière avant de l'utiliser.",
    points: [
      "Essais de traction sur éprouvettes jusqu'à la rupture",
      "Lecture des courbes et coefficient de sécurité",
      "Choix du matériau et du procédé : acier, PLA imprimé"
    ],
    outils: [],
    preuves: ["bielle", "cle-pla", "compresseur"]
  },
  {
    id: "rv",
    titre: "Réalité virtuelle",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=1200&h=675&q=80",
    accroche: "Voir l'atelier avant qu'il existe.",
    points: [
      "Modélisation 3D de machines à partir de cotes relevées sur place",
      "Implantation et visualisation d'un atelier en 3D",
      "Parcours Simulation Numérique et Réalité Virtuelle du BUT GMP"
    ],
    outils: ["Fusion 360", "FlexSim"],
    preuves: ["atelier-3d"]
  }
];
