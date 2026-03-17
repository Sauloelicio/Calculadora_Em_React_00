import { Station } from "../types";

export const MOCK_STATIONS: Station[] = [
  {
    id: "1",
    name: "Posto Ipiranga Centro",
    distance: "0.8 km",
    alcoholPrice: 3.45,
    gasPrice: 5.69,
    averageRating: 4.8,
    tags: ["Mais Barato", "Boa qualidade"],
    reviews: [
      {
        id: "r1",
        rating: 5,
        tags: ["Boa qualidade"],
        text: "Combustível excelente, rendeu bem mais que o normal.",
        date: "12 Mar 2026",
      },
    ],
  },
  {
    id: "2",
    name: "Auto Posto Shell - Av. Brasil",
    distance: "1.5 km",
    alcoholPrice: 3.60,
    gasPrice: 5.75,
    averageRating: 4.2,
    tags: ["Sem fila", "Promoção"],
    reviews: [
      {
        id: "r2",
        rating: 4,
        tags: ["Sem fila"],
        text: "Atendimento rápido, mas o preço poderia ser melhor.",
        date: "15 Mar 2026",
      },
    ],
  },
  {
    id: "3",
    name: "Posto Petrobras BR Mania",
    distance: "2.1 km",
    alcoholPrice: 3.80,
    gasPrice: 5.90,
    averageRating: 2.5,
    tags: ["Suspeito"],
    reviews: [
      {
        id: "r3",
        rating: 2,
        tags: ["Suspeito"],
        text: "Carro começou a falhar depois que abasteci aqui.",
        date: "10 Mar 2026",
      },
    ],
  },
  {
    id: "4",
    name: "Posto Ale - Bairro Novo",
    distance: "3.5 km",
    alcoholPrice: 3.39,
    gasPrice: 5.59,
    averageRating: 4.5,
    tags: ["Mais Barato", "Promoção"],
    reviews: [],
  },
];
