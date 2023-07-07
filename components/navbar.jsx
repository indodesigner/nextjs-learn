import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center py-4 sticky top-0 z-50 bg-gray-800">
      <div className="max-w-3xl">
        <ul className="flex flex-row gap-3">
          <li>
            <Link href="/nextjs-l" className="font-medium hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/about" className="font-medium hover:underline">About</Link>
          </li>
          <li>
            <Link href="/about/team" className="font-medium hover:underline">Team</Link>
          </li>
          <li>
            <Link href="/code/repos" className="font-medium hover:underline">Code</Link>
          </li>
          <li>
            <Link href="/test" className="font-medium hover:underline">Test</Link>
          </li>
          <li>
            <Link href="/form" className="font-medium hover:underline">Form</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
