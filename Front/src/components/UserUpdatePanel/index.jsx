import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import "./style.scss";
import { UserContext } from "../../context/userContext";

function UserEditPanel() {
  let { id } = useParams();
  const { token, decode } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (!decode || decode.role !== "admin") {
      window.location.href = "/";
    } else {
      getUserById(id);
    }
  }, [id]);

  async function getUserById(_id) {
    const response = await fetch(`http://localhost:3000/api/users/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.log("update olundu");
    }
    const userData = await response.json();
    setUsername(userData.username);
    setEmail(userData.email);
    setRole(userData.role);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (decode && decode.role === "admin") {
      try {
        const response = await fetch(`http://localhost:3000/api/users/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ username, email, role }),
        });
        if (response.ok) {
          window.location.href = "/userPanel";
        }
        console.log("Product updated successfully");
      } catch (error) {
        console.error("Error occurred while updating user:", error);
      }
    }
  }

  return (
    <>
      <div className="account">
        <p>
          <Link to={"/userPanel"}>
            <i className="fa-solid fa-house"></i>
          </Link>
          User Update Panel
        </p>
      </div>
      <div className="userUpdatePanel">
        <form action="#" onSubmit={handleSubmit} className="form">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />

          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="role"
          />

          <button type="submit">Update User</button>
        </form>
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default UserEditPanel;
