import * as yup from "yup";

export const patientSchema = yup.object().shape({
    firstName: yup.string().min(2).required("Please enter first name"),
    middleName: yup.string().min(2).required("Please enter middle name"),
    lastName: yup.string().min(2).required("Please enter last name"),
    contactNo: yup.string().required("Please enter contact number"),
    address: yup.string().min(5).required("Please enter address"),
    city: yup.string().required("Please enter city"),
    pincode: yup.string().required("Please enter pincode"),
    state: yup.string().required("Please enter state"),
    country: yup.string().required("Please enter country"),
    email: yup.string().email().required("Please enter email"),
    password: yup.string().min(6).max(15).required("Please enter password"),
    age: yup.number().positive().required("Please enter age"),
    date: yup.date().max(new Date(), "Date cannot be in the future").required("Please enter DOB"),
});
