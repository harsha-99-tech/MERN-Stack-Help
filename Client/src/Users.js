import React, { useEffect, useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import UsersTable from "./components/UsersTable/UsersTable";
import { Box } from "@mui/material";
import Axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get("http://localhost:3001/api/users")
      .then((response) => {
        setUsers(response?.data?.response || []);
      })
      .catch((error) => {
        console.error("Axios Error :", error);
      });
  };

  const addUser = (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post("http://localhost:3001/api/createuser", payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
      })
      .catch((error) => {
        console.error("Axios Error :", error);
      });
  };

  return (
    <Box
      sx={{
        width: " calc(100% - 100px)",
        margin: "auto",
        marginTop: "25px",
      }}
    >
      <UserForm addUser={addUser} submitted={submitted} />
      <UsersTable rows={users} />
    </Box>
  );
};

export default Users;
