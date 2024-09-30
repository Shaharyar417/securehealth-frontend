// UserProfile.js

import { Box, Typography, CircularProgress, Avatar } from '@mui/material';

const UserProfile = () => {
    return (
        <Box sx={{ p: 2, boxShadow: 3, borderRadius: 2, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
                User Profile
            </Typography>

            {/* Circular progress around the user image */}
            <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
                <CircularProgress
                    variant="determinate"
                    value={70}  // Example danger threshold
                    size={120}
                    thickness={4}
                    sx={{ color: '#ff6f61' }} // Danger color
                />
                <Avatar
                    src="https://via.placeholder.com/100"  // Placeholder for user image
                    alt="User Image"
                    sx={{
                        width: 100,
                        height: 100,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            </Box>

            <Typography variant="subtitle1" gutterBottom>
                John Doe
            </Typography>
        </Box>
    );
};

export default UserProfile;
