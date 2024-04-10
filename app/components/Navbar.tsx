import Link from "next/link";


const navigation = [
  { name: 'Support', href: './pages/support/' },
];

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
      <Link href="/" className="font-bold text-white text-3xl">
        The<span className="text-[#00df9a]">Gallery</span>
      </Link>
      <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-l font-semibold leading-6 hover:text-[#00df9a] text-white">
              {item.name}
            </a>
          ))}
        </div>
    </nav>
  );
}
