import { FC } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAt } from '@fortawesome/free-solid-svg-icons';

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((formData) => {
    const serviceID = 'service_943q0d8';
    const templateID = 'template_6wx981b';
    const userID = 'user_MEmrRGWq8H1SbJpDPyCST';
    sendMessage(
      serviceID,
      templateID,
      {
        from_name: formData.fullName,
        from_email: formData.email,
        from_message: formData.message,
      },
      userID
    );
    reset();
  });

  const sendMessage = (
    serviceID: string,
    templateID: string,
    variables: {},
    userID: string
  ) => {
    emailjs.send(serviceID, templateID, variables, userID).then(
      (result) => {
        console.log(result.text);
        toast.success('Message Sent!');
      },
      (error) => {
        console.log(error.text);
        toast.error('Message Failed!');
      }
    );
  };

  return (
    <form
      className="w-3/4 max-w-[400px] flex flex-col lg:mt-20"
      onSubmit={onSubmit}
    >
      {/* === Full Name Input === */}
      <div
        className={`relative flex flex-col w-full mb-3 rounded-sm ${
          errors.fullName
            ? 'text-error dark:text-error-dark'
            : 'text-dark-blue dark:text-light-grey '
        } bg-white dark:bg-[hsl(209, 18%, 12%)] bg-opacity-20 dark:bg-opacity-50 backdrop-blur-sm`}
      >
        <input
          className={`w-full px-2 py-5 text-sm bg-transparent border-none outline-none opacity-75 font-Roboto ${
            errors.fullName ? 'caret-accent' : 'caret-error'
          }`}
          {...register('fullName', { required: true })}
        />
        <label className="absolute pl-2 text-xs font-semibold tracking-wide transition-all duration-150 ease-in-out top-1 font-Roboto">
          Full Name
        </label>
        <div className="absolute w-[10%] top-4 right-0 pr-2">
          <FontAwesomeIcon
            className={`${errors.fullName ? 'animate-pulse' : ''}`}
            icon={faUser}
          />
        </div>
        {errors.fullName && (
          <p className="absolute bottom-0 pl-2 m-0 text-xs font-semibold transition-all duration-150 ease-in-out font-Roboto text-error">
            Please provide your Full Name
          </p>
        )}
      </div>

      {/* === Email Input === */}
      <div
        className={`relative flex flex-col w-full mb-3  rounded-sm ${
          errors.email
            ? 'text-error dark:text-error-dark'
            : 'text-dark-blue dark:text-light-grey '
        } bg-white dark:bg-[hsl(209, 18%, 12%)] bg-opacity-20 dark:bg-opacity-50 backdrop-blur-sm`}
      >
        <input
          className={`w-full px-2 py-5 text-sm bg-transparent border-none outline-none opacity-75 font-Roboto ${
            errors.email ? 'caret-accent' : 'caret-error'
          }`}
          {...register('email', { required: true })}
        />
        <label className="absolute pl-2 text-xs font-semibold tracking-wide transition-all duration-150 ease-in-out top-1 font-Roboto">
          Email
        </label>
        <div className="absolute w-[10%] top-4 right-0 pr-2">
          <FontAwesomeIcon
            className={`${errors.email ? 'animate-pulse' : ''}`}
            icon={faAt}
          />
        </div>
        {errors.email && (
          <p className="absolute bottom-0 pl-2 m-0 text-xs font-semibold transition-all duration-150 ease-in-out font-Roboto text-error">
            Please provide your Email
          </p>
        )}
      </div>

      {/* === Message Input === */}
      <div
        className={`relative flex flex-col w-full mb-3  rounded-sm ${
          errors.email
            ? 'text-error dark:text-error-dark'
            : 'text-dark-blue dark:text-light-grey '
        } bg-white dark:bg-[hsl(209, 18%, 12%)] bg-opacity-20 dark:bg-opacity-50 backdrop-blur-sm`}
      >
        <textarea
          className={`w-full px-2 py-6 min-h-[100px] lg:min-h-[200px] resize-none text-sm bg-transparent border-none outline-none opacity-75 font-Roboto ${
            errors.email ? 'caret-accent' : 'caret-error'
          }`}
          {...register('message', { required: true })}
        />
        <label className="absolute pl-2 text-xs font-semibold tracking-wide transition-all duration-150 ease-in-out top-1 font-Roboto">
          Message
        </label>
        {errors.message && (
          <p className="absolute bottom-0 pl-2 m-0 text-xs font-semibold transition-all duration-150 ease-in-out font-Roboto text-error">
            Please provide a Message
          </p>
        )}
      </div>

      {/* === Send Message === */}
      <div className="w-full pt-3 border-t border-solid border-dark-blue">
        <motion.button
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="w-full py-3 text-sm font-normal tracking-wide text-white uppercase transition-all duration-150 ease-in-out border-none cursor-pointer bg-dark-blue font-Roboto hover:bg-gradient-to-r hover:from-accent hover:to-accent-alt"
        >
          send
        </motion.button>
      </div>
      <Toaster />
    </form>
  );
};

export default Form;
