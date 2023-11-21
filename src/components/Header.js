import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import "../App.css";

const socials = [
  {
    id: 0,
    icon: faEnvelope,
    url: "mailto:ezmarie97@gmail.com",
  },
  {
    id: 1,
    icon: faGithub,
    url: "https://github.com/Ezz1997",
  },
  {
    id: 2,
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ezz-maree-9177b926b/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((item, index) => {
              const {id, icon, url} = item;
              return(
                <a href={url} key={id} data-testid={`social-link-${index}`}>
                  <FontAwesomeIcon icon={icon} size="2x" className="social-icon"/>
                </a>
              );
            })}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects" onClick={handleClick('projects')} data-testid="projects-section">Projects</a>
              <a href="/#contact-me" onClick={handleClick('contact-me')}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
