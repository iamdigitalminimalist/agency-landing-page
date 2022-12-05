import { Logo } from "./Logo";
import { Container } from "./Container";
import Link from "next/link";
import { Hero } from "./Hero";
import React from "react";
import clsx from "clsx";
import { NavLinkProps } from "../../types";

export const NavLink = (props: NavLinkProps) => {
  return (
    <Link
      href={props.href}
      className={clsx(
        "inline-block px-4 transition duration-150 hover:underline hover:underline-offset-2 hover:decoration-custom-soft-red",
        props.className
      )}
    >
      {props.children}
    </Link>
  );
};

export const Header = () => {
  return (
    <header className="w-full text-custom-white font-sans bg-[#3ebfff]">
      <div className="bg-hero bg-contain bg-bottom bg-no-repeat w-full xl:bg-fill mx-auto py-10 ">
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
                    <NavLink href="#services">Services</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                  </div>
                  <NavLink
                    href="#contact"
                    className="flex items-center justify-center w-28 h-10 rounded-full bg-custom-white text-xs text-custom-extra-dark-desaturated-blue font-serif font-bold hover:no-underline"
                  >
                    CONTACT
                  </NavLink>
                </div>
              </div>
            </nav>
            <Hero />
          </>
        </Container>
      </div>
    </header>
  );
};
