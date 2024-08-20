import { Box, Divider, Typography } from "@mui/material";
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

export default function Technologies() {
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
                            Tecnologías
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '20px',
                        }}>
                            <HTML />
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
                            <GitHub />
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{ width: '90%', height: '2px', backgroundColor: '#D8D8D8', }} />
            </Box>
        </>
    )
}