import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Together For Our City",
    description:
      `A Volunteering website for people who are interested in helping their community in different aspects,
      built in React and Nodejs, It supports different types of users like Volunteers with the abillity of
      participating in different kind of activities and giving feedback, Organizations with the abillity of
      adding relevant activities and monitoring their Volunteers, There is also an Admin user to montior everything,
      and an extra visualization part highlighting different kind of dashboards for each user"`,
    getImageSrc: () => require("../images/togetherForOurCity.png"),
    url: "https://nazareth-volunteering.onrender.com/",
  },
  {
    title: "Pacman",
    description:
    `Pacman game implemented in java/javafx, it is the usual pacman gameplay with custom made UI and multiple levels,
    In addition to newly added features like pop up questions if you eat the corresponding icon, different characters,
    new sounds, and a dedicated scoreboard`,
    getImageSrc: () => require("../images/pacman.jpg"),
    url: "https://github.com/Ezz1997/pacmanGame",
  },
  {
    title: "ML Walmart Sales",
    description:
      `Python implementations of different machine learning models and data visualizations for anazlyzing Walmart
       sales data and the possible effects of weather on it`,
    getImageSrc: () => require("../images/ML1.jpg"),
    url: "https://ezz1997.github.io/MachineLearning/ML2/ML2.html",
  },
  {
    title: "ML US Elections",
    description:
    `Python implementations of different machine learning models and data visualizations for anazlyzing US
    elections data`,
    getImageSrc: () => require("../images/ML2.jpg"),
    url: "https://ezz1997.github.io/MachineLearning/ML3/ML3.html",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <br />
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project, index) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
            data-testid={`project-link-${index}`}
          >
          </Card>
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
