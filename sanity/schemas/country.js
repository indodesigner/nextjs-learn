export default {
  name: "country",
  title: "Countries",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Country Name",
      type: "string",
    },
    {
      name: "namejp",
      title: "Country Name - Japanese",
      type: "string",
    },
    {
      name: "countryImage",
      title: "Country Images",
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
