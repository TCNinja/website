import type { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import MainPageBanner from '../components/banner/MainPageBanner';
import MouseOverPopover from "../components/card/testPopover";
import CardDisplay from "../components/card/cardDisplay";


const Home: NextPage = () => {
  return (
    <div>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Head>  
          <title>TCNinja: A card trading platform</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <MainPageBanner title="Welcome To TCNinja" subtitle='Trading Card Ninja' message= "Good Thursday" />
        <CardDisplay imageUri="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=262926&type=card" name="Card" details={{}} />
        <MouseOverPopover />
      </Box>
    </div>
  );
};

export default Home;
