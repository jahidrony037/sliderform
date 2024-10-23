import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters long"),
  
  lastName: Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters long"),
  
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  
  country: Yup.string()
    .required("Country is required")
    .min(2, "Country must be at least 2 characters long"),
  
  area: Yup.string()
    .required("Area is required")
    .min(2, "Area must be at least 2 characters long"),
  
  zipcode: Yup.string()
    .required("Zipcode is required")
    .matches(/^\d{5}$/, "Zipcode must be exactly 5 digits"),
});
