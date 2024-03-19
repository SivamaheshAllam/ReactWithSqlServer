import axios from "axios";

let baseURL = "http://localhost:4444";

export const userRegitration = async (formData) => {
  try {
    const response = await axios.post(`${baseURL}/registration`, formData);
    return response;
  } catch (error) {
    // console.error("Error during user registration:", error);
    // Handle the error as needed
    return error;
  }
};

export const userLogin= async (formData)=>{
  try {
    const response = await axios.post(`${baseURL}/login`, formData);
    return response;
  } catch (error) {
    return error;
  }
}
