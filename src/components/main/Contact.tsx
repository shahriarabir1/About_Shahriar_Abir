import React from "react";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import ContactCard from "../sub/ContactCard";

const Contact = () => {
  return (
    <div
      className="relative z-[30] flex flex-col items-center justify-center pb-20 pt-40"
      id="contact"
    >
      <h1 className="text-[40px] font-semibold text-white py-20">Contact me</h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 z-[30] justify-center">
        <ContactCard
          title="Shahriar Abir"
          description="You can find me on Facebook Messenger"
          link="https://m.me/shahriar.abir.eng.262000"
          cls="#1877F2"
          con="Chat with"
        >
          <FaFacebookMessenger />
        </ContactCard>
        <ContactCard
          title="+8801581198307"
          description="You can talk with me on Whats app"
          link="https://Wa.me/+8801581198307"
          cls="#25D366"
          con="Send Message"
        >
          <FaWhatsapp />
        </ContactCard>
        <ContactCard
          title="shahriarabirjob@gmail.com"
          description="You can contact through mail"
          link="https://shahriarabirjob@gmail.com"
          cls="#d44638"
          con="Send Mail"
        >
          <GoMail />
        </ContactCard>
      </div>
    </div>
  );
};

export default Contact;
