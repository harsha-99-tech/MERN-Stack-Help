import React from "react";
import UserForm from "./components/UserForm/UserForm";
import UsersTable from "./components/UsersTable/UsersTable";
import { Box } from "@mui/material";

const users = [
  {
    id: 1,
    name: "Harsha",
  },
  {
    id: 2,
    name: "Kasuni",
  },
];

const Users = () => {
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
