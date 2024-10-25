import { Link } from "react-router-dom";

const UserDetail = ({ user, deleteSpecificUser }) => {
  return (
    <tr className="hover">
      <th>{user?.schoolNumber}</th>
      <td>
        {user?.firstName} {user?.lastName}
      </td>
      <td>{user?.email}</td>
      <td>{user?.schoolName}</td>
      <td className="flex items-center justify-center  gap-2">
        <Link
          to={`/users/${user?.id}/edit`}
          className="btn btn-success text-white cursor-pointer"
        >
          Edit
        </Link>
        <button
          onClick={() => deleteSpecificUser(user?.id)}
          className="btn btn-error text-white cursor-pointer"
        >
          Delete
        </button>
        <Link to={`/users/${user?.id}`} className="btn btn-ghost">
          View
        </Link>
      </td>
    </tr>
  );
};

export default UserDetail;
