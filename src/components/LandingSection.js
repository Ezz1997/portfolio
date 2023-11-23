import React from "react";
import { Avatar, Heading, VStack, Box} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import "../App.css"

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <img className="profile-img" src="https://i.pravatar.cc/150?img=7" alt="personal image" />
      <Box textAlign="center" className="greeting">
        <p>{greeting}</p>
      </Box>
      <Box className="bio" textAlign="center">
        <p>{bio1}</p>
        <p>{bio2}</p>
      </Box>
    </VStack>

  </FullScreenSection>

);

export default LandingSection;
