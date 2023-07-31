export default {
  name: "package",
  type: "document",
  title: "Package",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
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
      title: "Release date",
      name: "releaseDate",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "hh:mm A",
        timeStep: 15,
        calendarTodayLabel: "Today",
      },
    },
    {
      title: "Categories",
      name: "categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Technology", value: "Technology" },
          { title: "Softwares", value: "Softwares" },
          { title: "Marketing", value: "Marketing" },
          { title: "Personal Development", value: "Personal Development" },
        ],
      },
    },
    {
      title: "Post Image",
      name: "postImage",
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
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      name: "href",
      type: "url",
      title: "Link",
    },
  ],
};
