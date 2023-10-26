import React from "react";

export default function Contact() {
  return (
    <div class="py-[100px]">
      <div class="container m-auto">
        <div className="text-center ">
          <h2 className="text-[32px] mb-[50px] relative sec2 ">CONTACT US</h2>
          <p className="text-[#777] w-1/2  mb-[100px] mx-auto ">
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
        </div>
        <div className="content flex md:justify-between flex-col-reverse   md:flex-row">
          <form action="" className="md:ms-10 ms-0">
            <input
              className="w-full p-[20px] border-2 border-solid border-[#ccc] mb-7 "
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              className="w-full p-[20px] border-2 border-solid border-[#ccc] mb-7"
              type="email"
              name="mail"
              placeholder="Your Email"
            />
            <textarea
              className="w-full p-[20px] border-2 border-solid border-[#ccc] mb-7 h-[200px]"
              name="message"
              placeholder="Your Message"
            ></textarea>
            <input className=" text-white bg-[#19c8fa] p-[20px] uppercase md:ms-auto md:me-0   m-auto flex " type="submit" value="Send Message" />
          </form>
          <div className="text-center md:text-left md:me-10 me-0">
            <h4 className="uppercase text-[18px] font-[500] mb-7">Get In Touch</h4> 
            <p className="mb-[10px] text-[#ccc]">+00 123.456.789</p>
            <p className="mb-[10px] text-[#ccc]">+00 123.456.789</p>
            <h4 className="uppercase text-[18px] font-[500] mb-7 mt-7">Where We Are</h4>
            <address className="mb-[40px] leading-7 text-[#ccc]">
              Awesome Address 17
              <br />
              New York, NYC
              <br />
              123-4567-890
              <br />
              USA
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
