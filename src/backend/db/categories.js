import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
  },
  {
    _id: uuid(),
    categoryName: "Disney",
  },
  {
    _id: uuid(),
    categoryName: "Marvel",
  },
  {
    _id: uuid(),
    categoryName: "Pixar",
  },
  {
    _id: uuid(),
    categoryName: "Starwars",
  },
];
