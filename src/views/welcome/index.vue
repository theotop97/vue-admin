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

const datas: number[] = new Array(6).fill(100);

setOptions({
  xAxis: {
    data: ["1", "2", "3", "4", "5", "6"],

    name: "日期"
  },
  yAxis: {
    type: "value",
    name: "访问量"
  },
  series: [
    {
      data: datas,
      type: "line",
      smooth: true
    }
  ]
});
</script>

<template>
  <div ref="barChartRef" style="width: 100%; height: 40vh" />
</template>
