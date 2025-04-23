import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="min-h-screen py-10 flex items-center justify-center px-4">
    <div className="bg-white p-8 md:p-14 rounded-2xl w-full max-w-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sign In</h2>
      <p className="text-gray-500 mb-10 text-center">Please enter your login details below.</p>
  
      <form onSubmit={formik.handleSubmit} className="space-y-7">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            {...formik.getFieldProps("email")}
            className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-sm text-red-500 mt-1">{formik.errors.email}</div>
          )}
        </div>
  
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            {...formik.getFieldProps("password")}
            className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-sm text-red-500 mt-1">{formik.errors.password}</div>
          )}
        </div>
  
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-lg font-medium transition duration-150 ease-in-out shadow-md"
        >
          Sign In
        </button>
      </form>
  
      <div className="text-center mt-8">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-600 font-medium hover:text-indigo-500">
            Register
          </a>
        </p>
      </div>
    </div>
  </div>
  
  );
}

export default SignIn;
