import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have likes (Likes are set to 0 by default), History Array, Playlists Array (added Watch Later Playlist in it by default) by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Nishant",
    lastName: "Pratihast",
    email: "nishant@gmail.com",
    password: "nishant123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Test",
    lastName: "Test",
    email: "test@gmail.com",
    password: "test1234567890",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
