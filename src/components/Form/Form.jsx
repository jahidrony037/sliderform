import { useFormik } from "formik";
import { initialValues } from "../../initialvalues/initialvalues";
import { validationSchema } from "../../validations/formValidation";
import Slider from "../Slider/Slider";

const Form = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            Form Slider
          </h2>

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
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Slider Box
                </label>
                <Slider />
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
        </div>
      </div>
    </form>
  );
};

export default Form;