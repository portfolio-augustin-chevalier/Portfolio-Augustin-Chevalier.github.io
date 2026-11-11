/*
  ============================================================
  CATEGORIES AND PROJECTS (English version of ../projets.js)
  ============================================================
  Keep the same ids as the French file, so the links from the
  skills cards keep working.
*/
window.CATEGORIES = [
  { id: "conception", titre: "Design and product innovation", accroche: "Start from a need and reach a concrete solution." },
  { id: "simulation", titre: "Simulation and analysis", accroche: "Check it by calculation before building it." },
  { id: "production", titre: "Production and industrialization", accroche: "Think about manufacturing and how the workshop is organized." }
];

(function () {
  /* Unsplash photos, cropped to the card format */
  function photo(id) { return "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=900&h=560&q=80"; }

  window.PROJETS = [
    /* ---------- Design and product innovation ---------- */
    {
      id: "debudeuse", categorie: "conception",
      titre: "Hemp bud-stripping machine", cadre: "INSA Lyon", annee: "2025 – 2026",
      image: "../images/projet-debudeuse.jpg",
      objectif: "Design a low-tech machine that separates hemp flowers from their stems, for small-scale growers.",
      demarche: "Functional analysis, concept search and selection with the TOPSIS method, then motor sizing and a CAD model built from standard components, with eco-design in mind (materials, repairability, end of life).",
      outils: ["3D Experience", "Functional analysis", "TOPSIS", "Eco-design"]
    },
    {
      id: "compacteur", categorie: "conception",
      titre: "Manual can crusher", cadre: "INSA Lyon", annee: "2025 – 2026",
      image: "../images/projet-compacteur.jpg",
      objectif: "Imagine a household crusher that reduces the volume of cans to make storage and recycling easier.",
      demarche: "Needs analysis and function ranking, concept search, life cycle study, solution selection with TOPSIS, then design from a CAD skeleton.",
      outils: ["Needs analysis", "Life cycle", "TOPSIS", "Skeleton CAD"]
    },
    {
      id: "bracelet", categorie: "conception",
      titre: "Haptic wristband for hiking", cadre: "INSA Lyon", annee: "2025 – 2026",
      image: photo("photo-1748280613430-27e9ecb9aaf6"),
      objectif: "Imagine a wristband that guides hikers with vibrations, without them having to take out their phone.",
      demarche: "User interviews, concept testing and business model, then a poster to present the project.",
      outils: ["User interviews", "Concept testing", "Business model"]
    },
    {
      id: "support-tel", categorie: "conception",
      titre: "Adjustable phone stand", cadre: "BUT GMP", annee: "2022 – 2023",
      image: photo("photo-1617975426095-f073792aef15"),
      objectif: "Design a phone stand with adjustable tilt that fits phones of different sizes.",
      demarche: "CAD design of a notched mechanism, strength check in simulation, then building a prototype.",
      outils: ["CAD", "Simulation", "Prototype"]
    },
    {
      id: "solar", categorie: "conception",
      titre: "Solar Challenge", cadre: "BUT GMP", annee: "2023 – 2024",
      image: "../images/projet-solar.jpg",
      objectif: "Take part in designing a small solar car for an inter-school race.",
      demarche: "Design of the steering, the drivetrain and the electronics box mount, with 3D-printed parts.",
      outils: ["CAD", "3D printing"]
    },

    /* ---------- Simulation and analysis ---------- */
    {
      id: "compresseur", categorie: "simulation",
      titre: "Compressor tank optimization", cadre: "BUT GMP", annee: "2024 – 2025",
      image: "../images/projet-cuve-compresseur.jpg",
      objectif: "Make an air compressor tank lighter without reducing its safety.",
      demarche: "Spreadsheet pre-study, simulation of the tank under pressure, then a design study to find the best radius and wall thickness, within the standard and the imposed dimensions.",
      outils: ["SolidWorks Simulation", "Design study", "Spreadsheet"]
    },
    {
      id: "voiture-aero", categorie: "simulation",
      titre: "Aerodynamic car", cadre: "BUT GMP", annee: "2023 – 2024",
      image: "../images/projet-voiture-aero.jpg",
      objectif: "Reduce the drag of a model car, in a competition between students of my year.",
      demarche: "Two models designed and compared with flow simulation, improvements to the chosen one (diffuser, front ramp, wing), then 3D printing and a wind tunnel test to compare the calculations with reality.",
      outils: ["SolidWorks", "Flow Simulation", "3D printing", "Wind tunnel"]
    },
    {
      id: "jumeau", categorie: "simulation",
      titre: "Digital twin of a beam", cadre: "BUT GMP", annee: "2024 – 2025",
      image: photo("photo-1627922529156-41f27fb6f7ac"),
      objectif: "Detect a crack in a beam from its vibration behavior.",
      demarche: "Study of the beam's natural frequencies, with a program written in R compared with a SolidWorks model.",
      outils: ["R", "SolidWorks", "Vibration analysis"]
    },
    {
      id: "cle-pla", categorie: "simulation",
      titre: "Disposable PLA torque wrench", cadre: "BUT GMP", annee: "2024 – 2025",
      image: photo("photo-1758387836566-6a342434f5b4"),
      objectif: "Design a 3D-printed wrench that breaks beyond a given tightening torque.",
      demarche: "Topology optimization of the shape, 3D printing, then tests to check the breaking point.",
      outils: ["Topology optimization", "3D printing", "Testing"]
    },
    {
      id: "bielle", categorie: "simulation",
      titre: "Safety connecting rod", cadre: "BUT GMP", annee: "2022 – 2023",
      image: photo("photo-1639616274004-989b1d018bed"),
      objectif: "Design a lightweight connecting rod that works like a spring.",
      demarche: "Sizing and checking in simulation, then tensile tests on specimens to validate the material.",
      outils: ["Simulation", "Tensile testing", "Materials"]
    },

    /* ---------- Production and industrialization ---------- */
    {
      id: "lean", categorie: "production",
      titre: "Lean manufacturing with FlexSim", cadre: "BUT GMP", annee: "2024 – 2025",
      image: photo("photo-1717386255773-1e3037c81788"),
      objectif: "Improve how a production line runs.",
      demarche: "Modeling the line in FlexSim, analyzing losses, then building an improvement plan with Lean tools.",
      outils: ["FlexSim", "Lean", "TPM", "SMED", "5S"]
    },
    {
      id: "ilot-robot", categorie: "production",
      titre: "Robotic production cell", cadre: "BUT GMP", annee: "2022 – 2023",
      image: photo("photo-1712238107642-663e1980b874"),
      objectif: "Design a robotic production cell.",
      demarche: "Choosing the robot from a cycle time calculation, designing the gripper, then programming and simulating the robot's cycles.",
      outils: ["FANUC", "ROBOGUIDE", "SolidWorks"]
    },
    {
      id: "atelier-3d", categorie: "production",
      titre: "Workshop in 3D and virtual reality", cadre: "BUT GMP", annee: "2023 – 2024",
      image: photo("photo-1592477725143-2e57dc728f0a"),
      objectif: "Recreate a workshop in 3D so it can be explored in virtual reality.",
      demarche: "On-site measurements, modeling of a manual shear, workshop layout, then viewing it in virtual reality.",
      outils: ["Fusion 360", "FlexSim", "Virtual reality"]
    }
  ];
})();
