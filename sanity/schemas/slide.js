export default {
  name: "slide",
  type: "document",
  title: "Slides - Home",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
    },
    {
      title: "Slide Image",
      name: "slideImage",
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
};
