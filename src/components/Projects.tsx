import { Box, Button, Grid, Modal, Typography, useMediaQuery } from "@mui/material";
import Fondo from '../assets/svg/Bg3.svg';
import Fondo2 from '../assets/svg/Bg4.svg';
import Urbanix from '../assets/img/Urbanix.png';
import Zonas from '../assets/img/Zonas.png';
import Chronos from '../assets/img/Chronos.png';
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageGallery from "react-image-gallery";
import { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Urbanix1 from '../assets/img/Urbanix/1.png';
import Urbanix2 from '../assets/img/Urbanix/2.png';
import Urbanix3 from '../assets/img/Urbanix/3.png';
import Urbanix4 from '../assets/img/Urbanix/4.png';
import Urbanix5 from '../assets/img/Urbanix/5.png';
import Urbanix6 from '../assets/img/Urbanix/6.png';
import Urbanix7 from '../assets/img/Urbanix/7.png';
import Urbanix8 from '../assets/img/Urbanix/8.png';
import Chronos1 from '../assets/img/Chronos/1.jpg';
import Chronos2 from '../assets/img/Chronos/2.jpg';
import Chronos3 from '../assets/img/Chronos/3.jpg';
import Chronos4 from '../assets/img/Chronos/4.jpg';
import Chronos5 from '../assets/img/Chronos/5.jpg';
import Chronos6 from '../assets/img/Chronos/6.jpg';
import Chronos7 from '../assets/img/Chronos/7.jpg';
import Chronos8 from '../assets/img/Chronos/8.jpg';
import Zonas1 from '../assets/img/Zonas/1.jpg';
import Zonas2 from '../assets/img/Zonas/2.jpg';
import Zonas3 from '../assets/img/Zonas/3.jpg';
import Zonas4 from '../assets/img/Zonas/4.jpg';
import Zonas5 from '../assets/img/Zonas/5.jpg';

interface Project {
    id: number;
    name: string;
    description: string;
    logo: string;
    width: string;
    images: Array<{ original: string, thumbnail: string }>;
}

const projects = [
    {
        id: 1,
        name: 'Chronos',
        description: 'Chronos es una aplicación móvil que permite llevar un registro preciso y automatizado de la entrada y salida de los empleados de una empresa, utilizando tecnología de geolocalización, con el propósito de mejorar la gestión del tiempo laboral de cada empleado.',
        logo: Chronos,
        width: '200px',
        images: [
            {
                original: Chronos1,
                thumbnail: Chronos1,
            },
            {
                original: Chronos2,
                thumbnail: Chronos2,
            },
            {
                original: Chronos3,
                thumbnail: Chronos3,
            },
            {
                original: Chronos4,
                thumbnail: Chronos4,
            },
            {
                original: Chronos5,
                thumbnail: Chronos5,
            },
            {
                original: Chronos6,
                thumbnail: Chronos6,
            },
            {
                original: Chronos7,
                thumbnail: Chronos7,
            },
            {
                original: Chronos8,
                thumbnail: Chronos8,
            }
        ]
    },
    {
        id: 2,
        name: 'Urbanix',
        description: 'Urbanix es un e-commerce de sneakers que ofrece una amplia variedad de marcas y modelos, con el propósito de satisfacer las necesidades de los amantes de los sneakers, integrando las vistas para la venta como para la administración del mismo.',
        logo: Urbanix,
        width: '70%',
        images: [
            {
                original: Urbanix1,
                thumbnail: Urbanix1,
            },
            {
                original: Urbanix2,
                thumbnail: Urbanix2,
            },
            {
                original: Urbanix3,
                thumbnail: Urbanix3,
            },
            {
                original: Urbanix4,
                thumbnail: Urbanix4,
            },
            {
                original: Urbanix5,
                thumbnail: Urbanix5,
            },
            {
                original: Urbanix6,
                thumbnail: Urbanix6,
            },
            {
                original: Urbanix7,
                thumbnail: Urbanix7,
            },
            {
                original: Urbanix8,
                thumbnail: Urbanix8,
            }
        ]
    },
    {
        id: 3,
        name: 'Zonas Arqueológicas',
        description: 'Zonas Arqueológicas es una aplicación móvil que permite visualizar información e imágenes sobre las zonas arqueológicas de México, con el propósito de fomentar el turismo y la cultura.',
        logo: Zonas,
        width: '200px',
        images: [
            {
                original: Zonas1,
                thumbnail: Zonas1,
            },
            {
                original: Zonas2,
                thumbnail: Zonas2,
            },
            {
                original: Zonas3,
                thumbnail: Zonas3,
            },
            {
                original: Zonas4,
                thumbnail: Zonas4,
            },
            {
                original: Zonas5,
                thumbnail: Zonas5,
            }
        ]
    }
]

const defaultProject = {
    id: 0,
    name: '',
    description: '',
    logo: '',
    width: '',
    images: [

    ]
}

export default function Projects() {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project>(defaultProject);
    const isMedium = useMediaQuery('(min-width:800px)');

    const handleOpen = (id: number) => {
        const project = projects.find(project => project.id === id);
        setSelectedProject(project!);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: { xs: `url(${Fondo2})`, md: `url(${Fondo})` },
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
                        <Grid container spacing={5}>
                            {projects.map((project) => (
                                <Grid item xs={12} sm={6} md={4} lg={4} key={project.id} sx={{
                                    padding: '0 20px',
                                }}>
                                    <Box className="flip-card">
                                        <Box className="flip-card-inner">
                                            <Box className="flip-card-front">
                                                <LazyLoadImage
                                                    alt={project.name}
                                                    src={project.logo}
                                                    width={project.width}
                                                    height="200px"
                                                />
                                                <Typography sx={{
                                                    marginTop: '20px',
                                                    fontSize: '25px',
                                                    fontWeight: 'bold',
                                                    fontFamily: 'IBM Plex Sans',
                                                }}>
                                                    {project.name}
                                                </Typography>
                                            </Box>
                                            <Box className="flip-card-back">
                                                <Box sx={{
                                                    padding: '0 20px',
                                                }}>
                                                    <Typography sx={{
                                                        fontFamily: 'IBM Plex Sans',
                                                        maxHeight: '200px',
                                                        overflow: 'auto',
                                                    }}>
                                                        {project.description}
                                                    </Typography>
                                                    <Button variant="contained" sx={{
                                                        backgroundColor: '#9d00ff',
                                                        color: '#FFF',
                                                        fontFamily: 'IBM Plex Sans',
                                                        padding: '10px',
                                                        marginTop: '20px',
                                                        '&:hover': {
                                                            backgroundColor: '#FFF',
                                                            color: '#9d00ff',
                                                        }
                                                    }}
                                                        onClick={() => handleOpen(project.id)}
                                                    >
                                                        Ver fotos
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        height: '80%',
                        background: 'transparent',
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                        width: '100%',
                    }}>
                        <Button onClick={handleClose} sx={{
                            color: 'black',
                            fontFamily: 'IBM Plex Sans',
                            fontSize: '20px',
                            padding: '10px',
                            fontWeight: 'bold',
                            backgroundColor: 'white',
                            '&:hover': {
                                color: 'white',
                                backgroundColor: 'red',
                            }
                        }}>
                            x
                        </Button>
                    </Box>
                    <Box sx={{
                        width: {
                            xs: selectedProject.name === 'Urbanix' ? '100%' : '90%',
                            sm: selectedProject.name === 'Urbanix' ? '90%' : '70%',
                            md: selectedProject.name === 'Urbanix' ? '80%' : '45%',
                            lg: selectedProject.name === 'Urbanix' ? '70%' : '30%',
                        }
                    }}>
                        <ImageGallery
                            items={selectedProject.images}
                            thumbnailPosition={selectedProject.name === 'Urbanix' ? 'bottom' : 'left'}
                            lazyLoad={true}
                            showBullets={true}
                            showThumbnails={isMedium}
                        />
                    </Box>
                </Box>
            </Modal>
        </>
    )
}