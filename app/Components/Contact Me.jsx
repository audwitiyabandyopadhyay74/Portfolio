"use client";
import React from "react";
import { gsap } from "gsap";

const ContactMe = () => {
  const [result, setResult] = React.useState(null);
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
        toggleSuccessMessage();
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
  };

  React.useEffect(() => {
    if (result) {
      gsap.fromTo(
        checkRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, [result]);

  return (
    <>
      <div className="w-screen h-auto flex flex-col items-center justify-between gap-10 p-4 lg:mt-[20vh] mt-[50vh] ">
        <span className="contact-title text-4xl md:text-8xl uppercase font-bold mt-16">
          Contact Me
        </span>
        <div className="contact-subtitle text-xl md:text-2xl font-bold">Get In Touch</div>
        <div className="w-full md:w-[80%] h-auto flex items-center justify-center">
          <form
            className="contact-form w-full md:w-auto h-max flex flex-col gap-4 md:gap-8 items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="Name"
              className="border-0 shadow-md w-full md:w-[80vh] h-12 md:h-[6vh] outline-none rounded-md border-black p-4"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              name="Email"
              className="border-0 w-full md:w-[80vh] shadow-md h-12 md:h-[6vh] outline-none rounded-md border-black p-4"
              placeholder="Enter Your Email"
            />
            <textarea
              name="Message"
              className="border-0 shadow-md resize-none border-black w-full md:w-[80vh] h-32 md:h-[185px] outline-none rounded-md bg-[#f8f8f8e1] p-4"
              placeholder="Message Here!"
            ></textarea>
            <button className="w-full md:w-[40vh] h-12 md:h-[6vh] bg-black text-white rounded-md hover:scale-110">
              Send
            </button>
          </form>
        </div>
      </div>
      <div
        className="success w-screen h-[90vh] flex flex-col items-center justify-center invisible absolute"
        ref={checkRef}
      >
        <div className="rounded-full w-[30vh] h-[30vh] bg-green-600 flex flex-col items-center justify-center text-8xl ">
          <i className="fa-check fa-solid text-white"></i>
        </div>
        <div className="text">
          <span className="font-semibold text-5xl">
            {result ? "Message sent successfully!" : ""}
          </span>
        </div>
      </div>
    </>
  );
};

export default ContactMe;