/* eslint-disable react/prop-types */

import { useState } from "react";
import UserEditModal from "../Modal/UserEditModal";

const UserDetailCard = ({
  users,
  setShowUserDetail,
  handleDeleteUser,
  setOpen,
  open,
  user,
  setUsers,
}) => {
  const [editingUser, setEditingUser] = useState(user);

  
  const handleUpdateUser = (updatedUser, userId) => {
    
    const updatedUsers = users.map((usr) =>
      usr.id === userId ? { ...usr, ...updatedUser } : usr
    );
    setUsers(updatedUsers); 
    setEditingUser(updatedUsers.find((usr) => usr.id === userId)); 
  };
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mx-auto mt-6">
      <p
        className="cursor-pointer pl-7"
        onClick={() => setShowUserDetail(false)}
      >
        Back to the form
      </p>
      <div className="flex items-center p-4 space-x-4 md:space-x-6">
        {/* User Profile Image */}
        <img
          className="w-16 h-16 rounded-full object-cover"
          src="https://via.placeholder.com/150"
          alt="User Profile"
        />

        {/* User Details */}

        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900">
            {editingUser?.firstName} {editingUser?.lastName}
          </h2>
          <p className="text-gray-600">Email: {editingUser?.email}</p>
          <p className="text-gray-600">Country: {editingUser?.country}</p>
          <p className="text-gray-600">
            ZipCode: {editingUser?.zipcode}, {editingUser?.area}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between p-4 border-t border-gray-200">
        <button
          onClick={() => setOpen(true)}
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          Edit
        </button>
        <UserEditModal
          setEditingUser={setEditingUser}
          open={open}
          setOpen={setOpen}
          user={editingUser}
          handleUpdateUser={handleUpdateUser}
        />
        <button
          onClick={() => handleDeleteUser(user?.id)}
          className="text-red-500 hover:text-red-700 font-semibold"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserDetailCard;
