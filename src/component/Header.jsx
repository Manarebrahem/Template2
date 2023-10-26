import React from "react";
import logo from "../image/logo.png";
import { Menu } from "@headlessui/react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [t, i18n] = useTranslation();

  return (
    <header className="h-screen relative">
      <div className="bg-[#00000099] absolute start-0 end-0 top-0 bottom-0"></div>
      <div className="container relative m-auto py-8 px-12 flex flex-row justify-between items-center">
        <img src={logo} alt="" srcset="" />

        <nav className=" flex flex-row justify-end items-center  ">
          <Menu>
            <div className="flex flex-col relative md:hidden ">
              <Menu.Button className="relative z-50 ">
                <div className="md:hidden tog">
                  <i className="fa-solid fa-bars text-[#ffffff] pe-3 "></i>
                </div>
              </Menu.Button>
              <Menu.Items className="flex flex-col absolute top-10 z-50 end-[100%] rounded-sm bg-[#dddddd8c] p-2">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? " text-[#19c8fa]" : " text-white"
                      }`}
                      href="/"
                    >
                      Services
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? " text-[#19c8fa]" : " text-white"
                      }`}
                      href="/"
                    >
                      Video
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? " text-[#19c8fa]" : " text-white"
                      }`}
                      href="/"
                    >
                      Portfolio
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? " text-[#19c8fa]" : " text-white"
                      }`}
                      href="/"
                    >
                      Contact
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? " text-[#19c8fa]" : " text-white"
                      }`}
                      href="/"
                    >
                      Footer
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? " text-[#19c8fa]" : " text-white"
                      }`}
                      href="/"
                    >
                      Home
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </div>
          </Menu>

          <ul className=" md:flex md:flex-row  text-white hidden">
            <li>
              <a
                className="me-5 text-[#19c8fa] hover:border-b-[1px] hover:border-[#19c8fa] py-[40px]"
                href="/"
              >
                {t("greeting")}
              </a>
            </li>
            <li>
              <a
                className="me-5 hover:text-[#19c8fa] hover:border-b-[1px] hover:border-[#19c8fa] py-[40px]"
                href="#"
              >
                {t("Text")}
              </a>
            </li>
            <li>
              <a
                className="me-5 hover:text-[#19c8fa] hover:border-b-[1px] hover:border-[#19c8fa] py-[40px]"
                href="#"
              >
                {t('Text1')}
              </a>
            </li>
            <li>
              <a
                className="me-5 hover:text-[#19c8fa] hover:border-b-[1px] hover:border-[#19c8fa] py-[40px]"
                href="#"
              >
                {t('text2')}
              </a>
            </li>
            <li>
              <a
                className="me-5 hover:text-[#19c8fa] hover:border-b-[1px] hover:border-[#19c8fa] py-[40px]"
                href="#"
              >
              {t('text3')}
              </a>
            </li>
            <li>
              <a
                className="me-5 hover:text-[#19c8fa] hover:border-b-[1px] hover:border-[#19c8fa] py-[40px]"
                href="#"
              >
                {t('text4')}
              </a>
            </li>
          </ul>

          <div className=" border-solid  border-s-[1px] p-2 border-[#fff] text-center m-auto ">
            <i className="fas fa-search text-white  text-xl"></i>
          </div>
          {/* <div>
            <button
              className="me-2 text-white "
              onClick={() => {
                i18n.changeLanguage("ar");
              }}
            >
              ar
            </button>
            <button className="text-white"
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              en
            </button>
          </div> */}
          {/* <div>
      <FontAwesomeIcon
        icon={faLanguage}
        onClick={() => changeLanguage('ar')}
        style={{ cursor: 'pointer', marginRight: '10px' }}
      />
      <FontAwesomeIcon
        icon={faLanguage}
        onClick={() => changeLanguage('en')}
        style={{ cursor: 'pointer' }}
      />
    </div> */}
          <div>
            <Menu>
              <div className="flex flex-col relative  ">
                <Menu.Button className="relative z-50 text-white ">
                  Language
                </Menu.Button>
                <Menu.Items className="flex flex-col absolute top-10 z-50 end-[30%] rounded-sm bg-[#dddddd8c] p-3">
                  <Menu.Item>
                    {({ active }) => (
                      <a onClick={()=>{
                        i18n.changeLanguage('en')
                      }}
                        className={`${
                          active
                            ? " text-[#19c8fa] cursor-pointer"
                            : " text-white "
                        }`}
                       
                      >
                        En
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a onClick={()=>{
                        i18n.changeLanguage('ar')
                      }}
                        className={`${
                          active
                            ? " text-[#19c8fa] cursor-pointer"
                            : " text-white"
                        }`}
                      
                      >
                        Ar
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </div>
            </Menu>
          </div>
    
        </nav>
      </div>
      <div className=" bg-[#0f748fb3] w-full md:w-1/2 text-white px-[50px] py-[25px] absolute start-0 top-1/2 translate-y-[-50%]">
        <div className="content">
          <h2 className="mb-[20px] text-[32px]">
            Hello World!
            <p> We Are Kasper We Make Art.</p>
          </h2>
          <p className="text-[14px]">
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
        </div>
      </div>

      <ul className="flex flex-row absolute start-1/2 top-[95%] translate-x-[-50%]">
        <li className="w-[20px] h-[20px] rounded-[50%] border-solid border-white border-[1px] me-[10px]"></li>
        <li className="w-[20px] h-[20px] rounded-[50%] border-solid bg-[#19c8fa] border-[1px] me-[10px]"></li>
        <li className="w-[20px] h-[20px] rounded-[50%] border-solid border-white border-[1px] me-[10px]"></li>
      </ul>
    </header>
  );
}
