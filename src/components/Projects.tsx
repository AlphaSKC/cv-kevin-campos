import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import Fondo from '../assets/svg/Bg3.svg';
import Fondo2 from '../assets/svg/Bg4.svg';
import Urbanix from '../assets/img/Urbanix.png';
import Zonas from '../assets/img/Zonas.png';
import Chronos from '../assets/img/Chronos.png';
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageGallery from "react-image-gallery";
import { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
// import "~react-image-gallery/styles/css/image-gallery.css";

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
        description: 'Chronos es un proyecto de una aplicación móvil que permite llevar un registro preciso y automatizado de la entrada y salida de los empleados de una empresa, utilizando tecnología de geolocalización, con el propósito de mejorar la gestión del tiempo laboral de cada empleado.',
        logo: Chronos,
        width: '200px',
        images: [
            {
                original: 'https://picsum.photos/id/1018/1000/600/',
                thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            }
        ]
    },
    {
        id: 2,
        name: 'Urbanix',
        description: 'Urbanix es un proyecto de una aplicación web que permite a los usuarios llevar un control de sus actividades diarias y de su tiempo.',
        logo: Urbanix,
        width: '70%',
        images: [
            {
                original: 'https://picsum.photos/id/1018/1000/600/',
                thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            }
        ]
    },
    {
        id: 3,
        name: 'Zonas Arqueológicas',
        description: 'Zonas Arqueológicas es una aplicación móvil que permite visualizar información sobre las zonas arqueológicas de México, con el propósito de fomentar el turismo y la cultura.',
        logo: Zonas,
        width: '200px',
        images: [
            {
                original: 'https://picsum.photos/id/1018/1000/600/',
                thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
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
                        <Grid container>
                            {projects.map((project) => (
                                <Grid item xs={12} sm={12} md={4} lg={4} key={project.id} sx={{
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
                                                    <Typography className="title">
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
                        gap: '20px',
                    }}
                >
                    <Button onClick={handleClose} variant="contained" color="error">
                        x
                    </Button>
                    <Box sx={{
                        width: '70%',
                    }}>
                        <ImageGallery items={selectedProject.images} />
                    </Box>
                </Box>
            </Modal>
        </>
    )
}