import { React } from "react";
import './App.css';
//react
import { useEffect, useState } from 'react'
//data
import { fetchPrices } from './data/userRepository'
//components
import { BarChart } from './components/BarChart';
import { DoughnutChart } from './components/DoughnutChart';
import { LineChart } from './components/LineChart';
import { Container } from './components/UI/Continer';

function App() {

  const [chartData, setChartData] = useState("");

  useEffect(() => {
    // fetchPrices().then(data => setChartData(data))
    fetchPrices().then(items => setChartData({
      labels: items.data.map((crypto) => crypto.name),
      datasets: [
        {
          label: "Price in USD",
          data: items.data.map((crypto) => crypto.priceUsd),
          backgroundColor: [
            "#ffbb11",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0"
          ]
        }
      ]
    }))

  }, []);



  return (
    <div className="App">
      <h1>React charts experiment</h1>
      <Container className="container-md">
        <BarChart chartData={chartData} />
      </Container>
      <Container className="container-md">
        <DoughnutChart chartData={chartData} />
      </Container>

      <Container className="container-md">
        <LineChart chartData={chartData} />
      </Container>




      <p>made with React-chartjs-2 is a React wrapper for Chart.js 2.0 and 3.0, letting us use Chart.js elements as React components.</p>
      <p>https://blog.logrocket.com/using-chart-js-react/</p>
    </div>
  );
}

export default App;
