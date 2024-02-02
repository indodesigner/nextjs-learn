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
      name: "duration",
      type: "object",
      title: "Duration",
      fields: [
        { name: "days", type: "number", title: "Days" },
        { name: "nights", type: "number", title: "Nights" },
      ],
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
      title: "Business Package",
      name: "isBusiness",
      type: "boolean",
      description: "Check if the package is Business Packages or not.",
      initialValue: false,
    },
    {
      title: "Trending",
      name: "isTrending",
      type: "boolean",
      description: "Check if the package is trending.",
      initialValue: false,
    },
    {
      title: "Package Images",
      name: "packageImages",
      description:
        "Upload images with 16:9 aspect ratio (eg. 1280 x 720 pixels)",
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
      name: "summary",
      title: "Summary Content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      name: "summaryjp",
      title: "Summary Content - Japanese",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      name: "content",
      title: "Detailed Schedule",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      name: "contentjp",
      title: "Detailed Schedule - Japanese",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      name: "inclusions",
      title: "Inclusion Details",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      name: "inclusionsjp",
      title: "Inclusion Details - Japanese",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};
