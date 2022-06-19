import type { NextPage } from "next";
import { Paper, Box } from "@mui/material";


const Home: NextPage = () => {
  return (
    <div>
      <Box sx={{
        height: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h1>Home Page</h1>
      </Box>
    </div>
  );
};

export default Home;
