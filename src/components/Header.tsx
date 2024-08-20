import { Box } from '@mui/material';
import Bg from '../assets/svg/Bg.svg';

export default function Header() {
  return (
    <>
        <Box sx={{
            display: 'flex',
            backgroundImage: `url(${Bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '300px',
            width: '100%',
        }}/>
    </>
  );
}