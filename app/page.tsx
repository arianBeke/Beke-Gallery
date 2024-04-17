import { BlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30; 

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: BlogCard[] = await getData();

  console.log(data);

  return (
    <div className="flex h-auto flex-col items-center mt-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-10 max-w-3xl">
        {data.map((post, idx) => (
          <div className="ring-2 ring-white" key={idx}>
            <div className="ring-2 ring-white">
              <Image
                src={urlFor(post.titleImage).url()}
                alt="image"
                width={500}
                height={500}
                className="h-[250px] object-cover"
              />
            </div>

            <div className="mt-5 p-4">
              <h3 className="text-lg line-clamp-2 text-white font-bold">{post.title}</h3>
              <p className="line-clamp-3 pb-1 text-sm mt-2 text-[#00df9a]">
                <span className="text-white">Published by: </span>
                {post.smallDescription}
              </p>
              <Link href={`/blog/${post.currentSlug}`}>
                <button className="rounded-md w-full bg-[#00df9a] mt-3 hover:text-[#00df9a] text-black hover:bg-gray-700 transition-colors duration-300 px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  View Image
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="h-20"></div>
    </div>
  );
}
