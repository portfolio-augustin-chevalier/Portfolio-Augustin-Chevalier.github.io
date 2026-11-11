/*
  ============================================================
  SKILLS (English version of ../competences.js)
  ============================================================
  Keep the same ids and "preuves" as the French file.
  Local images start with "../images/".
*/
window.COMPETENCES = [
  {
    id: "conception",
    titre: "Mechanical design",
    image: "https://images.unsplash.com/photo-1769147339214-076740872485?auto=format&fit=crop&w=1200&h=675&q=80",
    accroche: "From need to part.",
    points: [
      "3D modeling of parts and assemblies, with top-down design from a skeleton",
      "Detail drawings, assembly drawings and drafting",
      "Plastic parts and standard components, designed with manufacturing in mind"
    ],
    outils: ["SolidWorks", "Fusion 360", "3DEXPERIENCE"],
    preuves: ["debudeuse", "compacteur", "support-tel"]
  },
  {
    id: "simulation",
    titre: "Digital simulation",
    image: "../images/simulation-f1.jpg",
    accroche: "Validate before you build.",
    points: [
      "Structural analysis with finite elements and topology optimization",
      "Flow simulation, compared with wind tunnel tests",
      "Simulation of a robotic cell and of production flows"
    ],
    outils: ["SolidWorks", "Flow Simulation", "ROBOGUIDE", "FlexSim", "R"],
    preuves: ["compresseur", "voiture-aero", "jumeau", "ilot-robot"]
  },
  {
    id: "mecanique",
    titre: "Mechanics and sizing",
    image: "https://images.unsplash.com/photo-1711199694531-e982a79ea381?auto=format&fit=crop&w=1200&h=675&q=80",
    accroche: "Get the numbers right to size it right.",
    points: [
      "Sizing a power transmission and choosing a motor",
      "Safety factors under pressure and in tension",
      "Vibration behavior and natural frequencies of a structure"
    ],
    outils: [],
    preuves: ["debudeuse", "compresseur", "jumeau", "bielle"]
  },
  {
    id: "fabrication",
    titre: "Manufacturing and production",
    image: "https://images.unsplash.com/photo-1713371398485-7bde1bde9def?auto=format&fit=crop&w=1200&h=675&q=80",
    accroche: "Think about manufacturing from the design stage.",
    points: [
      "Improving production: Lean, TPM, SMED, 5S",
      "3D printing of prototypes and assembly in the workshop",
      "Cycle time, bottlenecks and production line layout"
    ],
    outils: ["FlexSim", "3D printers"],
    preuves: ["voiture-aero", "lean", "solar"]
  },
  {
    id: "innovation",
    titre: "Product innovation",
    image: "https://images.unsplash.com/photo-1600697395543-ef3ee6e9af7b?auto=format&fit=crop&w=1200&h=675&q=80",
    accroche: "Design what doesn't exist yet.",
    points: [
      "Functional analysis and requirements",
      "User interviews and concept testing",
      "Multi-criteria decision making (TOPSIS), business model and marketing mix"
    ],
    outils: [],
    preuves: ["debudeuse", "compacteur", "bracelet", "bielle"]
  },
  {
    id: "durable",
    titre: "Eco-design",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1200&h=675&q=80",
    accroche: "Design with less.",
    points: [
      "Reducing weight and material: pressure tank, PLA wrench",
      "Life cycle assessment, repairability and end of life",
      "Standard components and low-tech solutions"
    ],
    outils: [],
    preuves: ["compresseur", "cle-pla", "debudeuse", "compacteur"]
  },
  {
    id: "materiaux",
    titre: "Materials and testing",
    image: "https://images.unsplash.com/photo-1613970351372-9804e380bd09?auto=format&fit=crop&w=1200&h=675&q=80",
    accroche: "Understand the material before using it.",
    points: [
      "Tensile tests on specimens up to failure",
      "Reading stress-strain curves and safety factors",
      "Choosing the material and process: steel, printed PLA"
    ],
    outils: [],
    preuves: ["bielle", "cle-pla", "compresseur"]
  },
  {
    id: "rv",
    titre: "Virtual reality",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=1200&h=675&q=80",
    accroche: "See the workshop before it exists.",
    points: [
      "3D modeling of machines from on-site measurements",
      "Layout and 3D visualization of a workshop",
      "Digital Simulation and Virtual Reality track of the Bachelor of Technology"
    ],
    outils: ["Fusion 360", "FlexSim"],
    preuves: ["atelier-3d"]
  }
];
