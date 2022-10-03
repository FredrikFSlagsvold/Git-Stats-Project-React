import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';


type BarChartProps = {
  authorList?: Array<String>
  dataList?: Array<number>
}

export default function BarChart({authorList, dataList}: BarChartProps) {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Overview',
          },
        },
    }

      const data = {
        labels: authorList,
        datasets: [
          {
            label: 'Commits',
            data: dataList,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
        ],
      }

    return (
    <div>
      <Bar
      data={data}
      options = {options}/> 
    </div>

    )

}
