import { Box, Grid, Typography } from "@mui/material";
import Fondo from '../assets/svg/Bg3.svg';
import Fondo2 from '../assets/svg/Bg4.svg';

interface ProjectProps {
    text: string;
    rotation: number;
    children: React.ReactNode;
}

const Project = ({ text, rotation, children }: ProjectProps) => {
    return (
        <Box data-text={text} style={{ '--r': rotation } as React.CSSProperties} className="project">
            {children}
        </Box>
    );
}

export default function Projects() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: {xs: `url(${Fondo2})`, md: `url(${Fondo})`},
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
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
                        gap: '20px',
                    }}>
                        <Typography sx={{
                            fontSize: '30px',
                            fontWeight: 'bold',
                            fontFamily: 'IBM Plex Sans',
                        }}>
                            Proyectos destacados
                        </Typography>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={4} lg={4} sx={{
                                padding: '20px',
                            }}>
                                <Box className="flip-card">
                                    <Box className="flip-card-inner">
                                        <Box className="flip-card-front">
                                            <Typography>
                                                Flip Card
                                            </Typography>
                                            <Typography>
                                                Hover Me
                                            </Typography>
                                        </Box>
                                        <Box className="flip-card-back">
                                            <Typography className="title">
                                                Back
                                            </Typography>
                                            <Typography>
                                                Leave Me
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} sx={{
                                padding: '20px',
                            }}>
                                <Box className="flip-card">
                                    <Box className="flip-card-inner">
                                        <Box className="flip-card-front">
                                            <Typography className="title">
                                                Flip Card
                                            </Typography>
                                            <Typography>
                                                Hover Me
                                            </Typography>
                                        </Box>
                                        <Box className="flip-card-back">
                                            <Typography className="title">
                                                Back
                                            </Typography>
                                            <Typography>
                                                Leave Me
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} sx={{
                                padding: '20px',
                            }}>
                                <Box className="flip-card">
                                    <Box className="flip-card-inner">
                                        <Box className="flip-card-front">
                                            <Typography>
                                                Flip Card
                                            </Typography>
                                            <Typography>
                                                Hover Me
                                            </Typography>
                                        </Box>
                                        <Box className="flip-card-back">
                                            <Typography>
                                                Back
                                            </Typography>
                                            <Typography>
                                                Leave Me
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>


                        {/* <Box className="container">
                            <Project text="Chronos" rotation={-15}>
                                <Typography>
                                    Github
                                </Typography>
                            </Project>
                            <Project text="Urbanix" rotation={25}>
                                <Typography>
                                    Earn
                                </Typography>
                            </Project>
                            <Project text="Zonas Arqueológicas" rotation={5}>
                                <Typography>
                                    Zonas A
                                </Typography>
                            </Project>
                        </Box> */}
                    </Box>
                </Box>
            </Box>
        </>
    )
}