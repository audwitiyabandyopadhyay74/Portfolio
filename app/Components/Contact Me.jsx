"use client";
import React from "react";
import { gsap } from "gsap";

const ContactMe = () => {
  const [result, setResult] = React.useState(null);
  const [messageShown, setMessageShown] = React.useState(false);
  const checkRef = React.useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "51cdab45-3379-407d-9ee1-b993be51547a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setResult(result.success);
        if (!messageShown) {
          toggleSuccessMessage();
          setMessageShown(true);
        }
        console.log(result);
      } else {
        console.error("Submission failed:", result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const toggleSuccessMessage = () => {
    checkRef.current.classList.remove("invisible");
    checkRef.current.classList.add("visible");
    gsap.fromTo(
      checkRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    setTimeout(() => {
      checkRef.current.classList.remove("visible");
      checkRef.current.classList.add("invisible");
    }, 5000); // Change 5000 to the duration (in milliseconds) you want the success message to be visible
  };

  React.useEffect(() => {
    if (result && !messageShown) {
      gsap.fromTo(
        checkRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, [result, messageShown]);

  return (
    <>
      <div className="w-screen  h-[200vh] lg:h-auto flex flex-col items-center align-middle center justify-center mt-20">
        <span className="contact-title text-4xl md:text-8xl uppercase font-bold mt-16">
          Contact Me
        </span>
        <div className="contact-subtitle text-xl md:text-2xl font-bold">Get In Touch</div>
        <div className="w-full md:w-[80%] h-auto flex items-center justify-center">
          <form
            className="contact-form w-[100%] md:w-auto h-max flex flex-col gap-4 md:gap-8 items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="Name"
              className="border-0 w-[95%] shadow-md lg:w-full md:w-[80vh] h-12 md:h-[6vh] outline-none rounded-md border-black p-4"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              name="Email"
              className="border-0 w-[95%] md:w-[80vh] shadow-md h-12 md:h-[6vh] outline-none rounded-md border-black p-4"
              placeholder="Enter Your Email"
            />
            <textarea
              name="Message"
              className="border-0 w-[95%] shadow-md resize-none border-black lg:w-full md:w-[80vh] h-32 md:h-[185px] outline-none rounded-md bg-[#f8f8f8e1] p-4"
              placeholder="Message Here!"
            ></textarea>
            <button className="w-[40vh] md:w-[40vh] h-12 md:h-[6vh] bg-black text-white rounded-md hover:scale-110">
              Send
            </button>
          </form>
        </div>
      </div>
      <div
        className="success lg:w-screen w-[150%] h-[200vh] lg:h-auto flex flex-col items-center align-middle center justify-center mt-20 invisible"
        ref={checkRef}
      >
        <div className="rounded-full w-[30vh] h-[30vh] bg-green-600 flex flex-col items-center justify-center text-8xl">
          <i className="fa-check fa-solid text-white"></i>
        </div>
        <div className="lg:w-screen w-[95%] h-[10vh] lg:h-auto flex flex-col items-center align-middle center justify-center mt-20">
          <span className="font-semibold text-5xl text-center w-7.2 h-max">
            {result ? "Message Sent Successfully!" : ""}
          </span>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
