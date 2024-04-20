import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
//prev api end point in pages router we used /API folder in order to expose kind of janky express like syntax nowadays we do like this
//this is an api end point in next
//why does this file matters
//well we need to expose the upload thing so that the client can use it to upload images
