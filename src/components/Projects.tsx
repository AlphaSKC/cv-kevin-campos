import { Box, Typography } from "@mui/material";

export default function Projects() {
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
                        gap: '20px',
                    }}>
                        <Typography sx={{
                            fontSize: '30px',
                            fontWeight: 'bold',
                            fontFamily: 'IBM Plex Sans',
                        }}>
                            Proyectos destacados
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}