import React from "react";
import "./ApplicantBox.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

// style overrides
const darkTheme = createTheme({
  palette: { mode: "dark" },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          backgroundColor: "rgba(166, 162, 162, 0.3);",
        },
      },
    },
  },
});

export function ApplicantBox(props) {
  const name = props.name;
  const skills = props.skills;
  const type = props.type;

  return (
    // <div className="DirectoryBox">
    <>
      {name && skills ? 
        (
          <ThemeProvider theme={darkTheme}>
            <Card className="DirectoryBox">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {type}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Skill Count: {skills.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Skills:
                  {skills.slice(0, 10).map((skill) => ` ${skill.name}`)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Match Score</Button>
              </CardActions>
            </Card>
          </ThemeProvider>
        ) : 
        (
          <div className="col-8">SKILL ERROR</div>
        )}
    </>
  );
}
