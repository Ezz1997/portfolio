import { Image, Text, Stack, Divider, Button } from "@chakra-ui/react";
import { Card as ChakraCard, CardBody, Heading, CardFooter } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from '@chakra-ui/react'
import React from "react";

const Card = ({ title, description, imageSrc, url}) => {
  return (
    <ChakraCard maxW='prose'>
      <Image
        objectFit='cover'
        src={imageSrc}
        borderRadius='lg'
      />
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text>
            {description}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link href={url} isExternal>
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" style={{ paddingLeft: "4px" }} />
        </Link>
      </CardFooter>
    </ChakraCard>
  );
};

export default Card;
