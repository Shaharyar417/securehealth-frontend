// HeartRateWidget.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';

const heartRateData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    datasets: [
        {
            label: 'Heart Rate (bpm)',
            data: [70, 85, 85, 80, 78, 78, 70, 65],
            borderColor: '#FF6F61',
            backgroundColor: 'rgba(255, 111, 97, 0.2)',
            tension: 0.5,
            fill: true,
        },
    ],
};

const HeartRateWidget = () => {
    return (
        <Card sx={{ boxShadow: 3, backgroundColor: '#fff', height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Heart Rate
                </Typography>
                <Line data={heartRateData} />
            </CardContent>
        </Card>
    );
};

export default HeartRateWidget;
