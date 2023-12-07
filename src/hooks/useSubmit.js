import {useState} from "react";
import emailjs from '@emailjs/browser';

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);
    try {
      console.log("The data: " + JSON.stringify(data));

      await emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, {
        name: data.name,
        email: data.email,
        comment: data.comment,
        type: data.type
       }, process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
      
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.name}, we will get back to you shortly!`,
      });

    } catch (error) {
      console.log(error);
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
