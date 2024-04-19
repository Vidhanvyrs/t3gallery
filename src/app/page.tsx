import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id), //model is whatever name you want for your database basically
  }); //default the order is gonna be from oldest to newest we want to flip that

  //console.log(posts); //we cannot do console.log here because this component is running on server

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <img src={image.url} alt="images" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
