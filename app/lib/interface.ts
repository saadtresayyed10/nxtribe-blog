import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "@portabletext/types";

export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: SanityImageSource;
}

// For the Full Blog interface
export interface fullBlog {
  currentSlug: string;
  title: string;
  content: PortableTextBlock[];
  titleImage: SanityImageSource;
}
