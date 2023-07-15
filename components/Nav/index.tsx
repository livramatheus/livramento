'use client';

import React, { useState } from 'react';
import INavLinks from '@/interfaces/INavLinks';
import Link from 'next/link';

import {
  RiHome2Line, RiMenuLine, RiMacbookLine, RiPassportLine, RiMailLine,
} from 'react-icons/ri';
import NavItem from '../NavItem';
import ResponsiveNavItem from '../NavItem/ResponsiveNavItem';

function Nav() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navLinks: INavLinks[] = [
    {
      title: 'Portfolio',
      href: '/portfolio',
      Icon: RiMacbookLine,
    },
    {
      title: 'About',
      href: '/about',
      Icon: RiPassportLine,
    },
    {
      title: 'Contact',
      href: '/contact',
      Icon: RiMailLine,
    },
  ];

  return (
    <nav
      className="flex justify-between items-center max-md:px-5 px-36 bg-zinc-900 text-zinc-200 sticky top-0 h-20 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50"
    >
      <Link href="/" className="flex gap-3 items-center text-lg">
        <span>☕</span>
        <span className="font-bold">Matheus do Livramento</span>
      </Link>

      <div className="hidden max-md:flex">
        <RiMenuLine
          className="text-3xl
          cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      <div
        className={`hidden max-md:flex gap-4 flex-col w-1/2 h-screen fixed top-0 left-0 bg-zinc-900 shadow-lg border-r border-zinc-700 p-10 transition-transform ${menuOpen || '-translate-x-full'}`}
      >
        <h3 className="text-xl font-bold mb-5">Menu</h3>
        <div className="flex gap-4 items-center">
          <RiHome2Line className="text-xl" />
          <Link onClick={() => setMenuOpen(false)} className="hover:underline" href="/">
            Home
          </Link>
        </div>

        {
          navLinks.map((l) => <ResponsiveNavItem key={`${l.title}r`} {...l} setMenuOpen={setMenuOpen} />)
        }
      </div>

      <div className="flex max-md:hidden gap-10">
        {
          navLinks.map((l) => <NavItem key={`${l.title}d`} title={l.title} href={l.href} />)
        }
      </div>
    </nav>
  );
}

export default Nav;
