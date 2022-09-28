import { Doughnut } from "react-chartjs-2"
import 'chart.js/auto';

type CommitProps = {
    author_name: string;
}


function DoughnutChart (props: CommitProps) {
const data = {
    labels: [props.author_name],
    datasets: [
        {
        data: [12, 19, 3, 5, 2, 3]
    
        }],
    };

    return (
    <div>
        <h1>Doughnut Chart</h1>
        <div>
            <Doughnut data={data} />
        </div>
    </div>
    )
}

export default DoughnutChart;