import Me from '../assets/img/Me.jpg';
import { Box, Divider, Typography } from "@mui/material";

export default function Photo() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '-150px',
            }}>
                <Box sx={{
                    display: 'flex',
                    backgroundColor: 'black',
                    backgroundImage: `url(${Me})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '250px',
                    width: '250px',
                    borderRadius: '100%',
                    border: '10px solid white',
                }}/>
                <Typography sx={{
                    fontSize: '35px',
                    fontWeight: 'bold',
                    fontFamily: 'IBM Plex Sans',
                }}>
                    Kevin Campos Buendia
                </Typography>
                <Typography sx={{
                    fontSize: '20px',
                    fontWeight: 'light',
                    fontFamily: 'Roboto',
                }}>
                    Software Developer
                </Typography>
                <Divider sx={{ width: '90%', height: '2px', backgroundColor: '#D8D8D8', marginTop: '20px'}} />
            </Box>
        </>
    );
}