import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import EditUser from "../components/EditUser/EditUser";
import Users from "../components/Users/Users";
import ViewUser from "../components/Users/ViewUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:id",
    element: <ViewUser />,
  },
  {
    path: "/users/:id/edit",
    element: <EditUser />,
  },
]);
