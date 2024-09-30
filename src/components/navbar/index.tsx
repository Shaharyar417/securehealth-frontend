// TopNav.js
import Logo from "../../assets/secure-health.svg";
import { AppBar, Toolbar, IconButton, Typography, InputBase, Box } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, AccountCircle } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

// Updated the width to increase the size of the search box
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30ch',  // Increased from 20ch to 30ch
        },
    },
}));

const TopNav = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    <img src={Logo} alt="Project Logo" style={{ width: "120px", height: "80px" }} />
                </Typography>


                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
                    <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default TopNav;
