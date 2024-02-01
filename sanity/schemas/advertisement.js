export default {
  name: "advertisement",
  title: "Advertisement",
  type: "document",
  fields: [
    {
      name: "adName",
      title: "Ad Name",
      type: "string",
    },
    {
      name: "adNamejp",
      title: "Ad Name - Japanese",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "adName",
        maxLength: 15, // will be ignored if slugify is set
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/\./g, "")
            .slice(0, 15),
      },
    },
    {
      name: "adImages",
      title: "Ad Images",
      description: "Upload images with 1920 X 720 pixels",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true, // <-- Defaults to false
          },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
    },
    {
      name: "href",
      type: "url",
      title: "Link",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      name: "contentjp",
      title: "Content - Japanese",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};
