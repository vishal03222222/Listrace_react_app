import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const RecommendationsChart = () => {
    // Sample data for the scatter plot
    const data = {
        datasets: [
            {
                label: 'Min PP',
                data: [
                    { x: 32, y: 6000 }, { x: 34, y: 3000 },
                    // Add more data points here based on your actual data...
                ],
                backgroundColor: '#3B82F6', // blue
            },
            {
                label: 'Max 42',
                data: [
                    { x: 42, y: 4000 }, { x: 44, y: 2000 },
                    // Add more data points here based on your actual data...
                ],
                backgroundColor: '#60A5FA', // lighter blue
            },
            {
                label: 'Walks',
                data: [
                    { x: 48, y: 1500 }, { x: 50, y: 1000 },
                    // Add more data points here based on your actual data...
                ],
                backgroundColor: '#A5B4FC', // lightest blue
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                min: 30,
                max: 90,
                ticks: {
                    color: '#9CA3AF', // gray for tick labels
                },
                title: {
                    display: true,
                    text: 'Frequency (Hz)',
                    color: '#FFFFFF',
                },
                grid: {
                    color: '#374151', // dark grid color
                },
            },
            y: {
                min: 0,
                max: 7000,
                ticks: {
                    color: '#9CA3AF',
                },
                title: {
                    display: true,
                    text: 'Power (watts)',
                    color: '#FFFFFF',
                },
                grid: {
                    color: '#374151',
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: '#9CA3AF', // legend text color
                },
            },
        },
    };

    return (
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-gray-100">
            <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
            <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-4">
                    <button className="text-red-500 border-b-2 border-red-500">Optimization opportunities</button>
                    <button className="text-gray-500">Pw/Hz</button>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-3 py-1 rounded bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none"
                    />
                </div>
            </div>
            <Scatter data={data} options={options} />
        </div>
    );
};

export default RecommendationsChart;
