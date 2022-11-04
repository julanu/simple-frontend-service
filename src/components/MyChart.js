import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class LineRechartComponent extends React.Component {
    
    // ISO 8601 timestamp
    data = [
        {
            "timestamp": "2021-08-31T06:10:22+00:00",
            "RPi-1": 3432,
            "RPi-2": 2342
        },
        {
            "timestamp": "2021-05-31T06:10:22+00:00",
            "RPi-1": 2342,
            "RPi-2": 3246
        },
        {
            "timestamp": "2021-09-31T06:10:22+00:00",
            "RPi-1": 4565,
            "RPi-2": 4556
        },
        {
            "timestamp": "2021-10-31T06:10:22+00:00",
            "RPi-1": 6654,
            "RPi-2": 4465
        },
        {
            "timestamp": "2021-12-31T06:10:22+00:00",
            "RPi-1": 8765,
            "RPi-2": 4553
        }
    ]

    render() {
        return (
            <LineChart width={800} height={550} data={this.data}
                margin={{ top: 5, right: 30, left: 50, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="RPi-1" stroke="#0095FF" />
                <Line type="monotone" dataKey="RPi-2" stroke="#FF0000" />
            </LineChart>
        )
    };
}

export default LineRechartComponent;