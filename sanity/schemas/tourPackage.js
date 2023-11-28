export default {
  name: "tourPackage",
  type: "document",
  title: "Packages",
  fields: [
    {
      name: "packageName",
      type: "string",
      title: "Package Name",
    },
    {
      name: "packageNamejp",
      type: "string",
      title: "Package Name - Japanese",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "packageName",
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
      title: "Departure date",
      name: "departureDate",
      type: "datetime",
      options: {
        dateFormat: "DD-MMM-YYYY",
        timeFormat: "hh:mm A",
        timeStep: 15,
        calendarTodayLabel: "Today",
      },
    },
    {
      title: "Return date",
      name: "returnDate",
      type: "datetime",
      options: {
        dateFormat: "DD-MMM-YYYY",
        timeFormat: "hh:mm A",
        timeStep: 15,
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "rate",
      type: "number",
      title: "Package Rate",
    },
    {
      title: "Destinations",
      name: "place",
      type: "array",
      of: [{ type: "reference", to: { type: "place" } }],
    },
    {
      title: "Destination Types",
      name: "placeType",
      type: "array",
      of: [{ type: "reference", to: { type: "placeType" } }],
    },
    {
      title: "Country",
      name: "country",
      type: "array",
      of: [{ type: "reference", to: { type: "country" } }],
      validation: (Rule) => Rule.max(1),
    },
    {
      title: "Tour Category",
      name: "category",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (Rule) => Rule.max(1),
    },
    {
      title: "Filter",
      name: "packageFilter",
      type: "array",
      of: [{ type: "reference", to: { type: "packageFilter" } }],
    },
    {
      title: "Package Images",
      name: "packageImages",
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
    {
      name: "contentjp",
      title: "Content - Japanese",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};
