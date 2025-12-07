import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-12">
        <h2 className="text-center font-semibold text-2xl">
          Register your Account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">

            {/* Name */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="your name" />

            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />


            {/* photourl */}
            <label className="label">Photo url</label>
            <input type="text" className="input" placeholder="photo-url" />

            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            {/* <div>
              <a className="link link-hover">Forgot password?</a>
            </div> */}
            <button className="btn btn-secondary mt-4">Register</button>
            <p className="font-semibold text-center mt-2">
              Already have an account?
              <Link className="text-secondary ml-1" to={"/auth/login"}>
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
