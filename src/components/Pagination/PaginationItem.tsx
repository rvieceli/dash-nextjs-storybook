import { Button, ButtonProps } from "@chakra-ui/react";

type Active = true | false;

interface BaseProps extends ButtonProps {
  active?: Active;
  number: number;
}

interface PaginationItemActiveProps extends BaseProps {
  active: true;
}

interface PaginationItemInactiveProps extends BaseProps {
  active?: false;
  onPageChange: (number: number) => void;
}

interface PaginationItemProps extends BaseProps {
  onPageChange?: (number: number) => void;
}

function PaginationItem(props: PaginationItemActiveProps): JSX.Element;
function PaginationItem(props: PaginationItemInactiveProps): JSX.Element;
function PaginationItem({
  active = false,
  number,
  onPageChange,
  ...props
}: PaginationItemProps): JSX.Element {
  if (active) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          backgroundColor: "pink.500",
          cursor: "default",
        }}
        {...props}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      backgroundColor="gray.700"
      _hover={{
        backgroundColor: "gray.500",
      }}
      onClick={() => onPageChange?.(number)}
      {...props}
    >
      {number}
    </Button>
  );
}

export { PaginationItem };
