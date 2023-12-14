import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      type: 'jobOffer',
      comment: ''
    },
    onSubmit: async (values) => {
      try {
        await submit(values);
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(100, "Reached maximum character limit")
        .required("required"),
      email: Yup.string()
        .email("Invalid email address")
        .max(100, "Reached maximum character limit")
        .required("required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .max(2000, "Reached maximum character limit")
        .required("Required"),
    }),
  });

  useEffect(() => {
    if (response) {
      if (response.type === 'success') {
        onOpen(response.type, `Thanks for your submission ${formik.values.name}, we will get back to you shortly!`);
        formik.resetForm();
      } else if (response.type === 'error') {
        onOpen(response.type, 'Something went wrong, please try again later!');
      }
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#2f2a65"
      py={16}
      spacing={8}
    >
      <VStack w={['100%', '100%', 800, 1024]} p={[8, 16, 32]} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.name && formik.touched.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input {...formik.getFieldProps('name')} id="name" />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input {...formik.getFieldProps('email')} type="email" id="email" />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select {...formik.getFieldProps('type')} id="type" name="type" >
                  <option value="jobOffer" style={{ background: '#2f2a65' }}>
                    Job Offer
                  </option>
                  <option value="hireMe" style={{ background: '#2f2a65' }}>Freelance project proposal</option>
                  <option value="chess" style={{ background: '#2f2a65' }}>Chess</option>
                  <option value="other" style={{ background: '#2f2a65' }}>Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea {...formik.getFieldProps('comment')} id="comment" height={250} />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
