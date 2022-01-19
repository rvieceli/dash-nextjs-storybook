import { Box, Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "../NavLink/NavLink";
import { NavSection } from "../NavSection/NavSection";

const NavMenu = () => {
  return (
    <Stack spacing="12" alignItems="flex-start">
      <NavSection title="General">
        <NavLink title="Dashboard" href="/dashboard" icon={RiDashboardLine} />
        <NavLink title="Users" href="/users" icon={RiContactsLine} />
      </NavSection>
      <NavSection title="Automation">
        <NavLink title="Forms" href="/forms" icon={RiInputMethodLine} />
        <NavLink title="Automation" href="/automation" icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  );
};

export { NavMenu };
