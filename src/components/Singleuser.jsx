import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Singleuser = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((id) => {
      setUser(id.data);
    });
  }, []);
  return (
    <div className="d-flex flex-column align-items-center gap-2 h-100">
      <h1 className="fw-bolder text-light py-5">User {id}</h1>
      <div className="card user-card p-5 border-1 border-light-subtle rounded-4 bg-transparent">
        <h3 className="text-white mb-4">Name : {user.name}</h3>
        <h4 className="text-white mb-4">username : {user.username}</h4>
        <h4 className="text-white mb-4">Email : {user.email}</h4>
        <h4 className="text-white mb-4">Phone : {user.phone}</h4>
        <h4 className="text-white mb-4">Website : {user.website}</h4>
        <div className="d-flex gap-3">
          <button className="btn btn-primary">Todos</button>
          <button className="btn btn-secondary">Comments</button>
          <button className="btn btn-warning">Galery</button>
        </div>
      </div>
      <button className="btn btn-outline-danger px-3 py-2 my-4 border-1 ">
        <a
          href="/"
          className="text-light fs-3 font-bolder text-decoration-none"
        >
          Back
        </a>
      </button>
    </div>
  );
};

export default Singleuser;
