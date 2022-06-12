import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="contact">
      <h1> Une question ? Une discussion ? Un café ? </h1>
      <div className="contact__social">
        <h2> Retrouvez-moi sur </h2>
        <div className="contact__social__images">
          <img
            src="./public/assets/images/linkedin.svg"
            alt="Linkedin Antso"
            width="24px"
            className="verticalbar__logos__link"
          />
          <img
            src="./public/assets/images/insta.svg"
            alt="Instagram Antso"
            width="24px"
            className="verticalbar__logos__link"
          />
        </div>
      </div>
      <p> ou contactez-moi via ce petit formulaire </p>
      <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
        <input
          type="text"
          placeholder="Votre nom"
          {...register("Votre nom", { required: true, min: 2 })}
          className="contact__form__name"
        />
        <input
          type="text"
          placeholder="Votre email"
          {...register("Votre emailEmail", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        <input
          type="tel"
          placeholder="Votre numéro"
          {...register("Votre numéro", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <textarea
          {...register("Votre message", { required: true, min: 8 })}
          className="contact__form__textarea"
          placeholder="Votre message"
        />

        <button type="submit" className="contact__form__submit">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
