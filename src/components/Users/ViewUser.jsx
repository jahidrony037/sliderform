import { useNavigate, useParams } from "react-router-dom";

const ViewUser = () => {
  const { id } = useParams();
  // console.log(id);
  const users = JSON.parse(localStorage.getItem("submitUsers")) || [];

  const user = users.find((usr) => usr?.id === parseInt(id));

  const navigate = useNavigate();

  return (
    <div className="p-4 bg-gray-100 rounded shadow-lg cursor-pointer w-[300px]">
      <h2 className="text-xl font-bold">
        {user?.firstName} {user?.lastName}
      </h2>
      <p className="text-gray-700">Email: {user?.email}</p>
      <p className="text-gray-700">Country: {user?.country}</p>
      <p className="text-gray-700">ZipCode: {user?.zipcode}</p>
      <p className="text-gray-700">Area: {user?.area}</p>
      <p className="text-gray-700">
        School Name: <span className="font-bold">{user?.schoolName}</span>
      </p>

      <button className="btn" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default ViewUser;
