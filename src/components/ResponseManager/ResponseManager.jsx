import React from "react";
import ResponseBuilder from "../ResponseBuilder/ResponseBuilder";
import ResponseButton from "../ResponseButton";

const ResponseManager = () => {
  return (
    <div>
      <ResponseBuilder />
      <ResponseBuilder />
      <ResponseBuilder />
      <ResponseButton />
    </div>
  );
};

export default ResponseManager;
