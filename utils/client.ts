import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "4t4oo0k4",
  dataset: "production",
  apiVersion: "2022-09-06",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
