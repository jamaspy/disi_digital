import React from "react";
import { skills } from "../../content/skills";
import Box from "./Box";
const index = () => {
  return (
    <>
      {skills.map((skill, index) => (
        <Box key={index} title={skill.title} description={skill.description} />
      ))}
    </>
  );
};

export default index;
