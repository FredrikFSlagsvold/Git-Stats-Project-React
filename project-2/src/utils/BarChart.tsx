import {useState, useEffect} from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { getCommits } from '../utils/fetch';
import 'chart.js/auto';


type Commit = {
    id: string,
    title: string
    author_name: string
    committed_date: string
}



export default function BarChart() {

    const [commits, setCommits] = useState<Commit[]>([]);

    const fetchCommits = () => getCommits().then(commit => {setCommits(commit)})

    useEffect(() => {
        fetchCommits();
    }, [])


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
    };
      

      const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: 'Dataset 1',
            data: [100, 340, 605, 908, 506, 807, 506, 78],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: [100, 340, 605, 908, 506, 807, 506, 78],
            backgroundColor: 'rgba(255,99,132,0.5)',
          },
        ],
      };

    return <div><Bar options = {options} data = {data}  /> </div>

}
