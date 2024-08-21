import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import CBTIS from '../assets/img/CBTIS.jpg'
import UT from '../assets/img/UT Cancun.jpeg'
import Ozelot from '../assets/img/Ozelot.png'
import BgCard from '../assets/svg/Card3.svg'

export default function EducationExperience() {
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
                    flexDirection: 'column',
                    width: '90%',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '20px',
                        gap:'20px'
                    }}>
                        <Typography sx={{
                            fontSize: '30px',
                            fontWeight: 'bold',
                            fontFamily: 'IBM Plex Sans',
                        }}>
                            Educación y Experiencia
                        </Typography>
                        <Grid container>
                            <Grid item xs={12} sm={6} md={3} lg={3} sx={{ padding: '0 20px' }}>
                                <Card sx={{ maxWidth: 345, minHeight: 385, backgroundImage: `url(${BgCard})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={CBTIS}
                                            alt="CBTIS 111"
                                        />
                                    </CardActionArea>
                                    <CardContent>
                                        <Typography sx={{
                                            fontSize: '25px',
                                            fontWeight: 'bold',
                                            fontFamily: 'IBM Plex Sans',
                                            color:'white'
                                        }}>
                                            CBTIS 111 "Leona Vicario"
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '15px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'italic',
                                            textAlign: 'justify',
                                            color:'whitesmoke'
                                        }}>
                                            2018-2021
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '15px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'italic',
                                            textAlign: 'justify',
                                            color:'whitesmoke'
                                        }}>
                                            Programación
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3} sx={{ padding: '0 20px' }}>
                                <Card sx={{ maxWidth: 345, minHeight: 385, backgroundImage: `url(${BgCard})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={UT}
                                            alt="green iguana"
                                        />
                                    </CardActionArea>
                                    <CardContent>
                                        <Typography sx={{
                                            fontSize: '25px',
                                            fontWeight: 'bold',
                                            fontFamily: 'IBM Plex Sans',
                                            color:'white'
                                        }}>
                                            Universidad Tecnológica de Cancún
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '15px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'italic',
                                            textAlign: 'justify',
                                            color:'whitesmoke'
                                        }}>
                                            2021-2023
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '15px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'italic',
                                            color:'whitesmoke'
                                        }}>
                                            T.S.U. en Tecnologías de la Información área Desarrollo de Software Multiplataforma
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3} sx={{ padding: '0 20px' }}>
                                <Card sx={{ maxWidth: 345, minHeight: 385, backgroundImage: `url(${BgCard})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={Ozelot}
                                            alt="Ozelot Technologies"
                                        />
                                    </CardActionArea>
                                    <CardContent sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}>
                                        <Typography sx={{
                                            fontSize: '25px',
                                            fontWeight: 'bold',
                                            fontFamily: 'IBM Plex Sans',
                                            color:'white'
                                        }}>
                                            Ozelot Technologies
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '15px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'italic',
                                            textAlign: 'justify',
                                            color:'whitesmoke'
                                        }}>
                                            Mayo-Agosto 2023
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '15px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'italic',
                                            color:'whitesmoke'
                                        }}>
                                            Practicante en desarrollador de software
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3} sx={{ padding: '0 20px' }}>
                                <Card sx={{ maxWidth: 345, minHeight: 385, backgroundImage: `url(${BgCard})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={UT}
                                            alt="UT Cancún"
                                        />
                                    </CardActionArea>
                                    <CardContent sx={{
                                        alignContent: 'center'
                                    }}>
                                        <Typography sx={{
                                            fontSize: '25px',
                                            fontWeight: 'bold',
                                            fontFamily: 'IBM Plex Sans',
                                            color:'white'
                                        }}>
                                            Universidad Tecnológica de Cancún
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '15px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'italic',
                                            textAlign: 'justify',
                                            color:'whitesmoke'
                                        }}>
                                            2023-Actualidad
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '15px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'italic',
                                            textAlign: 'justify',
                                            color:'whitesmoke'
                                        }}>
                                            Ingeniería en Desarrollo y Gestión de Software
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Divider sx={{ width: '90%', height: '1px', backgroundColor: '#05000c', }} />
            </Box>
        </>
    )
}