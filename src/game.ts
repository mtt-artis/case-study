export const cards = [
  {
    id: 0,
    title: "Start",
    type: "white",
    showInPosition: 1,
    toFind: [12, 34],
    isMaskWhen: 59,
  },
  {
    id: 23,
    title: "Mail à HDJA BT",
    type: "white",
    isValid: "",
    message: "",
    showInPosition: 0,
  },
  {
    id: 38,
    title: "Mail à Pro Ingénierie",
    type: "white",
    isValid: "",
    message: "",
    showInPosition: 0,
  },
  {
    id: 68,
    title: "Mail à Etude BTP Paris",
    type: "white",
    isValid: "",
    message: "",
    showInPosition: 0,
  },
  {
    id: 25,
    title: "Les signatures",
    type: "white",
    isValid: "",
    message: "",
    showInPosition: 0,
  },
  {
    id: 53,
    title: "Contrat PS (Partie1)",
    type: "white",
    isValid: "",
    message: "",
    showInPosition: 0,
    toFind: [6],
  },
  {
    id: 54,
    title: "Contrat PS (Partie2)",
    type: "white",
    isValid: "",
    message: "",
    showInPosition: 0,
  },
  {
    id: 54,
    title: "Contrat PS (Partie3)",
    type: "white",
    isValid: "",
    message: "",
    showInPosition: 0,
    toFind: [11],
  },
  {
    id: 59,
    title: "Le choix final",
    type: "white",
    showInPosition: 0,
    toFind: [80, 61, 74],
  },
  {
    id: 80,
    title: "Vérification d'intégrité",
    type: "white",
    showInPosition: 0,
    toFind: [14, 30, 60],
    toCombine: {
      6: 40
    },
  },
  {
    id: 82,
    title: "L'équipe Juridique",
    type: "white",
    isValid: "",
    message: "",
    showInPosition: 0,
    toFind: [53, 54, 55],
  },
  {
    id: 61,
    title: "Extrait KBIS",
    type: "white",
    isValid: "",
    message: "",
    showInPosition: 0,
  },
  {
    id: 74,
    title: "PV d'exécution",
    type: "white",
    isValid: "",
    message: "",
    showInPosition: 0,
  },
  {
    id: 73,
    title: "Focus sur les dirigeants",
    type: "white",
    isValid: "",
    message: "",
    showInPosition: 0,
    toFind: [4, 82],
  },
  {
    id: 4,
    title: "RIB",
    type: "white",
    isValid: "",
    message: "",
    showInPosition: 0,
  },
  {
    id: 11,
    title: "Les signatures du contrat",
    type: "white",
    isValid: "",
    message: "",
    showInPosition: 0,
  },
  {
    id: 12,
    title: "L'appel d'offre",
    type: "red",
    showInPosition: 0,
    toFind: [23, 38, 68],
    toCombine: {
      34: 46,
    },
    isMaskWhen: 59,
  },
  {
    id: 34,
    title: "Le CCTP Simplifié",
    type: "blue",
    showInPosition: 0,
    toCombine: {
      12: 46,
    },
    isMaskWhen: 59,
  },
  {
    id: 46,
    title: "Les réponses à l'AO",
    type: "red",
    showInPosition: 0,
    toFind: [2, 13, 1, 25],
    toCombine: {
      13: 59,
    },
  },
  {
    id: 2,
    title: "Devis HDJA BT",
    type: "blue",
    showInPosition: 0,
    toCombine: {
      13: 48
    },
    isMaskWhen: 59,
  },
  {
    id: 13,
    title: "Etude BTP PARIS",
    type: "blue",
    showInPosition: 0,
    toCombine: {
      46: 59
    },
  },
  {
    id: 1,
    title: "Devis Pro Ingénierie",
    type: "blue",
    showInPosition: 0,
    toCombine: {
      13: 47
    },
  },
  {
    id: 30,
    title: "Société.com",
    type: "red",
    showInPosition: 0,
    toCombine: {
      13: 43
    },
    isMaskWhen: 82,
  },
  {
    id: 14,
    title: "Société.com",
    type: "red",
    showInPosition: 0,
    toCombine: {
      13: 27
    },
    isMaskWhen: 82,
  },
  {
    id: 60,
    title: "Société.com",
    type: "red",
    showInPosition: 0,
    toCombine: {
      13: 73
    },
    isMaskWhen: 82,
  },
  {
    id: 6,
    title: "Durée de la mission",
    type: "red",
    showInPosition: 0,
    toCombine: {
      34: 40
    },
  },
]
