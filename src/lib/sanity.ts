// src/lib/sanity.ts
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: import.meta.env.SANITY_API_TOKEN,
});

export const sanityAdminClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: import.meta.env.SANITY_ADMIN_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// GROQ Queries
export const queries = {
  event: `*[_type == "event"][0]{
    title,
    "slug": slug.current,
    edition,
    description,
    date,
    startTime,
    location { city, province, venue, address },
    ticketPrice,
    ticketUrl,
    whatsapp,
    status
  }`,

  competitions: `*[_type == "competition" && isActive == true]|order(order asc){
    _id,
    name,
    "slug": slug.current,
    description,
    type,
    prize,
    icon,
    "image": image.asset->url
  }`,

  shows: `*[_type == "show"]|order(order asc){
    _id,
    artist,
    "slug": slug.current,
    genre,
    description,
    "photo": photo.asset->url,
    youtubeVideo,
    instagram,
    spotify
  }`,

  sponsors: `*[_type == "sponsor"]|order(order asc){
    _id,
    name,
    "logo": logo.asset->url,
    website,
    tier
  }`,

  gallery: `*[_type == "gallery"][0]{
    title,
    "images": images[].asset->url
  }`,
};