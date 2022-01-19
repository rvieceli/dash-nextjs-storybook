import { cloneElement, ReactElement } from "react";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  exact?: boolean;
}

const ActiveLink = ({ children, exact = false, ...props }: ActiveLinkProps) => {
  const { pathname } = useRouter();
  const { href, as } = props;

  const isActive = exact
    ? pathname === href || pathname === as
    : pathname.startsWith(String(href)) || pathname.startsWith(String(as));

  return (
    <Link {...props}>
      {cloneElement(children, { color: isActive ? "pink.400" : "gray.50" })}
    </Link>
  );
};

export { ActiveLink };
