import { Chart as ChartJS } from 'chart.js/auto'
import { useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';



export const DoughnutChart = ({ chartData }) => {

    return (
        <>
            <h2>Barchart</h2>
            <div>
                {chartData &&
                    // <p>test</p>
                    <div>
                        <Doughnut
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