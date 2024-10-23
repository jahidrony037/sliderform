/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { validationSchema } from "../../validations/formValidation";
import "./editModal.css";
const UserEditModal = ({ setOpen, open, user, handleUpdateUser }) => {
  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      zipcode: user?.zipcode || "",
      country: user?.country || "",
      area: user?.area || "",
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      handleUpdateUser(values, user?.id);
      setOpen(false);
    },
  });

  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        center
        classNames={{
          overlayAnimationIn: "customEnterOverlayAnimation",
          overlayAnimationOut: "customLeaveOverlayAnimation",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        animationDuration={800}
      >
        <div className="rounded-lg bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-full">
            <h2 className="text-2xl mb-4">Edit User</h2>
            <form onSubmit={formik.handleSubmit}>
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
                  className="w-full px-4 py-2 mt-1 bg-gray-50 border border-gray-300 rounded-md"
                />
                {formik.errors.firstName && formik.touched.firstName && (
                  <div className="mt-1 text-sm text-red-600">
                    {formik.errors.firstName}
                  </div>
                )}
              </div>

              <div className="mt-4">
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
                  className="w-full px-4 py-2 mt-1 bg-gray-50 border border-gray-300 rounded-md"
                />
                {formik.errors.lastName && formik.touched.lastName && (
                  <div className="mt-1 text-sm text-red-600">
                    {formik.errors.lastName}
                  </div>
                )}
              </div>

              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="w-full px-4 py-2 mt-1 bg-gray-50 border border-gray-300 rounded-md"
                />
                {formik.errors.email && formik.touched.email && (
                  <div className="mt-1 text-sm text-red-600">
                    {formik.errors.email}
                  </div>
                )}
              </div>

              <div className="mt-4">
                <label
                  htmlFor="phone"
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
                  className="w-full px-4 py-2 mt-1 bg-gray-50 border border-gray-300 rounded-md"
                />
                {formik.errors.country && formik.touched.country && (
                  <div className="mt-1 text-sm text-red-600">
                    {formik.errors.country}
                  </div>
                )}
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  update
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UserEditModal;
