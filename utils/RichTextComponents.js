import Image from "next/image";
import Link from "next/link";
import urlFor from "/utils/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value).url()}
        alt="image"
        className="relative w-full my-3"
        width={800}
        height={300}
      />
    ),
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link href={value.href} rel={rel}>
          {children}
        </Link>
      );
    },
  },
  block: {
    // Ex. 1: customizing common block types
    block: ({ children }) => <p>{children}</p>,
    p: ({ children }) => <p className="mb-4 sm:mb-8">{children}</p>,
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mb-3">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-xl mt-4 mb-1">{children}</h3>,
    h4: ({ children }) => (
      <h4 className="text-lg mt-4 mb-1 text-red-500">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-base font-bold mt-4 mb-1">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-sm font-bold mb-1">{children}</h6>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li style={{ listStyleType: "disc" }}>{children}</li>
    ),
    number: ({ children }) => (
      <li style={{ listStyleType: "decimal" }}>{children}</li>
    ),

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};
