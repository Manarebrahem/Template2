import React from "react";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";

export default function Portfolio() {
  return (
    <div className="py-[100px]">
      <div className="container m-auto">
        <div className="text-center ">
          <h2 className="text-[32px] mb-[50px] relative sec2 ">PORTFOLIO</h2>
          <p className="text-[#777] w-1/2 m-auto mb-[100px] ">
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
        </div>
        {/* <ul class="flex justify-center items-center">
          <li className="p-[10px] bg-[#19c8fa] text-white active">All</li>
          <li className="p-[10px] ">App</li>
          <li className="p-[10px] ">Photo</li>
          <li className="p-[10px] ">Web</li>
          <li className="p-[10px] ">Print</li>
        </ul> */}
        <Tab.Group>
          <Tab.List className="flex justify-center items-center">
            <Tab as={Fragment} className="p-[10px]">
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "bg-[#19c8fa] p-4 text-white "
                      : "bg-white text-black "
                  }
                >
                  All
                </button>
              )}
            </Tab>
            <Tab as={Fragment} className="p-[10px]">
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "bg-[#19c8fa] p-4 text-white "
                      : "bg-white text-black "
                  }
                >
                  App
                </button>
              )}
            </Tab>
            <Tab as={Fragment} className="p-[10px]">
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "bg-[#19c8fa] p-4 text-white "
                      : "bg-white text-black "
                  }
                >
                  Photo
                </button>
              )}
            </Tab>
            <Tab as={Fragment} className="p-[10px]">
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "bg-[#19c8fa] p-4 text-white "
                      : "bg-white text-black "
                  }
                >
                  Web
                </button>
              )}
            </Tab>

            <Tab as={Fragment} className="p-[10px]">
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "bg-[#19c8fa] p-4 text-white "
                      : "bg-white text-black "
                  }
                >
                  Print
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-2 mt-10">
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-01.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-02.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-03.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-04.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-05.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-06.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-07.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-08.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-2 mt-10">
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-01.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-02.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-03.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-04.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-05.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-06.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-2 mt-10">
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-03.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-04.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-05.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-06.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-07.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-08.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-2 mt-10">
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-01.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-02.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-03.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-04.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>

                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-07.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-08.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-2 mt-10">
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-01.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-02.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-03.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>

                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-06.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-07.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
                <div class="box relative overflow-hidden">
                  <img
                    className="w-[100%]  duration-300 "
                    src={require("../image/shuffle-08.jpg")}
                    alt=""
                  />
                  <div class="caption absolute w-full bottom-[-100%] duration-300 start-0 p-[20px] bg-white">
                    <h4>Awesome Image</h4>
                    <p className="text-[#19c8fa]">Photography</p>
                  </div>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
