import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Disney",
    imgUrl: "/assets/images/disney.png",
    videoUrl: "/assets/videos/disney.mp4",
  },
  {
    _id: uuid(),
    categoryName: "Marvel",
    imgUrl: "/assets/images/marvel.png",
    videoUrl: "/assets/videos/marvel.mp4",
  },
  {
    _id: uuid(),
    categoryName: "Pixar",
    imgUrl: "/assets/images/pixar.png",
    videoUrl: "/assets/videos/pixar.mp4",
  },
  {
    _id: uuid(),
    categoryName: "Star Wars",
    imgUrl: "/assets/images/starwars.png",
    videoUrl: "/assets/videos/star-wars.mp4",
  },
];
