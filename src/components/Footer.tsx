import React from 'react';
import { Box, Grid, Typography, Link, Divider, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import logo from '../assets/img/UT Logo.jpeg';

export default function Footer() {
    return (
        <Box component="footer" paddingTop={20}>
            {/* Waves */}
            <Box className="boxWave">
                <Box className="wave wave1"></Box>
                <Box className="wave wave2"></Box>
                <Box className="wave wave3"></Box>
                <Box className="wave wave4"></Box>
            </Box>

            {/* Footer */}
            <Box className="bg-main-color" py={4}>
                <Grid container spacing={4} justifyContent="center">
                    {/* Logo & Social media */}
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box textAlign="center">
                            <Box>
                                {/* Redes sociales */}
                                <Link href="https://www.facebook.com/KevinS018" color="inherit" mx={1}>
                                    <FacebookIcon
                                        sx={{ backgroundColor: 'none', color: 'primary.contrastText', borderRadius: '50%', padding: '5px', fontSize: '30px'}}
                                    />
                                </Link>
                                <Link href="https://github.com/AlphaSKC" color="inherit" mx={1}>
                                    <GitHubIcon
                                        sx={{ backgroundColor: 'none', color: 'primary.contrastText', borderRadius: '50%', padding: '5px', fontSize: '30px' }}
                                    />
                                </Link>
                                <Link href="https://www.linkedin.com/in/kevin-campos-buendia-b2b364305/" color="inherit" mx={1}>
                                    <LinkedInIcon
                                        sx={{ backgroundColor: 'none', color: 'primary.contrastText', borderRadius: '50%', padding: '5px', fontSize: '30px'}}
                                    />
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Franja inferior */}
            <Box className="bg-main-color" py={2}>
                <Container>
                    <Divider sx={{ background: 'white', marginBottom: '10px' }} />
                </Container>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <Typography align="center" fontSize={13} color="primary.contrastText">
                            ©2024 Kevin Campos Buendia.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography align="center" fontSize={13} color="primary.contrastText">
                            <Link className='links-title' href="#" color="inherit">Términos y Condiciones</Link> | <Link className='links-title' href="#" color="inherit">Aviso de Privacidad</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

