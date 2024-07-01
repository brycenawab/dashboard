import * as React from 'React';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import mockTransactions from "./data"

const chartSetting = {
  yAxis: [
    {
      label: 'revenue',
    },
  ],
  width: 600,
  height: 500,
  sx: {
    [`.${axisClasses.left}.${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};


const valueFormatter = (value) => `${value}mm`;

const groupDataByMonth = (data) => {
  const months = {};
  data.forEach((transaction) => {
    const year = transaction.date.split('-')[0];
    const month = transaction.date.split('-')[1];
    const yearMonth = `${year}-${month}`;
    if (!months[yearMonth]) {
      months[yearMonth] = 0;
    }
    months[yearMonth] += transaction.cost;
  });
  return Object.keys(months).map((yearMonth) => {
    const year = yearMonth.split('-')[0];
    const month = yearMonth.split('-')[1];
    return { x: `${month}/${year}`, y: months[yearMonth] };
  }).sort((a, b) => a.x.localeCompare(b.x));
};


export default function BarsDataset() {
  const data = groupDataByMonth(mockTransactions);
  return (
    <div className='inline' style={{ marginRight: 1250 }}> 
      <BarChart
        dataset={data}
        xAxis={[{ scaleType: 'band', dataKey: 'x' }]}
        series={[
          { dataKey: 'y', label: 'Revenue', valueFormatter },
        ]}
        {...chartSetting}
      />
    </div>
  );
}