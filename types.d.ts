import React from "react";

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

type Benefit = {
  id: number;
  imgSrc: string;
  imgAlt: string;
  title: string;
  content: string;
};

interface BenefitsSectionProps {
  benefits: Benefit[];
}
