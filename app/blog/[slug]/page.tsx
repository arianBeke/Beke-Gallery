import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30; 

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage,
          dateAdded
      }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);

 

  return (
    <div className="max-w-2xl mx-auto px-4 mt-16">
      <h1>
        <span className="block text-base text-center text-white text-primary font-semibold tracking-wide ">
          Date Published:
          <span className="text-[#00df9a]"> {data.dateAdded}</span>
        </span>
        <span className="mt-2 block text-3xl pt-1 text-white text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt="Title Image"
        priority
        className="rounded-lg ring-2 ring-white mt-8 "
      />
  
      <div className="mt-16 text-center text-white text-2xl justify-center">
        <PortableText value={data.content} />
      </div>
      <div className=" mt-52"></div>
    </div>
  );
}
