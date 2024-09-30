// Dashboard.js
import React from 'react';
import { Box, Grid } from '@mui/material';
import UserProfile from '../../components/UserProfile';
import HealthMetrics from '../../components/HealthMetrics';
import SleepSchedule from '../../components/SleepSchedule';
import PolicyMetrics from '../../components/PolicyMetrics';
import BloodPressureWidget from '../../components/BloodPressure';
import HeartRateWidget from '../../components/HeartRate';


const Dashboard = () => {
    return (
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* First Row: User Profile, Health Metrics, Sleep Schedule */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <UserProfile />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <HealthMetrics />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SleepSchedule />
                </Grid>
            </Grid>

            {/* Second Row: Policy Metrics, Blood Pressure, Heart Rate */}
            <Grid container spacing={3} sx={{ mt: 3 }}>
                <Grid item xs={12} sm={4}>
                    <PolicyMetrics />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <BloodPressureWidget />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <HeartRateWidget />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
