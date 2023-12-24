import React from "react";
import { VStack, Box, Heading, Avatar } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import PersonalImage from "../images/personal_image.jpg";
import "../App.css"

const greeting = "Hello, I am Ezz!";
const bio1 = "A Versatile Software Engineer";
const bio2 = "Expertise in React, Full-Stack Development,";
const bio3 = "Machine Learning, and more...";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2a6165"
  >
    <VStack spacing={[2, 4, 8, 16]}>
      <VStack spacing={4} alignItems="center">
        <Avatar
          src={PersonalImage}
          size="2xl"
          name="Ezz"
          className="profile-img"
        />
        <Heading as="h4" fontSize={["null", "null", "md", "lg", "xl"]} noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={3}>
        <Heading as="h1" fontSize={["md", "lg", "xl", "2xl", "4xl"]} noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" fontSize={["md", "lg", "xl", "2xl", "4xl"]}  noOfLines={1}>
          {bio2}
        </Heading>
        <Heading as="h1" fontSize={["md", "lg", "xl", "2xl", "4xl"]}  noOfLines={1}>
          {bio3}
        </Heading>
      </VStack>
    </VStack>

  </FullScreenSection>

);

export default LandingSection;
