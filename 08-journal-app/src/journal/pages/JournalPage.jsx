import React from "react";
import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        {/* <Typography>Tempor fugiat eiusmod occaecat mollit et ad nulla do id sit ullamco non.</Typography> */}

        {/* Notes view */}
        <NoteView/>
        
        {/* Nothing selected */}
        {/* <NothingSelectedView/> */}
        

      </JournalLayout>
    </>
  );
};
