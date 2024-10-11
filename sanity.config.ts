import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
// import { deskTool } from "sanity/desk";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export default defineConfig({
  name: "default",
  title: "Niko Travels",

  projectId,
  dataset,
  apiVersion,

  plugins: [structureTool(), visionTool()],

  basePath: "/admin",

  schema: {
    types: schemaTypes,
  },
});
