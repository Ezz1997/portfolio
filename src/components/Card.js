import { HStack, Image, Text, VStack, Stack, Divider } from "@chakra-ui/react";
import { Card as ChakraCard, CardBody, Heading, CardFooter } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <ChakraCard maxW='md'>
      <CardBody>
        <Image
          src={imageSrc}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text>
            {description}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant='ghost' colorScheme='black'>
          See more
          <FontAwesomeIcon icon={faArrowRight} size="1x" style={{paddingLeft: "4px"}}/>
        </Button>
      </CardFooter>
    </ChakraCard>
  );
};

export default Card;
