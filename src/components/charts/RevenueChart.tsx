'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface RevenueChartProps {
  data: {
    labels: string[];
    revenue: number[];
  };
}

const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  const options: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    colors: ['#3b82f6'],
    xaxis: {
      categories: data.labels,
      labels: {
        style: {
          colors: '#6b7280',
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `$${value.toLocaleString()}`,
        style: {
          colors: '#6b7280',
        },
      },
    },
    grid: {
      borderColor: '#e5e7eb',
      strokeDashArray: 5,
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value.toLocaleString()}`,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
  };

  const series = [
    {
      name: 'Revenue',
      data: data.revenue,
    },
  ];

  return (
    <div className="w-full">
      <Chart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default RevenueChart;
