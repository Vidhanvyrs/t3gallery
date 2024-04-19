import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/a6b91378-6e77-4c55-8201-db7837723bec-rpi62o.webp",
  "https://utfs.io/f/c5062df1-e06a-42e5-85a8-5b05b27b7aef-1juv4o.jpg",
  "https://utfs.io/f/3ff9a912-b812-4e1a-a9ef-cf08fb35e395-ftsv2i.jpg",
  "https://utfs.io/f/d0ae8384-373d-40d2-9a13-b9f3e4f938ab-24ky.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts); //we cannot do console.log here because this component is running on server

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="images" />
          </div>
        ))}
      </div>
    </main>
  );
}
