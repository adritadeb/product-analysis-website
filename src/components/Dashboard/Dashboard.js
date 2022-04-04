import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('chartData.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <div className='md:flex justify-center mt-16'>
            <div>
                <h2 className='text-3xl font-bold text-blue-400 mb-9'>Month Wise Sell</h2>
                <LineChart width={500} height={400} data={data}>
                    <Line type="monotone" dataKey={'sell'} stroke="#8884d8" strokeWidth={2}></Line>
                    <XAxis dataKey='month'></XAxis>
                    <Tooltip />
                    <Legend />
                    <YAxis></YAxis>
                </LineChart>
            </div>
            <div className='md:ml-9'>
                <h2 className='text-3xl font-bold text-blue-400 mb-9'>Investment VS Revenue</h2>
                <BarChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;