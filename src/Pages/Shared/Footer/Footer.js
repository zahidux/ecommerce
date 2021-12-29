import { Container, Grid, IconButton, Typography, Paper, Box } from '@material-ui/core';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ py: 5, mt: 10, background: '#000' }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4">
                            ForXd Shop
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Paper className="footer_icon">
                                <FacebookOutlinedIcon sx={{ color: '##28589c' }} />
                            </Paper>
                            <Paper className="footer_icon">
                                <TwitterIcon sx={{ color: '#00' }} />
                            </Paper>
                            <Paper className="footer_icon">
                                <LinkedInIcon sx={{ color: '#000' }} />
                            </Paper>
                            <Paper className="footer_icon">
                                <GoogleIcon sx={{ color: '#000' }} />
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
                <Paper sx={{ textAlign: 'center', mt: 4 }}>
                    <a style={{ textDecoration: 'none', margin: '0 5px', color: '#777', textTransform: 'capitalize' }} href="#">About us</a> <span style={{ color: '#777' }}>|</span>
                    <a style={{ textDecoration: 'none', margin: '0 5px', color: '#777', textTransform: 'capitalize' }} href="#">Policy & policy</a> <span style={{ color: '#777' }}>|</span>
                    <a style={{ textDecoration: 'none', margin: '0 5px', color: '#777', textTransform: 'capitalize' }} href="#">Returns</a> <span style={{ color: '#777' }}>|</span>
                    <a style={{ textDecoration: 'none', margin: '0 5px', color: '#777', textTransform: 'capitalize' }} href="#">Contact us</a>
                </Paper>
            </Container>
        </Box>
    );
};

export default Footer;