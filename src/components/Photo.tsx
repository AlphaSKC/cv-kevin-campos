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
                }} />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingX: '20px',
                    marginBottom: '20px',
                }}>
                    <Typography sx={{
                        fontSize: '35px',
                        fontWeight: 'bold',
                        fontFamily: 'IBM Plex Sans',
                        textAlign: 'center',
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
                </Box>
                <Divider sx={{ width: '90%', height: '1px', backgroundColor: '#05000c'}} />
            </Box>
        </>
    );
}