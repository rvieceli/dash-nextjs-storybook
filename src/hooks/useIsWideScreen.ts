import { useBreakpointValue } from "@chakra-ui/react";

type Breakpoint = "md" | "lg";

const useIsWideScreen = (breakpoint: Breakpoint = "lg") => {
  const isWideScreen = useBreakpointValue({ base: false, [breakpoint]: true });

  return isWideScreen || true;
};

export { useIsWideScreen };
