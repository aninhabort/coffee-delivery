import {
  arabe,
  cafeComLeite,
  cafeGelado,
  capuccino,
  chocolateQuente,
  cubano,
  expresso,
  expressoAmericano,
  expressoCremoso,
  havaiano,
  irlandes,
  latte,
  macchiato,
  mocaccino,
} from "./assets/coffeeTypes";

export interface CoffeeType {
  id?: number,
  img: string,
  tags: string[],
  title: string,
  description: string,
  price: number
}

const data: CoffeeType[] = [
  {
    id: 1,
    img: expresso,
    tags: ['tradicional'],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: 2,
    img: expressoAmericano,
    tags: ['tradicional'],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
  },
  {
    id: 3,
    img: expressoCremoso,
    tags: ['tradicional'],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
  },
  {
    id: 4,
    img: cafeGelado,
    tags: ['tradicional', 'gelado'],
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
  },
  {
    id: 5,
    img: cafeComLeite,
    tags: ['tradicional', 'com leite'],
    title: "Café com leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
  },
  {
    id: 6,
    img: latte,
    tags: ['tradicional', 'com leite'],
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
  },
  {
    id: 7,
    img: capuccino,
    tags: ['tradicional', 'com leite'],
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
  },
  {
    id: 8,
    img: macchiato,
    tags: ['tradicional', 'com leite'],
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
  },
  {
    id: 9,
    img: mocaccino,
    tags: ['tradicional', 'com leite'],
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
  },
  {
    id: 10,
    img: chocolateQuente,
    tags: ['especial', 'com leite'],
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
  },
  {
    id: 11,
    img: cubano,
    tags: ['especial', 'alcóolico', 'gelado'],
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
  },
  {
    id: 12,
    img: havaiano,
    tags: ['especial'],
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
  },
  {
    id: 13,
    img: arabe,
    tags: ['especial'],
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
  },
  {
    id: 14,
    img: irlandes,
    tags: ['especial', 'alcóolico'],
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
  },
];

export default data;