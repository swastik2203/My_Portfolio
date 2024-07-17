import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import cpp from "../assets/cpp.png";
import exp from "../assets/exp.png";
import heroku from "../assets/heroku.png";
import mongo from "../assets/mongo.jpeg";
import netlify from "../assets/netlify.png";
import node from "../assets/node.png";
import postman from "../assets/postman.png";
import sql from "../assets/sql.png";


const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JS",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "Node Js",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: exp,
      title: "Express Js",
      style: "shadow-gray-400",
    },
    {
        id: 7,
        src: mongo,
        title: "Mongo DB",
        style: "shadow-blue-400",
      },
      {
        id: 9,
        src: sql,
        title: "MySQL",
        style: "shadow-gray-400",
      },
      {
        id: 9,
        src: tailwind,
        title: "Tailwind",
        style: "shadow-yellow-400",
      },
      {
        id: 10,
        src: cpp,
        title: "C++",
        style: "shadow-orange-400",
      },
      {
        id: 11,
        src: heroku,
        title: "Heroku",
        style: "shadow-blue-400",
      },
      {
        id: 12,
        src: netlify,
        title: "Netlify",
        style: "shadow-gray-400",
      },
      {
        id: 13,
        src: postman,
        title: "Postman",
        style: "shadow-purple-400",
      },
      {
        id: 14,
        src: github,
        title: "GitHub",
        style: "shadow-pink-400",
      },

  ];

  return (
    <div
      name="Skills"
      className="bg-gradient-to-r from-black via-gray-900 to-black w-full h-screen my-11"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-white p-2 inline">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 px-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills