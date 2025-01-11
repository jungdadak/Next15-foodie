'use client';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
  href: string;
}

export default function NavLink({ href, children }: PageProps) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`no-underline font-bold py-1 px-2 md:py-2 md:px-4 rounded-lg transition-colors duration-300 antialiased truncate block ${
        path.startsWith(href)
          ? 'text-orange-400 bg-gradient-to-r from-[#ff8a05] to-[#f9b331] text-transparent bg-clip-text'
          : 'text-gray-300 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331]'
      }`}
    >
      {children}
    </Link>
  );
}
