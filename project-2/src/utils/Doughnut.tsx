import { Doughnut } from "react-chartjs-2"
import 'chart.js/auto';

function DoughnutChart () {
const data = {
    labels: ['red', 'blue', 'yellow', 'green', 'purple', 'Orange'],
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