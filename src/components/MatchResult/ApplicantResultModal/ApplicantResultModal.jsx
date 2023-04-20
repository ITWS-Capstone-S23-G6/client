import React, { useContext } from "react";
import {
  Box,
  IconButton,
  Fade,
  Modal,
  Backdrop,
  Typography
} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';

import { ApplicantDataContext } from "../../Applicants/ApplicantDataContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid",
  borderRadius: "10pt",
  boxShadow: 24,
  p: 4
};


export const ApplicantResultModal = () => {
  const { resultData, setResultData, isModalVisible, setIsModalVisible } = useContext(ApplicantDataContext)

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
              {`Person: ${resultData.name}`}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Project</TableCell>
                      <TableCell align="left">Coverage Score</TableCell>
                      <TableCell align="left">Missed Skills</TableCell>
                      <TableCell align="left">Similar Missed Skills</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {resultData && (
                    <>
                      {resultData.matchProjects.map((match, i) => {
                        return (
                          <>
                          <TableRow
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {match.project.name}
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {match.coverage_score}
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {match.missed_skills.toString()}
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {match.similar_missed_skills.toString()}
                            </TableCell>
                          </TableRow>
                          </>
                        )
                      })}
                    </>
                  )}
                  </TableBody>
                </Table>
              </TableContainer>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
