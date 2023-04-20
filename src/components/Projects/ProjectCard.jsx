import React, { useContext, useEffect, useState, useCallback } from "react";
import "./Projects.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import { GET_PEOPLE_MATCHING_SCORE } from "../../queries/graphql";
import { useLazyQuery } from "@apollo/client";
import { ProjectDataContext } from "./ProjectDataContext";

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

export function ProjectCard(props) {
  const projectName = props.projectName;
  const skills = props.skills;
  const { resultData, setResultData } = useContext(ProjectDataContext)

  const [handlePeopleMatch, { loading, error, data }] = useLazyQuery(
    GET_PEOPLE_MATCHING_SCORE
  );

  if (loading) {
    console.log(`Loading project match for ${projectName}`);
  }

  if (error) {
    console.log(`Error loading project match for ${projectName}`);
  }

  const handleMatch = async () => {
    await handlePeopleMatch({
      skip: true,
      errorPolicy: "all",
      variables: {
        where: {
          name_CONTAINS: projectName,
        },
      },
    }).then(res => setResultData(res.data.projects[0]))
  };

  useEffect(() => {
    if (!loading && !error && data) {
      setResultData(data.projects[0]);
    }
  }, [loading, error, data, setResultData]);

  return (
    // <div className="DirectoryBox">
    <>
      {projectName && skills ? (
        <ThemeProvider theme={darkTheme}>
          <Card className="DirectoryBox">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {projectName}
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
                Skill Count: {skills.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Skills:
                {skills.map((skill, i) => {
                  if (i === 0) {
                    return `   ${skill.name}`;
                  } else {
                    return `, ${skill.name}`;
                  }
                })}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleMatch}>
                Match Score
              </Button>
            </CardActions>
          </Card>
        </ThemeProvider>
      ) : (
        <div className="col-8">SKILL ERROR</div>
      )}
    </>
  );
}
