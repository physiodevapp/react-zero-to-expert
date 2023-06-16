import React from "react";
import { Grid, Typography } from "@mui/material";
import { StarOutlined } from "@mui/icons-material";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "calc(100vh - 110px)", backgroundColor: "primary.main"}}
    >

      <Grid item xs={12}>
        <StarOutlined sx={{fontSize: 100, color: 'white'}}/>
      </Grid>

      <Grid item xs={12}>
        <Typography color={'white'} variant="h5">Select or add new entry</Typography>
      </Grid>

    </Grid>
  );
};
