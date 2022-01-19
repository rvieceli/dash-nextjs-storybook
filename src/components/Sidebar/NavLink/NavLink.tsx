import { ElementType } from "react";
import { useRouter } from "next/router";
import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";
import { ActiveLink } from "../..";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  href: string;
  title: string;
}

const NavLink = ({ icon, title, href, ...props }: NavLinkProps) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...props}>
        <Icon as={icon} fontSize="20" />
        <Text marginLeft="4" fontWeight="medium">
          {title}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
};

export { NavLink };
