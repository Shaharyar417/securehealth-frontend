// HealthMetrics.js
import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, BarElement } from 'chart.js';

// Register necessary Chart.js components
Chart.register(LineElement, CategoryScale, LinearScale, PointElement, BarElement);

const HealthMetrics = () => {
    // Wave-like chart for heart rate
    const heartRateData = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
        datasets: [
            {
                label: 'Heart Rate (bpm)',
                data: [70, 85, 85, 80, 78, 78, 70, 65],  // Wave type
                borderColor: '#FF6F61',
                backgroundColor: 'rgba(255, 111, 97, 0.2)',
                tension: 0.5,  // Creates the wave-like effect
                fill: true,
            },
        ],
    };

    // Square-like chart for blood pressure
    const bloodPressureData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Blood Pressure (mmHg)',
                data: [120, 122, 118, 125, 130, 110, 128],
                borderColor: '#6A5ACD',
                backgroundColor: 'rgba(106, 90, 205, 0.2)',
                fill: true,
                stepped: true,  // Stepped line chart for square effect
            },
        ],
    };

    // Thin bar chart for sleep data
    const sleepData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Sleep (hours)',
                data: [7, 8, 6, 7, 7.5, 8, 6.5],
                borderColor: '#20B2AA',
                backgroundColor: '#20B2AA',
                borderWidth: 1,
                barThickness: 6,  // Thin bars
            },
        ],
    };

    return (
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2, backgroundColor: '#f0f4f8', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
                Health Metrics
            </Typography>
            <Grid container spacing={2}>
                {/* Heart Rate with wave-like line chart */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ boxShadow: 3, backgroundColor: '#ffffff' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Heart Rate
                            </Typography>
                            <Line data={heartRateData} />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Blood Pressure with stepped line chart */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ boxShadow: 3, backgroundColor: '#ffffff' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Blood Pressure
                            </Typography>
                            <Line data={bloodPressureData} />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Sleep with thin bar chart */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ boxShadow: 3, backgroundColor: '#ffffff' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Sleep
                            </Typography>
                            <Bar data={sleepData} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HealthMetrics;
