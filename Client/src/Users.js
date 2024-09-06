import React, { useEffect, useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import UsersTable from "./components/UsersTable/UsersTable";
import { Box } from "@mui/material";
import Axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

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

  const updateUser = (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.put("http://localhost:3001/api/updateuser", payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error("Axios Error :", error);
      });
  };

  const deleteUser = (data) => {
    Axios.delete("http://localhost:3001/api/deleteuser", data)
      .then((response) => {
        getUsers();
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
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        submitted={submitted}
        data={selectedUser}
        isEdit={isEdit}
      />
      <UsersTable
        rows={users}
        selectedUser={(data) => {
          setSelectedUser(data);
          setIsEdit(true);
        }}
        deleteUser={(data) =>
          window.confirm("Are You Sure?") && deleteUser(data)
        }
      />
    </Box>
  );
};

export default Users;
