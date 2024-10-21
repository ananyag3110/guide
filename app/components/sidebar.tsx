import Link from "next/link";

export default function SideBar() {

    return (
<div className="flex">
<div className="h-full w-1/8 text-black bg-white">
<div className="p-4">
  <h2 className="text-lg font-bold ">Category</h2>
</div>
<nav>
  <ul className="space-y-2">
    <li>
      <Link href="/" className="block p-2 hover:bg-gray-700 rounded">
        Home
      </Link>
    </li>
    <li>
      <Link href="/about" className="block p-2 hover:bg-gray-700 rounded">
        About
      </Link>
    </li>
    <li>
      <Link href="/services" className="block p-2 hover:bg-gray-700 rounded">
        Services
      </Link>
    </li>
    <li>
      <Link href="/contact" className="block p-2 hover:bg-gray-700 rounded">
        Contact
      </Link>
    </li>
  </ul>
</nav>
</div>
</div>
);
}