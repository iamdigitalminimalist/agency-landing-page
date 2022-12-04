import { Logo } from "./Logo";
import { Container } from "./Container";
import Link from "next/link";
import { Hero } from "./Hero";
import React from "react";
import clsx from "clsx";

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const NavLink = (props: NavLinkProps) => {
  return (
    <Link
      href={props.href}
      className={clsx(
        "inline-block px-4 transition duration-150 hover:border-b-[1px] hover:border-custom-yellow text-sm",
        props.className
      )}
    >
      {props.children}
    </Link>
  );
};

export const Header = () => {
  return (
    <header className="py-10 bg-hero bg-cover bg-center bg-no-repeat text-custom-white font-sans">
      <Container>
        <>
          <nav className="relative flex-row">
            <div className="flex items-center justify-between">
              {/*  LOGO */}
              <Link href="/" aria-label="Home">
                <Logo />
              </Link>
              {/*  Pages */}
              <div className="hidden md:flex flex-row items-center md:gap-x-3">
                <div>
                  <NavLink href="#about">About</NavLink>
                  <NavLink href="#about">Services</NavLink>
                  <NavLink href="#about">Projects</NavLink>
                </div>
                <NavLink
                  href="#contact"
                  className="flex items-center justify-center w-28 h-10 rounded-full bg-custom-white font-bold text-xs text-custom-extra-dark-desaturated-blue font-serif border-hidden"
                >
                  CONTACT
                </NavLink>
              </div>
            </div>
          </nav>
          <Hero />
        </>
      </Container>
    </header>
  );
};
