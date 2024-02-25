import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import "./style.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function UserPanel() {
  const [users, setUsers] = useState([]);
  const { decode, token } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAll();
  }, []);

  async function getAll() {
    const data = await fetch("http://localhost:3000/api/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await data.json();
    setUsers(res);
    setIsLoading(false);
  }

  async function deleteUser(id) {
    if (decode && decode.role === "admin") {
      await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      await getAll();
    }
  }

  return (
    <>
      <Helmet>
        <title>SpiceDine</title>
        <link
          rel="icon"
          href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png"
        />
      </Helmet>
       <div className="account">
        <p>
          <Link to={"/adminPanel"}>
            <i className="fa-solid fa-house"></i>
          </Link>
         User Panel
        </p>
      </div>
      <div className="userPanel">
        <div className="table">
        {isLoading ? (
              <div className="loaderCenterCards">
                <div className="loader">
                  <i className="fa-solid fa-spinner fa-spin"></i>
                </div>
              </div>
            ) : (
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Role</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((x) => (
                  <tr key={x._id}>
                    <th>{x._id}</th>
                    <td>{x.username}</td>
                    <td>{x.email}</td>
                    <td>{x.role}</td>
                    <td>
                      <Link to={`/userEditPanel/${x._id}`}><button>Update</button></Link>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(x._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>)}
        </div>
      </div>

      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default UserPanel;
