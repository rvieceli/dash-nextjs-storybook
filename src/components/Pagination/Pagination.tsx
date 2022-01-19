import { Box, HStack, Stack, Text } from "@chakra-ui/react";

import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalItems: number;
  itemsPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const PAGE_SIZE = 10;
const SIBLINGS_COUNT = 1;

const pageRange = (from: number, to: number) => {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0);
};

const Pagination = ({
  totalItems,
  itemsPerPage = PAGE_SIZE,
  currentPage = 1,
  onPageChange,
}: PaginationProps) => {
  const lastPage = Math.ceil(totalItems / itemsPerPage);

  const previousPages =
    currentPage > 1
      ? pageRange(currentPage - 1 - SIBLINGS_COUNT, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? pageRange(currentPage, Math.min(currentPage + SIBLINGS_COUNT, lastPage))
      : [];

  const showFirst = currentPage > SIBLINGS_COUNT + 1;
  const showFirstEllipsis = currentPage > SIBLINGS_COUNT + 2;
  const showLast = currentPage < lastPage - SIBLINGS_COUNT;
  const showLastEllipsis = currentPage < lastPage - SIBLINGS_COUNT - 1;

  return (
    <Stack
      direction={["column", "row"]}
      marginTop="8"
      spacing="6"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <strong>1</strong> - <strong>10</strong> of <strong>100</strong>
      </Box>
      <HStack spacing="2">
        {showFirst && <PaginationItem number={1} onPageChange={onPageChange} />}
        {showFirstEllipsis && (
          <Text color="gray.300" width="8" textAlign="center">
            ...
          </Text>
        )}
        {previousPages.map((page) => (
          <PaginationItem
            key={page}
            number={page}
            onPageChange={onPageChange}
          />
        ))}
        <PaginationItem number={currentPage} active />
        {nextPages.map((page) => (
          <PaginationItem
            key={page}
            number={page}
            onPageChange={onPageChange}
          />
        ))}
        {showLastEllipsis && (
          <Text color="gray.300" width="8" textAlign="center">
            ...
          </Text>
        )}
        {showLast && (
          <PaginationItem number={lastPage} onPageChange={onPageChange} />
        )}
      </HStack>
    </Stack>
  );
};

export { Pagination };
