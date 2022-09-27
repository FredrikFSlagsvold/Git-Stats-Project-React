import {useState, useEffect} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getCommits } from '../utils/fetch';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


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
      
      const labels = ["January", "February", "March", "April", "May", "June", "July"];

      const data = {
   
        datasets: [
          {
            label: 'Dataset 1',
            // data: commits.filter((commit) => commit.author_name.includes('Fredrik')).length,
            data: [100, 340, 605, 908, 506, 807, 506, 78],

            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: [100, 340, 605, 908, 506, 807, 506, 78],
            // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(0,0,0,0)',
          },
        ],
      };


    return <Bar data = {data} options = {options}></Bar>

}
