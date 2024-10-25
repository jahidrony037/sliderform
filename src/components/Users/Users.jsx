import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserDetail from "./UserDetail";

const Users = () => {
  const [submitUsers, setSubmitUsers] = useState([]);
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("submitUsers") || []);
    setSubmitUsers(users);
  }, []);
  // console.log(submitUsers);

  const deleteSpecificUser = (id) => {
    const x = confirm("Are you you want to delete this?");
    if (x === true) {
      const updateSubmitUsers = submitUsers.filter(
        (submitUser) => submitUser?.id !== id
      );

      localStorage.setItem("submitUsers", JSON.stringify(updateSubmitUsers));
      setSubmitUsers(updateSubmitUsers);
    }
  };
  return (
    <div>
      <Link to={"/"}>Back</Link>
      <h2 className="text-center">All Users</h2>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            {!submitUsers.length < 1 && (
              <thead>
                <tr className="text-center">
                  <th>School Number</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>SchoolName</th>
                  <th>Action</th>
                </tr>
              </thead>
            )}
            <tbody>
              {submitUsers?.map((submitUser, index) => (
                <UserDetail
                  deleteSpecificUser={deleteSpecificUser}
                  key={index}
                  user={submitUser}
                />
              ))}
            </tbody>
            {submitUsers?.length < 1 && (
              <div className="flex items-center justify-center min-h-screen">
                <p className="text-red-500 text-center font-bold  text-2xl ">
                  No Users Submit Yet
                </p>
              </div>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
