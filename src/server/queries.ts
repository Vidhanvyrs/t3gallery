import "server-only"; //to make this file work on server only never come to the client
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
export async function getMyImages() {
  //we are going to auth here because we do not want everyone to see the images that one particular user has uploaded we just need those image to be displayed that is displyed by me
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");
  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id), //model is whatever name you want for your database basically
  }); //default the order is gonna be from oldest to newest we want to flip that
  return images;
}
//explaination of this whole code:
//import "server-only";
// This line imports the server-only module, which is a special Next.js feature that tells Next.js to only run this file on the server-side. This means that the code in this file will never be sent to the client (browser). This is important for code that contains sensitive information, such as API keys or database credentials.

// import { db } from "./db";
// This line imports the db object from the ./db file. The db object is likely a database connection object that is used to interact with the database.

// import { auth } from "@clerk/nextjs/server";
// This line imports the auth function from the @clerk/nextjs/server package. The auth function is likely used to authenticate the user.

// export async function getMyImages() {
// This line defines an asynchronous function called getMyImages. The async keyword means that the function can be paused and resumed later. This is useful for functions that involve asynchronous operations, such as fetching data from a database.

//   const user = auth();
// This line calls the auth function to authenticate the user. The result of the auth function is stored in the user constant.

//   if (!user.userId) throw new Error("Unauthorized");
// This line checks if the user is authenticated. If the user is not authenticated, an error is thrown. The error message is "Unauthorized".

//   const images = await db.query.images.findMany({
//     where: (model, { eq }) => eq(model.userId, user.userId),
//     orderBy: (model, { desc }) => desc(model.id), //model is whatever name you want for your database basically
//   });
// This line fetches the user's images from the database. The db.query.images.findMany function is used to query the images table in the database. The where clause filters the results to only include images that were uploaded by the current user. The orderBy clause sorts the results by the id field in descending order.

//   return images;
// }
// Use code with caution.
// This line returns the user's images.
