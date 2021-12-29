import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Box className="main_menu" sx={{ textAlign: 'center', margin: 'auto' }}>
                            <NavLink className="nav_link" to="/home">Home</NavLink>
                            <NavLink className="nav_link" to="/Allproducts">Products</NavLink>
                            <NavLink className="nav_link" to="/Shop">Shop</NavLink>
                            <NavLink className="nav_link" to="/more">More</NavLink>
                        </Box>
                    </Box>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;