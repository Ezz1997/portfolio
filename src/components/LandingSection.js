import React from "react";
import { VStack, Box} from "@chakra-ui/react";
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
    <VStack spacing={4}>
      <img className="profile-img" src={PersonalImage} alt="personal image" />
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
