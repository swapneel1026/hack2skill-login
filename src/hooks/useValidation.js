import { user } from "../constants/user";

export const validateCredentials = (username,password) => {
    console.log(username,password)
    const matchedUsername = user.find((obj) => obj.username === username);
    const matchedPassword = user.find((obj) => obj.password === password);
    if (matchedUsername && matchedPassword) {
      return true;
    } else {
      return false;
    }
  };