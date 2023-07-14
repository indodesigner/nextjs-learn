import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: "awsx4pwb",
  apiVersion: "2023-07-13",
  dataset: "production",
  useCdn: true,
});

export default sanityClient;
