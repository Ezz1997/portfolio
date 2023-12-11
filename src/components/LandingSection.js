import React from "react";
import { VStack, Box, Heading, Avatar } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import PersonalImage from "../images/personal_image.jpg";
import "../App.css"

const greeting = "Hello, I am Ezz!";
const bio1 = "A Frontend Developer";
const bio2 = "Specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2a6165"
  >
    <VStack spacing={16}>
      <VStack spacing={4} alignItems="center">
        <Avatar
          src={PersonalImage}
          size="2xl"
          name="Ezz"
          className="profile-img"
        />
        {/* <img className="profile-img" src={PersonalImage} alt="personal image" /> */}
        <Heading as="h4" size="md" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h1" size="3xl" noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size="3xl" noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>

  </FullScreenSection>

);

export default LandingSection;
