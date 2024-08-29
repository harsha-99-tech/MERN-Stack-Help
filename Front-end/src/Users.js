import React, { useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import UsersTable from "./components/UsersTable/UsersTable";
import { Box } from "@mui/material";
import Axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    Axios.get("http://localhost:3001/api/users").then();
  };

  return (
    <Box
      sx={{
        width: " calc(100% - 100px)",
        margin: "auto",
        marginTop: "25px",
      }}
    >
      <UserForm />
      <UsersTable rows={users} />
    </Box>
  );
};

export default Users;
