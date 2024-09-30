// PolicyMetrics.js
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import FlexBetween from '../FlexBetween';

const PolicyMetrics = () => {
    return (
        <Box sx={{ p: 2, backgroundColor: '#fff', borderRadius: 2, boxShadow: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
                Policy Metrics
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FlexBetween>
                        <Typography variant="body1">Premium</Typography>
                        <Typography variant="body1">8%</Typography>
                    </FlexBetween>
                </Grid>
                <Grid item xs={12}>
                    <FlexBetween>
                        <Typography variant="body1">Health Score</Typography>
                        <Typography variant="body1">6.7%</Typography>
                    </FlexBetween>
                </Grid>
                <Grid item xs={12}>
                    <FlexBetween>
                        <Typography variant="body1">Claim History</Typography>
                        <Typography variant="body1">__</Typography>
                    </FlexBetween>
                </Grid>
                <Grid item xs={12}>
                    <FlexBetween>
                        <Typography variant="body1">Rewards History</Typography>
                        <Typography variant="body1">__</Typography>
                    </FlexBetween>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PolicyMetrics;
