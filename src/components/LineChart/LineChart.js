import React from 'react';
import { Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
import ChartDataLoad from '../../hooks/ChartDataLoad';

const LineChart = () => {
    const [data, setData] = ChartDataLoad([]);
    return (
        <div>
            <h2 className='text-3xl font-bold text-blue-400'>Month Wise Sell</h2>
            <LineChart width={500} height={500} data={data}>
                <Line type="monotone" dataKey={'sell'} stroke="#8884d8" strokeWidth={2}></Line>
                <XAxis dataKey='month'></XAxis>
                <Tooltip />
                <Legend />
                <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

export default LineChart;