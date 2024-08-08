import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className=" mt-10">
      <h1 className=" text-white">Learn MERN Stack from Beginning.</h1>
      <Button
        onClick={() => navigate("/users")}
        sx={{
          margin: "auto",
          marginBottom: "20px",
          backgroundColor: "white",
          color: "#000000",
          marginLeft: "20px",
          marginTop: "20px",
          "&:hover": {
            opacity: "0.7",
            backgroundColor: "#00c6c6",
          },
        }}
      >
        Users
      </Button>
    </div>
  );
}

export default Hero;
