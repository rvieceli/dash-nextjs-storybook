import { eachDayOfInterval, subDays } from "date-fns";

import { theme } from "app/styles/theme.chakra";

import type { ApexOptions } from "apexcharts";

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: eachDayOfInterval({
      start: subDays(new Date(), 6),
      end: new Date(),
    }).map((date) => date.toISOString()),
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

export { options };
