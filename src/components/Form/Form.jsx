import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { initialValues } from "../../initialvalues/initialvalues";
import { validationSchema } from "../../validations/formValidation";
import Slider from "../Slider/Slider";

const Form = () => {
  let schoolsData = [
    {
      schoolNumber: 1,
      schoolName: "Greenfield International School",
      address: "123 Elm Street, Springfield, IL 62704",
    },
    {
      schoolNumber: 2,
      schoolName: "Sunshine High School",
      address: "456 Oak Avenue, Sunnyvale, CA 94086",
    },
    {
      schoolNumber: 3,
      schoolName: "Hillside Academy",
      address: "789 Maple Drive, Boulder, CO 80301",
    },
    {
      schoolNumber: 4,
      schoolName: "Lakeside Middle School",
      address: "101 Pine Road, Lakeside, FL 32159",
    },
    {
      schoolNumber: 5,
      schoolName: "Riverbend Elementary",
      address: "202 Willow Lane, Riverside, OH 45431",
    },
    {
      schoolNumber: 6,
      schoolName: "Mountainview High School",
      address: "303 Aspen Court, Denver, CO 80231",
    },
    {
      schoolNumber: 7,
      schoolName: "Seaside Prep Academy",
      address: "404 Ocean Blvd, Santa Monica, CA 90401",
    },
    {
      schoolNumber: 8,
      schoolName: "Maple Grove Elementary",
      address: "505 Cedar Street, Maplewood, NJ 07040",
    },
    {
      schoolNumber: 9,
      schoolName: "Pine Hill Charter School",
      address: "606 Birch Avenue, Austin, TX 78701",
    },
    {
      schoolNumber: 10,
      schoolName: "Redwood High School",
      address: "707 Redwood Rd, Redwood City, CA 94061",
    },
  ];
  const [schools, setSchools] = useState(schoolsData);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      const storedUsers = JSON.parse(localStorage.getItem("submitUsers")) || [];

      
      schools[activeSlideIndex] = {
        ...schools[activeSlideIndex],
        id: storedUsers?.length + 1,
        email: values?.email,
        firstName: values?.firstName,
        lastName: values?.lastName,
        country: values?.country,
        zipcode: values?.zipcode,
        area: values?.area,
      };

      console.log(schools[activeSlideIndex]);

      const updateUser = [...storedUsers, schools[activeSlideIndex]];
      localStorage.setItem("submitUsers", JSON.stringify(updateUser));
      alert("User Submit Successfully.");

      formik.resetForm();
    },
  });

  return (
    <>
      <div className="flex items-center justify-center min-h-screen  bg-gray-100">
        <div className="w-full max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            Form Slider
          </h2>

          <form onSubmit={formik.handleSubmit}>
            {/* Flex container for two sections */}
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
              {/* Left part */}
              <div className="w-full md:w-1/2 space-y-4">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    className="w-full px-4 py-2 mt-1 bg-gray-50 border border-gray-300 rounded-md shadow-sm "
                  />
                  {formik.errors.firstName && formik.touched.firstName ? (
                    <div className="mt-1 text-sm text-red-600">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>
                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    className="w-full px-4 py-2 mt-1 bg-gray-50 border border-gray-300 rounded-md shadow-sm "
                  />
                  {formik.errors.lastName && formik.touched.lastName ? (
                    <div className="mt-1 text-sm text-red-600">
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="w-full px-4 py-2 mt-1 bg-gray-50 border border-gray-300 rounded-md shadow-sm "
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="mt-1 text-sm text-red-600">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                {/* Country  */}
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.country}
                    className="w-full px-4 py-2 mt-1 bg-gray-50 border border-gray-300 rounded-md shadow-sm "
                  />
                  {formik.errors.country && formik.touched.country ? (
                    <div className="mt-1 text-sm text-red-600">
                      {formik.errors.country}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Right part  */}
              <div className="w-full md:w-1/2 space-y-4">
                {/* ZipCode  */}
                <div>
                  <label
                    htmlFor="zipcode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Zipcode
                  </label>
                  <input
                    id="zipcode"
                    name="zipcode"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.zipcode}
                    className="w-full px-4 py-2 mt-1 bg-gray-50 border border-gray-300 rounded-md shadow-sm "
                  />
                  {formik.errors.zipcode && formik.touched.zipcode ? (
                    <div className="mt-1 text-sm text-red-600">
                      {formik.errors.zipcode}
                    </div>
                  ) : null}
                </div>
                {/* Area */}
                <div>
                  <label
                    htmlFor="area"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Area
                  </label>
                  <input
                    id="area"
                    name="area"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.area}
                    className="w-full px-4 py-2 mt-1 bg-gray-50 border border-gray-300 rounded-md shadow-sm "
                  />
                  {formik.errors.area && formik.touched.area ? (
                    <div className="mt-1 text-sm text-red-600">
                      {formik.errors.area}
                    </div>
                  ) : null}
                </div>

                {/* Slider Box (Placeholder for Slider) */}
                <div className="pb-10">
                  <label className="block-inline text-sm font-medium text-gray-700">
                    Slider Box
                  </label>
                  {/* <Slider handleDetailsUser={handleDetailsUser} users={users} /> */}
                  <Slider
                    schools={schools}
                    setActiveSlideIndex={setActiveSlideIndex}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 "
              >
                Submit
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center">
            <Link
              to="/users"
              className="btn bg-blue-500 p-4 rounded-lg text-white"
            >
              All Submit User List
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
