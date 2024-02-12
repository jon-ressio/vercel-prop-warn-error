"use client";
import { Url } from "next/dist/shared/lib/router/router";

export const Thing = ({
  as,
  href,
  children,
}: {
  as?: React.ElementType;
  href: Url;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h1>Thing</h1>
      <a href={href.toString()}>{children}</a>
    </div>
  );
};

