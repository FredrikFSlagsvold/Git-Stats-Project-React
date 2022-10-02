import { Doughnut } from 'react-chartjs-2';
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
      <Doughnut
      data={data}
      options = {options}/> 
    </div>

    )

}
