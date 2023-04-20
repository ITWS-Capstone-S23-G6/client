import React, { useState, useContext } from "react";
import {
  Box,
  IconButton,
  Fade,
  Modal,
  Backdrop,
  Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import { ProjectDataContext } from "../../Projects/ProjectDataContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid",
  borderRadius: "10pt",
  boxShadow: 24,
  p: 4
};


export const ProjectResultModal = () => {
  const { resultData, setResultData, isModalVisible, setIsModalVisible } = useContext(ProjectDataContext)

  const handleClose = () => {
    setIsModalVisible(false);
    setResultData(null);
  }


  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        onClose={handleClose}
        open={isModalVisible}
        closeAfterTransition
      >
        <Fade in={isModalVisible}>
          <Box sx={style}>
            <IconButton aria-label="close" size="small" onClick={handleClose} sx={{position: 'absolute', top:'5%', left: '90%'}}>
              <CloseIcon fontSize="inherit" color="warning"/>
            </IconButton>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {`Project: ${resultData.name}`}
            </Typography>
            {resultData && (
              <>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  {resultData.matchPeople.map((match, i) => {
                    return (
                      <>
                        <Typography id="transition-modal-description" variant="p" sx={{ mt: 2 }}>
                          {match.people.name} <br></br>
                          {match.people.type}
                          {match.coverage_score}
                        </Typography>
                      </>
                    )
                  })}
                </Typography>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
