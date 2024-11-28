import { simpleBlogCard } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  }
  `;

  const data = await client.fetch(query);
  return data;
}

const BlogPage = async () => {
  const data: simpleBlogCard[] = await getData();

  console.log(data);

  return (
    <div className="flex justify-center items-center flex-col lg:gap-y-10 gap-y-8 w-full min-h-screen p-10 lg:p-20 my-6 bg-white text-neutral-800 text-center">
      <div className="flex justify-center items-center flex-col gap-y-6">
        <h1 className="font-unbounded lg:text-7xl text-4xl font-semibold text-black">
          Blogs
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 mt-5 lg:gap-10 gap-10">
        {data.map((post, idx) => (
          <Card key={idx} className="border-2 border-black font-circular">
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover w-full border-b-2 border-black"
            />

            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold font-unbounded">
                {post.title}
              </h3>
              <p className="line-clamp-3 text-sm mt-2">
                {post.smallDescription}
              </p>
              <Button
                asChild
                className="w-full mt-7 bg-purple-500 text-black border-2 capitalize border-black hover:bg-white hover:text-black"
              >
                <Link href={`/${post.currentSlug}`}>Explore this blog</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
