import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1> Une question ? Une discussion ? Un café ? </h1>
      <div className="contact__social">
        <h2> Retrouvez-moi sur </h2>
        <div className="contact__social__images">
          <img
            src="/assets/images/linkedin.svg"
            alt="Linkedin Antso"
            width="24px"
            className="verticalbar__logos__link"
          />
          <img
            src="/assets/images/insta.svg"
            alt="Instagram Antso"
            width="24px"
            className="verticalbar__logos__link"
          />
        </div>
      </div>
      <p> ou contactez-moi via ce formulaire </p>
      <form
        action="https://getform.io/f/557b605b-2ae8-448a-9c16-5658bc53bf4a"
        className="contact__form"
        method="POST"
      >
        <input
          type="text"
          placeholder="Votre nom"
          required
          className="contact__form__name"
          name="nom"
        />
        <input type="email" placeholder="Votre email" required />
        <input
          type="tel"
          placeholder="Votre numéro"
          required
          minLength="6"
          maxLength="12"
          name="email"
        />
        <textarea
          required
          className="contact__form__textarea"
          placeholder="Votre message"
          name="message"
        />

        <button type="submit" className="contact__form__submit">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
