// https://www.emailjs.com
// https://www.youtube.com/watch?v=NgWGllOjkbs


// import { useState } from 'react';
import emailjs from 'emailjs-com';
import { isProduction, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from 'const';
import { useBoolean } from 'hooks/useBoolean';

const useMail = (): any => {
  const [isSent, setIsSent] = useBoolean(false);
  const [isLoading, setIsLoading] = useBoolean(false);

  const sendMail = (params) => {
    setIsLoading.setTrue();  

    if(!isProduction) {
      // When working locally, do not send the mail.
      setTimeout(() => {
        // Mock server delay
        setIsSent.setTrue();
        setIsLoading.setFalse();
      }, 2000);
    } else {
      emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        params,
        EMAILJS_USER_ID
      )
        .then((result) => {
          setIsSent.setTrue();
          setIsLoading.setFalse();
        }, (error) => {
          setIsLoading.setFalse();
        });
    }
  }

  return {
    isSent,
    isLoading,
    actions: {
      send: sendMail,
    }
  }
}

export { useMail };
