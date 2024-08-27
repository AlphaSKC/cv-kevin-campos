import { Box, Grid, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';

export default function Profile() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Box sx={{
                    display: 'flex',
                    width: '90%',
                }}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={7} lg={7}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '20px',
                                gap: '10px',
                            }}>
                                <Typography sx={{
                                    fontSize: '30px',
                                    fontWeight: 'bold',
                                    fontFamily: 'IBM Plex Sans',
                                }}>
                                    Perfil
                                </Typography>
                                <Typography sx={{
                                    fontSize: '20px',
                                    fontWeight: 'light',
                                    fontFamily: 'Roboto',
                                    fontStyle: 'italic',
                                    textAlign: 'justify',
                                }}>
                                    Soy un estudiante de desarrollo de software con conocimientos integrales en el desarrollo y diseño de software, enfocado mayormente en la parte de backend. Actualmente estoy cursando la carrera de Desarrollo y Gestión de Software, en la UT Cancún. Durante mis estadías profesionales en Ozelot Technologies, desarrollé un software que permite la gestión de entradas y salidas de empleados, además de participar en diversas actividades de desarrollo y soporte técnico.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} lg={5}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '20px',
                                gap: '10px',
                            }}>
                                <Typography sx={{
                                    fontSize: '30px',
                                    fontWeight: 'bold',
                                    fontFamily: 'IBM Plex Sans',
                                }}>
                                    Contactos
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'start',
                                    gap: '20px',
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: '20px',
                                    }}>
                                        <PhoneIcon sx={{
                                            fontSize: '30px',
                                            color: '#9d00ff',
                                        }} />
                                        <Typography sx={{
                                            fontSize: '20px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            textAlign: 'justify',
                                        }}>
                                            +52 998 844 7669
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: '20px',
                                    }}>
                                        <RoomIcon sx={{
                                            fontSize: '30px',
                                            color: '#9d00ff',
                                        }} />
                                        <Typography sx={{
                                            fontSize: '20px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            textAlign: 'justify',
                                        }}>
                                            Cancún, Quintana Roo
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: '20px',
                                    }}>
                                        <EmailIcon sx={{
                                            fontSize: '30px',
                                            color: '#9d00ff',
                                        }} />
                                        <Typography sx={{
                                            fontSize: '20px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            textAlign: 'justify',
                                        }}>
                                            kevcb2003@gmail.com
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                {/* <Divider sx={{ width: '90%', height: '1px', backgroundColor: '#05000c', }} /> */}
            </Box>



        </>
    )
}