import friedChicken from "@/assets/fried-chicken.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import chickenWings from "@/assets/chicken-wings.jpg";
import loadedFries from "@/assets/loaded-fries.jpg";
import comboPlatter from "@/assets/combo-platter.jpg";
import grilledChicken from "@/assets/grilled-chicken.jpg";
import chickenShawarma from "@/assets/chicken-shawarma.jpg";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
  tag?: string;
};

export const combos: MenuItem[] = [
  {
    name: "Combo 8",
    description:
      "The crowd favourite. Crispy chicken, golden fries, coleslaw and a chilled soft drink.",
    price: "3,000 FCFA",
    image: comboPlatter,
    tag: "Crowd favourite",
  },
  {
    name: "Family Bucket",
    description:
      "8 pieces of our signature fried chicken — built for sharing with the whole family.",
    price: "5,500 FCFA",
    image: friedChicken,
    tag: "For sharing",
  },
];

export const chicken: MenuItem[] = [
  {
    name: "2pc Crispy Fried Chicken",
    description: "Golden, crunchy and seasoned to the bone. Comes with a dip of your choice.",
    price: "1,500 FCFA",
    image: friedChicken,
  },
  {
    name: "Chicken Nation Burger",
    description: "Crispy chicken fillet, melted cheese, fresh lettuce and our special sauce.",
    price: "1,500 FCFA",
    image: chickenBurger,
  },
  {
    name: "Hot Wings (6 pcs)",
    description: "Glossy, spicy and addictive. Tossed in our signature hot glaze.",
    price: "2,000 FCFA",
    image: chickenWings,
    tag: "Spicy",
  },
  {
    name: "Grilled Chicken & Rice",
    description: "Smoky char-grilled quarter chicken with spiced rice and fried plantain.",
    price: "2,500 FCFA",
    image: grilledChicken,
  },
  {
    name: "Chicken Shawarma",
    description: "Juicy marinated chicken, crisp veggies and garlic sauce in a grilled wrap.",
    price: "1,500 FCFA",
    image: chickenShawarma,
  },
];

export const sides: MenuItem[] = [
  {
    name: "Loaded Fries",
    description: "Crispy fries drowned in cheese sauce, chicken bits and spring onions.",
    price: "1,000 FCFA",
    image: loadedFries,
  },
];

export const extras: MenuItem[] = [
  { name: "French Fries", description: "Golden and lightly salted.", price: "500 FCFA" },
  { name: "Coleslaw", description: "Fresh, creamy and crunchy.", price: "500 FCFA" },
  { name: "Soft Drink", description: "Chilled bottle or can.", price: "500 FCFA" },
  { name: "Extra Dip", description: "Garlic mayo, ketchup or spicy sauce.", price: "200 FCFA" },
];
