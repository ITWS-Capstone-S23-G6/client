import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Fade,
  Modal,
  Backdrop,
  Typography
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};


export const ProjectResultModal = ({ resultData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
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