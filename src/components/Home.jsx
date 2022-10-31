import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Manga from "./Manga";

// require("dotenv").config();

const Home = () => {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    fetch(`https://f1ae-184-148-35-66.ngrok.io/api/getshowcase`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });

    return () => {};
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} alignItems="center" justifyContent="center">
          {data ? <Manga data={data} /> : <p>Loading</p>}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
