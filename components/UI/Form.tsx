import { FC } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { TextInput, Tooltip, Center, Text } from '@mantine/core';
import { motion } from 'framer-motion';

import emailjs from '@emailjs/browser';

import { BiUser } from 'react-icons/bi';
import { HiOutlineAtSymbol } from 'react-icons/hi';

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
      <div className="flex flex-col w-full mb-3 ">
        <div className="flex justify-between w-full">
          <label
            className={`text-xs mb-1 font-medium tracking-wide transition-all duration-150 ease-in-out font-Roboto ${
              errors.fullName
                ? 'text-error/75 dark:text-error-dark/80'
                : 'text-black/75 dark:text-light-grey/60'
            }`}
          >
            Full Name
          </label>
          {errors.fullName && (
            <p className="text-xs font-semibold transition-all duration-150 ease-in-out font-Roboto text-error dark:text-error-dark">
              Please provide your Full Name
            </p>
          )}
        </div>
        <div
          className={`relative flex items-center p-2 border rounded bg-white/75 dark:bg-dark-grey/80 ${
            errors.fullName
              ? 'border-error/80'
              : 'border-black/30 dark:border-light-grey/30'
          } backdrop-blur-sm`}
        >
          <input
            className="w-full text-sm bg-transparent border-none outline-none opacity-75 text-dark-blue dark:text-light-grey font-Roboto caret-accent"
            {...register('fullName', { required: true })}
          />

          <div className="w-[10%] px-2 text-base">
            <BiUser
              className={`${
                errors.fullName
                  ? 'animate-pulse text-error'
                  : 'text-black/50 dark:text-light-grey/50'
              }`}
            />
          </div>
        </div>
      </div>

      {/* === Email Input === */}
      <div className="flex flex-col w-full mb-3 ">
        <div className="flex justify-between w-full">
          <label
            className={`text-xs mb-1 font-medium tracking-wide transition-all duration-150 ease-in-out font-Roboto ${
              errors.email
                ? 'text-error/75 dark:text-error-dark/80'
                : 'text-black/75 dark:text-light-grey/60'
            }`}
          >
            Email
          </label>
          {errors.email && (
            <p className="text-xs font-semibold transition-all duration-150 ease-in-out font-Roboto text-error dark:text-error-dark">
              Please provide your Email
            </p>
          )}
        </div>
        <div
          className={`relative flex items-center p-2 border rounded bg-white/75 dark:bg-dark-grey/80 ${
            errors.email
              ? 'border-error/80'
              : 'border-black/30 dark:border-light-grey/30'
          } backdrop-blur-sm`}
        >
          <input
            className="w-full text-sm bg-transparent border-none outline-none opacity-75 text-dark-blue dark:text-light-grey font-Roboto caret-accent"
            {...register('email', { required: true })}
          />

          <div className="w-[10%] px-2 text-base">
            <HiOutlineAtSymbol
              className={`${
                errors.email
                  ? 'animate-pulse text-error'
                  : 'text-black/50 dark:text-light-grey/50'
              }`}
            />
          </div>
        </div>
      </div>

      {/* === Message Input === */}
      <div className="flex flex-col w-full mb-4 ">
        <div className="flex justify-between w-full">
          <label
            className={`text-xs mb-1 font-medium tracking-wide transition-all duration-150 ease-in-out font-Roboto ${
              errors.message
                ? 'text-error/75 dark:text-error-dark/80'
                : 'text-black/75 dark:text-light-grey/60'
            }`}
          >
            Message
          </label>
          {errors.message && (
            <p className="text-xs font-semibold transition-all duration-150 ease-in-out font-Roboto text-error dark:text-error-dark">
              Please provide a Message
            </p>
          )}
        </div>
        <div
          className={`relative flex items-center p-2 border rounded bg-white/75 dark:bg-dark-grey/80 ${
            errors.message
              ? 'border-error/80'
              : 'border-black/30 dark:border-light-grey/30'
          } backdrop-blur-sm`}
        >
          <textarea
            className="w-full min-h-[100px] lg:min-h-[200px] resize-none text-sm bg-transparent border-none outline-none opacity-75 text-dark-blue dark:text-light-grey font-Roboto caret-accent"
            {...register('message', { required: true })}
          />
        </div>
      </div>

      {/* === Send Message === */}
      <div className="w-full pt-4 border-t border-solid border-dark-blue dark:border-light-grey/75">
        <motion.button
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="w-full py-3 text-sm font-normal tracking-wide text-white uppercase transition-all duration-150 ease-in-out border-none cursor-pointer bg-dark-blue dark:bg-light-blue-alt font-Roboto hover:bg-gradient-to-r hover:from-accent hover:to-accent-alt"
        >
          send
        </motion.button>
      </div>
      <Toaster />
    </form>
  );
};

export default Form;
