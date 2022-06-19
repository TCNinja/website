import type { NextPage } from "next";
import { Paper } from "@mui/material";


const Home: NextPage = () => {
  return (
    <div>
      <Paper sx={{
        height: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h1>Home Page</h1>
      </Paper>
    </div>
  );
};

export default Home;
