import React from "react";

export default function Footer() {
  return (
    <div className=" bav bg-cover bg-no-repeat h-full py-[100px] text-center relative ">
      <div className="bg-[#00000099] absolute start-0 end-0 top-0 bottom-0"></div>
      <div className="container relative z-50 ">
        <img
          src={require("../image/logo.png")}
          alt=""
          className="my-5 mx-auto"
          srcset=""
        />
        <p className="p-5 my-5 mx-auto w-fit border-b  text-white border-b-white text-[22px] uppercase">
          We Are Social
        </p>
        <div className="social-icons text-white">
          <i className="fab fa-facebook-f me-5"></i>
          <i className="fab fa-twitter me-5"></i>
          <i className="fas fa-home me-5"></i>
          <i className="fab fa-linkedin me-5"></i>
        </div>
        <p class="copyright mt-[60px] text-white">
          © 2021 <span className=" font-bold text-[#19c8fa]">Kasper</span> All
          Right Reserved
        </p>
      </div>
    </div>
  );
}
