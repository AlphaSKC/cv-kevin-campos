import { Box, Typography } from "@mui/material";

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

                        <Box className="container">
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
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}