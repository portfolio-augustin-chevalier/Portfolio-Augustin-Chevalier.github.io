/*
  ============================================================
  CATÉGORIES ET PROJETS
  ============================================================
  Les projets sont affichés par catégorie, dans l'ordre de ce fichier.

  Pour ajouter un projet : copie un bloc { ... } dans la liste PROJETS,
  donne-lui un id unique et la bonne catégorie. Pour qu'il apparaisse
  aussi dans une carte de compétence, ajoute son id dans "preuves"
  (fichier competences.js).

  id         : mot court unique, sans espace ni accent
  categorie  : id d'une catégorie ci-dessous
  titre      : nom du projet
  cadre      : "BUT GMP", "INSA Lyon", "Stage"…
  annee      : ex. "2024 – 2025"
  image      : un fichier du dossier images ("images/mon-projet.jpg")
               ou une photo Unsplash : photo("photo-…")
  objectif   : une phrase, ce qu'il fallait faire
  demarche   : une ou deux phrases, comment je m'y suis pris
  outils     : logiciels et méthodes utilisés
  Version anglaise : en/projets.js (même structure, à mettre à jour en même temps).
*/
window.CATEGORIES = [
  { id: "conception", titre: "Conception et innovation produit", accroche: "Partir d'un besoin pour arriver à une solution concrète." },
  { id: "simulation", titre: "Simulation et calcul", accroche: "Vérifier par le calcul avant de fabriquer." },
  { id: "production", titre: "Production et industrialisation", accroche: "Penser la fabrication et l'organisation de l'atelier." }
];

