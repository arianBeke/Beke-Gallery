import Link from "next/link";

const navigation = [
  { name: 'Support', href: '/pages/support/' }
];

export default function Navbar() {
  return (
    <nav className="w-full relative flex flex-col items-center justify-between lg:flex-row lg:items-center lg:justify-between max-w-2xl mx-auto px-4 py-5">
      <Link href="/" className="font-bold text-white text-2xl lg:text-3xl">
        Beke<span className="text-[#00df9a]">Gallery</span>
      </Link>
      <div className="lg:flex mt-5 md:mt-0 lg:gap-x-12">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="text-l lg:text-base font-semibold leading-6 hover:text-[#00df9a] text-white">
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
