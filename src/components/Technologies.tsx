import { Box, Typography } from "@mui/material";
import Fondo from '../assets/svg/Prueba.svg';
import Fondo2 from '../assets/svg/Prueba2.svg';
import C from "../utils/C";
import CPlus2 from "../utils/CPlus2";
import ReactSVG from "../utils/React";
import Flutter from "../utils/Flutter";
import Laravel from "../utils/Laravel";
import CSS from "../utils/CSS";
import PHP from "../utils/PHP";
import HTML from "../utils/HTML";
import JS from "../utils/JS";
import Dart from "../utils/Dart";
import Java from "../utils/Java";
import TS from "../utils/TS";
import Vue from "../utils/Vue";
import SQLServer from "../utils/SQL-Server";
import Mongo from "../utils/Mongo";
import SQL from "../utils/SQL";
import Firebase from "../utils/Firebase";
import GitHub from "../utils/GitHub";

const Tecnologías = [
    {
        id: 1,
        name: 'HTML',
        link: 'https://es.wikipedia.org/wiki/HTML',
    },
    {
        id: 2,
        name: 'CSS',
        link: 'https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada',
    },
    {
        id: 3,
        name: 'JavaScript',
        link: 'https://es.wikipedia.org/wiki/JavaScript',
    },
    {
        id: 4,
        name: 'TypeScript',
        link: 'https://es.wikipedia.org/wiki/TypeScript',
    },
    {
        id: 5,
        name: 'C',
        link: 'https://es.wikipedia.org/wiki/C_(lenguaje_de_programaci%C3%B3n)',
    },
    {
        id: 6,
        name: 'C++',
        link: 'https://es.wikipedia.org/wiki/C%2B%2B',
    },
    {
        id: 7,
        name: 'PHP',
        link: 'https://es.wikipedia.org/wiki/PHP',
    },
    {
        id: 8,
        name: 'Java',
        link: 'https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)',
    },
    {
        id: 9,
        name: 'Dart',
        link: 'https://es.wikipedia.org/wiki/Dart_(lenguaje_de_programaci%C3%B3n)',
    },
    {
        id: 10,
        name: 'React',
        link: 'https://es.wikipedia.org/wiki/React',
    },
    {
        id: 11,
        name: 'Vue',
        link: 'https://es.wikipedia.org/wiki/Vue.js',
    },
    {
        id: 12,
        name: 'Flutter',
        link: 'https://es.wikipedia.org/wiki/Flutter_(software)',
    },
    {
        id: 13,
        name: 'Laravel',
        link: 'https://es.wikipedia.org/wiki/Laravel',
    },
    {
        id: 14,
        name: 'SQL Server',
        link: 'https://es.wikipedia.org/wiki/Microsoft_SQL_Server',
    },
    {
        id: 15,
        name: 'SQL',
        link: 'https://es.wikipedia.org/wiki/SQL',
    },
    {
        id: 16,
        name: 'MongoDB',
        link: 'https://es.wikipedia.org/wiki/MongoDB',
    },
    {
        id: 17,
        name: 'Firebase',
        link: 'https://es.wikipedia.org/wiki/Firebase',
    },
    {
        id: 18,
        name: 'GitHub',
        link: 'https://es.wikipedia.org/wiki/GitHub',
    }
]

const ComponentMap: Record<string, React.ComponentType> = {
    'HTML': HTML,
    'CSS': CSS,
    'JavaScript': JS,
    'TypeScript': TS,
    'C': C,
    'C++': CPlus2,
    'PHP': PHP,
    'Java': Java,
    'Dart': Dart,
    'React': ReactSVG,
    'Vue': Vue,
    'Flutter': Flutter,
    'Laravel': Laravel,
    'SQL Server': SQLServer,
    'SQL': SQL,
    'MongoDB': Mongo,
    'Firebase': Firebase,
    'GitHub': GitHub,
};

export default function Technologies() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: {xs: `url(${Fondo2})`, sm: `url(${Fondo})`},
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
                        gap: '10px',
                    }}>
                        <Typography sx={{
                            fontSize: '30px',
                            fontWeight: 'bold',
                            fontFamily: 'IBM Plex Sans',
                            marginBottom: '20px',
                        }}>
                            Tecnologías
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '20px',
                        }}>
                            {Tecnologías.map((tecnologia) => {
                                const Component = ComponentMap[tecnologia.name];
                                return (
                                    <Box key={tecnologia.id} sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '20px',
                                        backgroundColor: 'whitesmoke',
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                        ":hover": {
                                            backgroundColor: 'lightgray',
                                        }
                                    }}
                                        onClick={() => window.open(tecnologia.link, '_blank')}
                                    >
                                        <Component />

                                    </Box>
                                );
                            })}
                            {/* <HTML />
                            <CSS />
                            <JS />
                            <TS />
                            <C />
                            <CPlus2 />
                            <PHP />
                            <Java />
                            <Dart />
                            <ReactSVG />
                            <Vue />
                            <Flutter />
                            <Laravel />
                            <SQLServer />
                            <SQL />
                            <Mongo />
                            <Firebase />
                            <GitHub /> */}
                        </Box>
                    </Box>
                </Box>
                {/* <Divider sx={{ width: '90%', height: '1px', backgroundColor: '#05000c', }} /> */}
            </Box>
        </>
    )
}