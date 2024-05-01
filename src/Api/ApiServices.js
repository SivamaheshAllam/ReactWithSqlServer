import axios from "axios";

// let baseURL = "http://localhost:4444";
axios.defaults.baseURL = "http://localhost:4444";

let token = localStorage.getItem("Token");

export const userRegitration = async (formData) => {
  try {
    const response = await axios.post(`/registration`, formData);
    return response;
  } catch (error) {
    return error;
  }
};

export const userLogin = async (formData) => {
  try {
    const response = await axios.post(`/login`, formData);
    return response;
  } catch (error) {
    return error;
  }
};

export const checkEmailExists= async(email)=>{
let emailValue=email
  try {
    const response=await axios.post(`/CheckEmailExists/${emailValue}`)
    return response;
  } catch (error) {
    return error;
  }
}

export const getEmployees = async () => {
  try {
    const headers = {
      Authorization: localStorage.getItem("Token"),
    };
    const response = await axios.get(`EmployeeController/employees`, { headers });
    return response;
  } catch (error) {
    return error;
  }
};
