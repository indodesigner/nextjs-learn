import Image from "next/image"; 
 import Link from "next/link"; 
 import urlFor from "./urlFor"; 
  
 export const RichTextComponents = { 
   types: { 
     image: ({ value }) => ( 
       <Image 
         src={urlFor(value).url()} 
         alt="blog post image" 
         className="relative" 
         width={800} 
         height={500} 
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
     h1: ({ children }) => <h1 className="text-2xl">{children}</h1>, 
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
  
