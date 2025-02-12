// questions.ts
import { Question } from "../types/Question";

export const questionsList: Question[] = [
  {
    question: "Qual é o planeta mais próximo do Sol?",
    options: ["Mercúrio", "Vênus", "Terra", "Marte"],
    answer: 0
  },
  {
    question: "Quem pintou a Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: 2
  },
  {
    question: "Quantos continentes existem na Terra?",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    question: "Qual é o maior mamífero do mundo?",
    options: ["Elefante", "Baleia Azul", "Rinoceronte", "Girafa"],
    answer: 1
  },
  {
    question: "Em que país se originou o café?",
    options: ["Brasil", "Etiópia", "Colômbia", "México"],
    answer: 1
  },
  {
    question: "Qual é o elemento químico mais abundante no universo?",
    options: ["Oxigênio", "Hidrogênio", "Carbono", "Nitrogênio"],
    answer: 1
  }
];
