import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Signup() {
  const formik = useFormik({
    initialValues: {
      // Parent
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      dob: "",
      gender: "",
      address: "",
      // Handicapped
      hFirstName: "",
      hLastName: "",
      hDob: "",
      hGender: "",
      hType: "",
    },
    validationSchema: Yup.object({
      // Parent validation
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10,15}$/, "Invalid phone number")
        .required("Phone is required"),
      password: Yup.string().min(6).required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm your password"),
      dob: Yup.date().required("Date of birth is required"),
      gender: Yup.string().required("Select your gender"),
      address: Yup.string().required("Address is required"),

      // Handicapped validation
      hFirstName: Yup.string().required("Handicapped first name is required"),
      hLastName: Yup.string().required("Handicapped last name is required"),
      hDob: Yup.date().required("Handicapped date of birth is required"),
      hGender: Yup.string().required("Select handicapped gender"),
      hType: Yup.string().required("Select type of handicap"),
    }),
    onSubmit: (values) => {
      console.log("Submitted data:", values);
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <div className="container py-10 mx-auto px-4 max-w-3xl">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Create Your Account
          </h2>
          <p className="text-gray-500 mt-2">
            Fill in the details below to get started
          </p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Parent info ... (تم الإبقاء عليها كما هي) */}
            {/* First Name */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                {...formik.getFieldProps("firstName")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="text-red-500 text-sm">
                  {formik.errors.firstName}
                </div>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                {...formik.getFieldProps("lastName")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="text-red-500 text-sm">
                  {formik.errors.lastName}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...formik.getFieldProps("email")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              )}
            </div>

            {/* Phone */}
            <div className="md:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                {...formik.getFieldProps("phone")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-500 text-sm">
                  {formik.errors.phone}
                </div>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...formik.getFieldProps("password")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...formik.getFieldProps("confirmPassword")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.confirmPassword}
                  </div>
                )}
            </div>

            {/* DOB */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="dob"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                {...formik.getFieldProps("dob")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />
              {formik.touched.dob && formik.errors.dob && (
                <div className="text-red-500 text-sm">{formik.errors.dob}</div>
              )}
            </div>

            {/* Gender */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                id="gender"
                {...formik.getFieldProps("gender")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {formik.touched.gender && formik.errors.gender && (
                <div className="text-red-500 text-sm">
                  {formik.errors.gender}
                </div>
              )}
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="address"
              >
                Address
              </label>
              <textarea
                id="address"
                {...formik.getFieldProps("address")}
                rows="3"
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />
              {formik.touched.address && formik.errors.address && (
                <div className="text-red-500 text-sm">
                  {formik.errors.address}
                </div>
              )}
            </div>

            {/* HANDICAPPED SECTION */}
            <div className="md:col-span-2 pt-4 border-t mt-6">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">
                Handicapped Info
              </h3>
            </div>

            {/* H First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                {...formik.getFieldProps("hFirstName")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />
              {formik.touched.hFirstName && formik.errors.hFirstName && (
                <div className="text-red-500 text-sm">
                  {formik.errors.hFirstName}
                </div>
              )}
            </div>

            {/* H Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                {...formik.getFieldProps("hLastName")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />
              {formik.touched.hLastName && formik.errors.hLastName && (
                <div className="text-red-500 text-sm">
                  {formik.errors.hLastName}
                </div>
              )}
            </div>

            {/* H DOB */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                {...formik.getFieldProps("hDob")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />
              {formik.touched.hDob && formik.errors.hDob && (
                <div className="text-red-500 text-sm">{formik.errors.hDob}</div>
              )}
            </div>

            {/* H Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                {...formik.getFieldProps("hGender")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {formik.touched.hGender && formik.errors.hGender && (
                <div className="text-red-500 text-sm">
                  {formik.errors.hGender}
                </div>
              )}
            </div>

            {/* H Type */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type of Handicap
              </label>
              <select
                {...formik.getFieldProps("hType")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              >
                <option value="" disabled>
                  Select type
                </option>
                <option value="visual">Visual</option>
                <option value="hearing">Hearing</option>
                <option value="mobility">Mobility</option>
                <option value="cognitive">Cognitive</option>
              </select>
              {formik.touched.hType && formik.errors.hType && (
                <div className="text-red-500 text-sm">
                  {formik.errors.hType}
                </div>
              )}
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-150 ease-in-out shadow-md"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
