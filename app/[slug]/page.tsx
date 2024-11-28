import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage
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
    <div className="flex justify-center items-center w-full min-h-screen my-10 flex-col bg-white text-black lg:p-0 p-8 font-circular">
      <div className="flex justify-between items-center w-full lg:px-8 px-4">
        <Link href="/">
          <ArrowLeft className="lg:h-12 h-8 w-10 lg:w-16 stroke-[1]" />
        </Link>
        <div />
      </div>
      <h1>
        <span className="mt-8 block text-base text-center text-primary font-semibold tracking-wide uppercase underline underline-offset-2">
          nXtribe - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl font-unbounded uppercase">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt="Title Image"
        priority
        className="rounded-lg mt-8 border-2 border-black shadow-md"
      />

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
