import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  apiVersion: "2023-05-03",
  dataset: "production",
  projectId: "giivvee4",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
