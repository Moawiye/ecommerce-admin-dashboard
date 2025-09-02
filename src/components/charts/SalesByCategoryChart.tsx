'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const SalesByCategoryChart: React.FC = () => {
  const options = {
    chart: {
      type: 'donut' as const,
      height: 350,
    },
    labels: ['Electronics', 'Clothing', 'Books', 'Sports', 'Home & Garden'],
    colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(1)}%`,
      style: {
        fontSize: '12px',
        fontFamily: 'Inter, sans-serif',
      },
    },
    legend: {
      position: 'bottom' as const,
      fontSize: '14px',
      fontFamily: 'Inter, sans-serif',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom' as const,
          },
        },
      },
    ],
  };

  const series = [35, 25, 20, 15, 5];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales by Category</h3>
      <Chart options={options} series={series} type="donut" height={350} />
    </div>
  );
};

export default SalesByCategoryChart;
