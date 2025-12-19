import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-gray-700 text-white">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <ul className="flex gap-6">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link href="/submit" className="hover:text-gray-300">Submit a Fact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
