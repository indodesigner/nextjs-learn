export default {
  name: "place",
  title: "Place",
  type: "document",
  fields: [
    {
      name: "placeName",
      title: "Place Name",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "placeName",
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
      title: "Country",
      name: "country",
      type: "array",
      of: [{ type: "reference", to: { type: "country" } }],
      validation: (Rule) => Rule.max(1),
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created at",
    },
    {
      name: "placeImages",
      title: "Place Images",
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
            {
              name: "attribution",
              type: "string",
              title: "Attribution",
            },
          ],
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};
