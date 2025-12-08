import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const {createUser, setUser, updateUser} = use(AuthContext);

      const [nameError, setNameError] = useState("");

      const navigate = useNavigate();

    const handleRegister = (e) => {


    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
      if(name.length< 5) {
        setNameError("Name Should be at least 6 character");
        return;
      } else{
        setNameError("");
      }

    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log({name, email, password, photo});
    createUser(email, password)
    .then(result=>{
        const user = result.user;
        // console.log(user);
        updateUser({displayName:name, photoURL:photo}).then(()=>{

          setUser({...user, displayName:name, photoURL:photo});
          navigate("/");
        }).catch((error)=>{
          console.log(error);
          setUser(user);
        })
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage)
    // ..
  });
    }

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-12">
        <h2 className="text-center font-semibold text-2xl">
          Register your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input name="name" type="text" className="input" placeholder="your name" required/>

            {
              nameError && <p className="text-sm text-error">{nameError}</p>
            }

            {/* email */}
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" required/>

            {/* photourl */}
            <label className="label">Photo url</label>
            <input name="photo" type="text" className="input" placeholder="photo-url" required/>

            {/* password */}
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" required/>
            <button type="submit" className="btn btn-secondary mt-4">Register</button>
            <p className="font-semibold text-center mt-2">
              Already have an account?
              <Link className="text-secondary ml-1" to={"/auth/login"}>
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
