import { Chart as ChartJS } from 'chart.js/auto'
import { useEffect } from 'react'
import { Bar } from "react-chartjs-2";



export const BarChart = ({ chartData }) => {

    return (
        <>
            <h2>Barchart</h2>
            <div>
                {chartData &&
                    // <p>test</p>
                    <div>
                        <Bar
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
        </>
    )
}