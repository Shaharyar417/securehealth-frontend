// BloodPressureWidget.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';

const bloodPressureData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
        {
            label: 'Blood Pressure (mmHg)',
            data: [120, 122, 118, 125, 130, 110, 128],
            borderColor: '#6A5ACD',
            backgroundColor: 'rgba(106, 90, 205, 0.2)',
            fill: true,
            stepped: true,
        },
    ],
};

const BloodPressureWidget = () => {
    return (
        <Card sx={{ boxShadow: 3, backgroundColor: '#fff', height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Blood Pressure
                </Typography>
                <Line data={bloodPressureData} />
            </CardContent>
        </Card>
    );
};

export default BloodPressureWidget;
