import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {
  const { createUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password, name, photo);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`/login`)
      })
      .catch((error) => {
        console.error(error);
      });

    logOut()
    .then()
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-md bg-base-100">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
            <p className="text-center mt-2">
              Already have you account?{" "}
              <Link to="/login" className="text-blue-600 font-bold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
