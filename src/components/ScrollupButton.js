import { Box, Button } from "@chakra-ui/react"
import { ArrowUpIcon } from '@chakra-ui/icons';

const ScrollupButton = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return(
        <Box
        onClick={scrollToTop}
        position='fixed'
        bottom='20px'
        right={['16px', '84px']}
        zIndex={3}>
        <Button
          size={'sm'}
          rightIcon={<ArrowUpIcon />}
          colorScheme='purple'
          variant='solid'>
          Scroll To Top
        </Button>
      </Box>
    )
};

export default ScrollupButton;