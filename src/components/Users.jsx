import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchUsers() {
      await axios
        .get(
          `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=4`
        )
        .then((response) => {
          setUsers(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchUsers();
  }, [page]);
  const handleChange = (type) => {
    if (type === "prev") {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
  };
  const hasPrev = Boolean(page > 1);
  return (
    <div className="">
      <div className="container ">
        <div className="row">
          <div className="col-md-11 mx-2 d-flex flex-column align-items-center">
            <h1 className="text-center fw-bold fs-200 my-4">Users</h1>
            <table className="table table-bordered table-warning table-hover table-striped">
              <thead>
                <tr>
                  <th>T/R</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Phone number</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Company</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.address.city}</td>
                      <td>{item.company.name}</td>
                      <td className="d-flex gap-2">
                        <button className="btn btn-primary">
                          <Link
                            to={`/single/${item.id}`}
                            className="text-white text-decoration-none"
                          >
                            user
                          </Link>
                        </button>
                        <button className="btn btn-primary">
                          <Link
                            to={`/single/${item.id}`}
                            className="text-white text-decoration-none"
                          >
                            galery
                          </Link>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="d-flex gap-2 align-items-center ">
              <button
                disabled={!hasPrev}
                className="btn btn-success"
                onClick={() => handleChange("prev")}
              >
                prev
              </button>
              <p className="fs-3 fw-bolder mt-3">{page}</p>
              <button
                className="btn btn-info"
                onClick={() => handleChange("next")}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
