
import React from 'react'
import { Line }from 'react-chartjs-2'

export default function Chart({data: {count , price}}) {

    const chartData = {
        labels: count,
        datasets: [
            {
            label: "Line Graph",
            fill: false,
            backgroundColor: 'rgb(50, 99, 132)',
            borderColor: 'rgba(50, 120, 255, 0.7)',
            borderDash:[],
            pointHoverRadius:1,
            pointRadius:1.5,
            pointHitRadius:15,
            data: price
            }
        ]
    }
    return (
        <div>
            <Line data={chartData} />
        </div>
    )
}
