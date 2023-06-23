import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <>
      <Grid
        className="animate__animated animate__fadeIn animate__faster"
        container
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ mb: 1 }}
      >
        <Grid item>
          <Typography fontSize={39} fontWeight={"light"}>
            August 28th, 2021
          </Typography>
        </Grid>

        <Grid item>
          <Button color="primary" sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Save
          </Button>
        </Grid>

        <Grid container>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Type title"
            label="Title"
            sx={{ border: "none", mb: 1 }}
          />

          <TextField
            type="text"
            variant="filled"
            multiline
            fullWidth
            placeholder="How is it going today?"
            sx={{ border: "none", mb: 1 }}
            minRows={5}
          />
        </Grid>

        {/* Image Gallery */}
        <ImageGallery/>

      </Grid>
    </>
  );
};
