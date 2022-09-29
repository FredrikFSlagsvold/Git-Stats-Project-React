import {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import { getCommits } from '../utils/fetch';
import 'chart.js/auto';


type Commit = {
    id: string,
    title: string
    author_name: string
    committed_date: string
}


export default function BarChart( ) {

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

      const Authors = Array.from(new Set(commits?.map(commit => commit.author_name)))

      const NicoCommits = commits.filter((commit) => commit.author_name.includes("Nicolai")).length
      const MarianneCom = commits.filter((commit) => commit.author_name.includes("Marianne") || commit.author_name.includes("maribsta")).length
      const FredCom = commits.filter((commit) => commit.author_name.includes("Fredrik")).length



      const data = {
        labels: Authors,
        datasets: [
          {
            label: 'Commits',
            data: [NicoCommits, MarianneCom, 0, FredCom],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

    return (
    <div>

      <Bar options = {options} data = {data}  /> 
    </div>

    )

}
