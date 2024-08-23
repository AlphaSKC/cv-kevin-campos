import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import CBTIS from '../assets/img/CBTIS Logo.png'
import UT from '../assets/img/UT Logo.jpeg'
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
                        gap: '20px'
                    }}>
                        <Typography sx={{
                            fontSize: '30px',
                            fontWeight: 'bold',
                            fontFamily: 'IBM Plex Sans',
                        }}>
                            Educación y Experiencia
                        </Typography>
                        <Grid container sx={{
                            marginTop: '70px',
                        }}>
                            <Grid item xs={12} sm={6} md={3} lg={3} sx={{ padding: { xs: '20px 20px', md: '0 20px' } }}>
                                <Card sx={{
                                    maxWidth: 345,
                                    minHeight: 245,
                                    backgroundImage: `url(${BgCard})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    overflow: 'visible',
                                    position: 'relative',
                                    paddingTop: '75px'
                                }}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={CBTIS}
                                        sx={{
                                            width: 150,
                                            height: 150,
                                            position: 'absolute',
                                            top: -75,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            border: '4px solid white',
                                        }}
                                    />
                                    <CardContent>
                                        <Typography sx={{
                                            fontSize: '25px',
                                            fontWeight: 'bold',
                                            fontFamily: 'IBM Plex Sans',
                                            color: 'white',
                                            textAlign: 'center'
                                        }}>
                                            CBTIS 111 "Leona Vicario"
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '15px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'italic',
                                            textAlign: 'center',
                                            color: 'whitesmoke'
                                        }}>
                                            2018-2021
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '15px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'italic',
                                            textAlign: 'center',
                                            color: 'whitesmoke'
                                        }}>
                                            Programación
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3} sx={{ padding: { xs: '60px 20px', md: '0 20px' } }}>
                                <Card sx={{
                                    maxWidth: 345,
                                    minHeight: 245,
                                    backgroundImage: `url(${BgCard})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    overflow: 'visible',
                                    position: 'relative',
                                    paddingTop: '75px'
                                }}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={UT}
                                        sx={{
                                            width: 150,
                                            height: 150,
                                            position: 'absolute',
                                            top: -75,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            border: '4px solid white',
                                        }}
                                    />
                                    <CardContent>
                                        <Typography sx={{
                                            fontSize: '25px',
                                            fontWeight: 'bold',
                                            fontFamily: 'IBM Plex Sans',
                                            color: 'white',
                                            textAlign: 'center'
                                        }}>
                                            Universidad Tecnológica de Cancún
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '15px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'italic',
                                            textAlign: 'center',
                                            color: 'whitesmoke'
                                        }}>
                                            2021-2023
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '15px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'italic',
                                            textAlign: 'center',
                                            color: 'whitesmoke'
                                        }}>
                                            T.S.U. en Tecnologías de la Información y Comunicación Área Desarrollo de Software
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3} sx={{ padding: { xs: '20px 20px', md: '0 20px' } }}>
                                <Card sx={{
                                    maxWidth: 345,
                                    minHeight: 245,
                                    backgroundImage: `url(${BgCard})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    overflow: 'visible',
                                    position: 'relative',
                                    paddingTop: '75px'
                                }}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={Ozelot}
                                        sx={{
                                            width: 150,
                                            height: 150,
                                            position: 'absolute',
                                            top: -75,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            border: '4px solid white',
                                        }}
                                    />
                                    <CardContent sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}>
                                        <Typography sx={{
                                            fontSize: '25px',
                                            fontWeight: 'bold',
                                            fontFamily: 'IBM Plex Sans',
                                            color: 'white'
                                        }}>
                                            Ozelot Technologies
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '15px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'italic',
                                            textAlign: 'center',
                                            color: 'whitesmoke'
                                        }}>
                                            Mayo-Agosto 2023
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '15px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'italic',
                                            textAlign: 'center',
                                            color: 'whitesmoke'
                                        }}>
                                            Practicante en desarrollador de software
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3} sx={{ padding: { xs: '60px 20px 20px 20px', md: '0 20px' } }}>
                                <Card sx={{
                                    maxWidth: 345,
                                    minHeight: 245,
                                    backgroundImage: `url(${BgCard})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    overflow: 'visible',
                                    position: 'relative',
                                    paddingTop: '75px'
                                }}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={UT}
                                        sx={{
                                            width: 150,
                                            height: 150,
                                            position: 'absolute',
                                            top: -75,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            border: '4px solid white',
                                        }}
                                    />
                                    <CardContent sx={{
                                        alignContent: 'center'
                                    }}>
                                        <Typography sx={{
                                            fontSize: '25px',
                                            fontWeight: 'bold',
                                            fontFamily: 'IBM Plex Sans',
                                            textAlign: 'center',
                                            color: 'white'
                                        }}>
                                            Universidad Tecnológica de Cancún
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '15px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'italic',
                                            textAlign: 'center',
                                            color: 'whitesmoke'
                                        }}>
                                            2023-Actualidad
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '15px',
                                            fontWeight: 'light',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'italic',
                                            textAlign: 'center',
                                            color: 'whitesmoke'
                                        }}>
                                            Ingeniería en Desarrollo y Gestión de Software
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/* <Divider sx={{ width: '90%', height: '1px', backgroundColor: '#05000c', }} /> */}
            </Box>
        </>
    )
}