/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects, projectsCategoriesButtons } from "@/data";
import { PinContainer } from "./ui/Pin";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RecentProjects = () => {
  const [selectedProjects, setselectedProjects] = useState([...projects]);

  const filteredHandler = (value: string) => {
    if (value === "all") {
      setselectedProjects([...projects]);
    } else {
      setselectedProjects([
        ...projects.filter((project) => project.category === value),
      ]);
    }
  };

  return (
    <div className="py-10">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      {/* categories here */}
      <div className="flex justify-center mt-12">
        <Select
          onValueChange={(value) => {
            filteredHandler(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {projectsCategoriesButtons.map((category) => {
              return (
                <SelectItem
                  className="z-50"
                  key={category.value}
                  value={category.value}
                >
                  {category.text}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap  items-center justify-center  gap-16 mt-10">
        {selectedProjects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex md:mt-12 items-center justify-center sm:w-96 w-[80vw] z-0"
            key={item.id}
          >
            <a key={item.id} href={item.github} target="_blank">
              <PinContainer title="github link" href={item.github}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 rotate-3 h-64 rounded-md"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-md lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <a href={item.livedemo} target="_blank">
                      <p className="flex lg:text-base md:text-xs text-sm text-purple">
                        Check Live Demo
                      </p>
                    </a>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