(function () {
  /* Photos Unsplash, recadrées au format des cartes */
  function photo(id) { return "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=900&h=560&q=80"; }

  window.PROJETS = [
    /* ---------- Conception et innovation produit ---------- */
    {
      id: "debudeuse", categorie: "conception",
      titre: "Débudeuse de chanvre", cadre: "INSA Lyon", annee: "2025 – 2026",
      image: "images/projet-debudeuse.jpg",
      objectif: "Concevoir une machine low-tech qui sépare les fleurs de chanvre de leurs tiges, pensée pour les petits producteurs.",
      demarche: "Analyse fonctionnelle, recherche de concepts et choix par la méthode TOPSIS, puis dimensionnement de la motorisation et maquette CAO avec des composants standards, en intégrant l'éco-conception (matériaux, réparabilité, fin de vie).",
      outils: ["3D Experience", "Analyse fonctionnelle", "TOPSIS", "Éco-conception"]
    },
    {
      id: "compacteur", categorie: "conception",
      titre: "Compacteur manuel de canettes", cadre: "INSA Lyon", annee: "2025 – 2026",
      image: "images/projet-compacteur.jpg",
      objectif: "Imaginer un compacteur domestique qui réduit le volume des canettes pour faciliter leur stockage et leur recyclage.",
      demarche: "Analyse du besoin et hiérarchisation des fonctions, recherche de concepts, étude du cycle de vie, choix de la solution par TOPSIS, puis conception à partir d'un squelette CAO.",
      outils: ["Analyse du besoin", "Cycle de vie", "TOPSIS", "CAO squelette"]
    },
    {
      id: "bracelet", categorie: "conception",
      titre: "Bracelet haptique pour la randonnée", cadre: "INSA Lyon", annee: "2025 – 2026",
      image: photo("photo-1748280613430-27e9ecb9aaf6"),
      objectif: "Imaginer un bracelet qui guide le randonneur par vibrations, sans avoir à sortir son smartphone.",
      demarche: "Entretiens avec des utilisateurs, test du concept, construction du business model, puis présentation du projet sur un poster.",
      outils: ["Entretiens utilisateurs", "Test de concept", "Business model"]
    },
    {
      id: "support-tel", categorie: "conception",
      titre: "Support de téléphone inclinable", cadre: "BUT GMP", annee: "2022 – 2023",
      image: photo("photo-1617975426095-f073792aef15"),
      objectif: "Concevoir un support de téléphone réglable en inclinaison, compatible avec des modèles de tailles différentes.",
      demarche: "Conception en CAO d'un mécanisme à crans, vérification de la tenue en simulation, puis réalisation d'un prototype.",
      outils: ["CAO", "Simulation", "Prototype"]
    },
    {
      id: "solar", categorie: "conception",
      titre: "Solar Challenge", cadre: "BUT GMP", annee: "2023 – 2024",
      image: "images/projet-solar.jpg",
      objectif: "Participer à la conception d'une petite voiture solaire pour une course entre écoles.",
      demarche: "Conception de la direction, de la propulsion et du support de boîtier, avec des pièces imprimées en 3D.",
      outils: ["CAO", "Impression 3D"]
    },

    /* ---------- Simulation et calcul ---------- */
    {
      id: "compresseur", categorie: "simulation",
      titre: "Optimisation de la cuve d'un compresseur", cadre: "BUT GMP", annee: "2024 – 2025",
      image: "images/projet-cuve-compresseur.jpg",
      objectif: "Alléger la cuve d'un compresseur d'air sans dégrader sa sécurité.",
      demarche: "Pré-étude sur tableur, simulation de la cuve sous pression, puis étude de conception pour trouver le meilleur couple rayon et épaisseur, dans le respect de la norme et des encombrements imposés.",
      outils: ["SolidWorks Simulation", "Étude de conception", "Tableur"]
    },
    {
      id: "voiture-aero", categorie: "simulation",
      titre: "Voiture aérodynamique", cadre: "BUT GMP", annee: "2023 – 2024",
      image: "images/projet-voiture-aero.jpg",
      objectif: "Réduire la traînée d'une maquette de voiture, lors d'une compétition entre étudiants de la promotion.",
      demarche: "Deux modèles conçus puis comparés en simulation d'écoulement, améliorations du modèle retenu (diffuseur, rampe avant, aileron), impression 3D et essai en soufflerie pour confronter le calcul à la réalité.",
      outils: ["SolidWorks", "Flow Simulation", "Impression 3D", "Soufflerie"]
    },
    {
      id: "jumeau", categorie: "simulation",
      titre: "Jumeau numérique d'une poutre", cadre: "BUT GMP", annee: "2024 – 2025",
      image: photo("photo-1627922529156-41f27fb6f7ac"),
      objectif: "Détecter une fissure dans une poutre à partir de son comportement vibratoire.",
      demarche: "Étude des fréquences propres de la poutre, avec un programme écrit en R comparé à un modèle SolidWorks.",
      outils: ["R", "SolidWorks", "Analyse vibratoire"]
    },
    {
      id: "cle-pla", categorie: "simulation",
      titre: "Clé dynamométrique jetable en PLA", cadre: "BUT GMP", annee: "2024 – 2025",
      image: photo("photo-1758387836566-6a342434f5b4"),
      objectif: "Concevoir une clé imprimée en 3D qui cède au-delà d'un couple de serrage donné.",
      demarche: "Optimisation topologique de la forme, impression 3D, puis essais pour vérifier le seuil de rupture.",
      outils: ["Optimisation topologique", "Impression 3D", "Essais"]
    },
    {
      id: "bielle", categorie: "simulation",
      titre: "Bielle de sécurité", cadre: "BUT GMP", annee: "2022 – 2023",
      image: photo("photo-1639616274004-989b1d018bed"),
      objectif: "Concevoir une bielle allégée qui travaille comme un ressort.",
      demarche: "Dimensionnement et vérification en simulation, puis essais de traction sur éprouvettes pour valider le matériau.",
      outils: ["Simulation", "Essai de traction", "Matériaux"]
    },

    /* ---------- Production et industrialisation ---------- */
    {
      id: "lean", categorie: "production",
      titre: "Lean manufacturing sous FlexSim", cadre: "BUT GMP", annee: "2024 – 2025",
      image: photo("photo-1717386255773-1e3037c81788"),
      objectif: "Améliorer le fonctionnement d'une ligne de production.",
      demarche: "Modélisation de la ligne sous FlexSim, analyse des pertes, puis plan d'amélioration construit avec les outils du Lean.",
      outils: ["FlexSim", "Lean", "TPM", "SMED", "5S"]
    },
    {
      id: "ilot-robot", categorie: "production",
      titre: "Îlot robotisé de production", cadre: "BUT GMP", annee: "2022 – 2023",
      image: photo("photo-1712238107642-663e1980b874"),
      objectif: "Concevoir un îlot de production robotisé.",
      demarche: "Choix du robot à partir d'un calcul de cadence, dessin du préhenseur, puis programmation et simulation des cycles du robot.",
      outils: ["FANUC", "ROBOGUIDE", "SolidWorks"]
    },
    {
      id: "atelier-3d", categorie: "production",
      titre: "Atelier en 3D et réalité virtuelle", cadre: "BUT GMP", annee: "2023 – 2024",
      image: photo("photo-1764114441097-6a475eca993d"),
      objectif: "Reproduire un atelier en 3D pour pouvoir le parcourir en réalité virtuelle.",
      demarche: "Relevé de cotes sur place, modélisation d'une cisaille manuelle, implantation de l'atelier, puis visualisation en réalité virtuelle.",
      outils: ["Fusion 360", "FlexSim", "Réalité virtuelle"]
    }
  ];
})();
