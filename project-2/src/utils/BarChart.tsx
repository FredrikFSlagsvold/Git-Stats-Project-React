import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';


export default function BarChart({authorList, dataList}: {authorList: Array<string>; dataList: Array<number>;}) {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
    }

      const data = {
        labels: authorList,
        datasets: [
          {
            label: 'Commits',
            data: dataList,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
