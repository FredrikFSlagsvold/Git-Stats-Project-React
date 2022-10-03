import { Line } from 'react-chartjs-2';
import 'chart.js/auto';


type LineChartProps = {
  authorList?: Array<String>
  dataList?: Array<number>
}

export default function LineChart({authorList, dataList}: LineChartProps) {

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
            fill: false,
            borderColor: "rgba(75, 192, 192, 0.8)",
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
        ],
      }

    return (
    <div>
      <Line
      data={data}
      options = {options}/> 
    </div>
    )
}
