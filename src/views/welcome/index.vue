<script setup lang="ts">
import { ref, computed, type Ref } from "vue";
import { useDark, useECharts, type EchartOptions } from "@pureadmin/utils";

const { isDark } = useDark();

const theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "default";
});

const barChartRef = ref<HTMLDivElement | null>(null);
const { setOptions } = useECharts(barChartRef as Ref<HTMLDivElement>, {
  theme
});

const yData: number[] = new Array(6).fill(100);
const xData: string[] = ["1", "2", "3", "4", "5", "6"];

setOptions({
  xAxis: {
    data: xData,

    name: "日期"
  },
  yAxis: {
    type: "value",
    name: "访问量"
  },
  series: [
    {
      data: yData,
      type: "line",
      smooth: true
    }
  ]
});
</script>

<template>
  <div ref="barChartRef" style="width: 100%; height: 40vh" />
</template>
