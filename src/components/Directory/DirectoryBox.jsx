import React from "react";
import "./Directory.css";
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
          borderRadius: "30px",
          backgroundColor: "rgba(166, 162, 162, 0.3);",
          fontFamily: "Quicksand",
        },
      },
    },
  },
});

export function DirectoryBox(props) {

  const name = props.name
  const skills = props.skills
  const type = props.type

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
                <Typography gutterBottom variant="h7" component="div">
                  {type}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                  Skill Count: {skills.length}
                </Typography>
                <Typography variant="body3" color="text.primary">
                  Top Skills:
                  {skills.slice(0, 5).map((skill, i) => { 
                    if (i === 0) {
                      return `   ${skill.name}`
                    } else {
                      return `, ${skill.name}`
                    }
                    
                    })}
                </Typography>
              </CardContent>
            </Card>
          </ThemeProvider>
        ) : 
        (
          <div className="col-8">SKILL ERROR</div>
        )}
    </>
  );
}
