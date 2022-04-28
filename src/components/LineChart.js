import { Chart as ChartJS } from 'chart.js/auto'
import { useEffect } from 'react'
import { Line } from "react-chartjs-2";


export const LineChart = ({ chartData }) => {

    return (
        <div>
            <p>Chart:</p>
            <div>
                {chartData &&
                    <div>
                        <Line
                            data={chartData}
                            options={{
                                plugins: {
                                    title: {
                                        display: true,
                                        text: "Cryptocurrency prices"
                                    },
                                    legend: {
                                        display: true,
                                        position: "bottom"
                                    }
                                }
                            }}
                        />
                    </div>
                }
            </div>
        </div>
    )
}