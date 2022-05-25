import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user || googleUser);
  console.log(token);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (googleLoading || loading) {
    return <p>Loadding...</p>;
  }

  if (error || googleError) {
    signInError = (
      <p className="text-center text-red-500">
        <small>{error?.message || googleError?.message}</small>
      </p>
    );
  }

  const onSubmit = async (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    console.log("Sign Up successfully");
  };
  return (
    <div class="hero flex h-screen justify-center items-center bg-base-200">
      <div class="hero-content">
        <div class="card w-96 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>{" "}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                class="input input-bordered"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {signInError}
            <div class="form-control mt-6">
              <input class="btn btn-primary" type="submit" value="Login" />
            </div>
            <div class="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              class="btn btn-outline btn-primary"
            >
              Continue with Google
            </button>
            <p className="text-center">
              Don't have an account? <Link to="/signup">SignUp</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
