import { Box, Divider, Grid, Typography } from "@mui/material";

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
                        gap: '10px',
                    }}>
                        <Typography sx={{
                            fontSize: '30px',
                            fontWeight: 'bold',
                            fontFamily: 'IBM Plex Sans',
                            marginBottom: '20px',
                        }}>
                            Educación y Experiencia
                        </Typography>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={4} lg={4} sx={{
                                backgroundColor: 'red',
                            }}>
                                <Box sx={{
                                    width: '100%',
                                }}>
                                    asdadasd
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} sx={{
                                backgroundColor: 'blue',
                            }}>
                                <Box sx={{
                                    width: '100%',
                                }}>
                                    asdas
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} sx={{
                                backgroundColor: 'green',
                            }}>
                                <Box sx={{
                                    width: '100%',
                                }}>
                                    asdadasd
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Divider sx={{ width: '90%', height: '2px', backgroundColor: '#D8D8D8', }} />
            </Box>
        </>
    )
}