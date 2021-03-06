import { FC } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAt } from '@fortawesome/free-solid-svg-icons';

import classes from '../../styles/UI/Form.module.css';

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
    <form className={classes.container} onSubmit={onSubmit}>
      {/* === Full Name Input === */}
      <div
        className={
          errors.fullName
            ? `${classes['input-container']} ${classes.error}`
            : classes['input-container']
        }
      >
        <input
          className={classes.input}
          {...register('fullName', { required: true })}
        />
        <label className={classes.label}>Full Name</label>
        <div className={classes['icon-container']}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        {errors.fullName && (
          <p className={classes['error-text']}>Please provide a Full Name</p>
        )}
      </div>

      {/* === Email Input === */}
      <div
        className={
          errors.email
            ? `${classes['input-container']} ${classes.error}`
            : classes['input-container']
        }
      >
        <input
          className={classes.input}
          {...register('email', { required: true })}
        />
        <label className={classes.label}>Email</label>
        <div className={classes['icon-container']}>
          <FontAwesomeIcon icon={faAt} />
        </div>
        {errors.email && (
          <p className={classes['error-text']}>Please provide a Email</p>
        )}
      </div>

      {/* === Message Input === */}
      <div
        className={
          errors.message
            ? `${classes['message-container']} ${classes.error}`
            : classes['message-container']
        }
      >
        <textarea
          className={classes.message}
          {...register('message', { required: true })}
        />
        <label className={classes['message-label']}>Message</label>
        {errors.message && (
          <p className={classes['error-text']}>Please provide a Message</p>
        )}
      </div>

      {/* === Send Message === */}
      <div className={classes['btn-container']}>
        <motion.button
          whileTap={{ scale: 0.9 }}
          type="submit"
          className={classes.btn}
        >
          send
        </motion.button>
      </div>
      <Toaster />
    </form>
  );
};

export default Form;
