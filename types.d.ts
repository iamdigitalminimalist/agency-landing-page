import React from "react";

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

interface BenefitsSectionProps {
  id: number;
  imgSrc: string;
  imgAlt: string;
  title: string;
  content: string;
}
