import { Paper, Box, Typography } from "@mui/material";
import Image from 'next/image';
// import bg from '../../public/background.jpg'
import bg from '/public/background.jpg';

interface IMainPageBannerProps {
  title: string,
  subtitle?: string,
  message: string
}

const MainPageBanner = ({ title, subtitle, message }: IMainPageBannerProps) => {
  return (
      <Box sx={{
        backgroundImage: `url(${bg.src})`,
        backgroundPositionY: '20%',
        backgroundClip: "unset",
        width: '100%',
        height: '15rem'
      }}>
        <Typography variant="h1" fontFamily="sans-serif" >{title}</Typography>
        <Typography variant="subtitle1" fontFamily="sans-serif" >{subtitle}</Typography>
        <Typography variant="body1" fontFamily="sans-serif" >{message}</Typography>
      </Box>
  )
}

export default MainPageBanner;