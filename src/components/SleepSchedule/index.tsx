// SleepSchedule.js
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const SleepSchedule = () => {
    return (
        <Box sx={{ p: 2, backgroundColor: '#e6f7ff', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
                Sleep Schedule
            </Typography>
            <Card sx={{ boxShadow: 3, backgroundColor: '#ffffff' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Recommended Sleep
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        8 hours per night
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default SleepSchedule;
