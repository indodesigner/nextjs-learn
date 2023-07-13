import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "teal-narwhal",

  projectId: "awsx4pwb",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  basePath: "/admin",

  schema: {
    types: schemaTypes,
  },
});
