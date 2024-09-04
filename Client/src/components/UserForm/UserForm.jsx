import { Button, Grid, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const UserForm = ({ addUser, submitted }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!submitted) {
      setId(0);
      setName("");
    }
  }, [submitted]);

  return (
    <Grid container spacing={2} className="mb-8 block">
      <Grid item xs={12}>
        <Typography component={"h1"} className=" text-white">
          User Form
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} className=" flex">
        <Typography
          component={"label"}
          htmlFor="id"
          className=" mr-5 w-24 block text-white"
        >
          ID
        </Typography>
        <Input
          type="number"
          id="id"
          name="id"
          className=" w-96 bg-white"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} sm={6} className=" flex">
        <Typography
          component={"label"}
          htmlFor="id"
          className=" mr-5 w-24 block text-white"
        >
          Name
        </Typography>
        <Input
          type="text"
          id="name"
          name="name"
          className=" w-96 bg-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Button
        sx={{
          margin: "auto",
          marginBottom: "20px",
          backgroundColor: "#00c6c6",
          color: "#000000",
          marginLeft: "15px",
          marginTop: "20px",
          "&:hover": {
            opacity: "0.7",
            backgroundColor: "#00c6c6",
          },
        }}
        onClick={() => {
          addUser({ id, name });
        }}
      >
        Submit
      </Button>
    </Grid>
  );
};

export default UserForm;
