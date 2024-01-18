import { user } from "../constants/user";

export const validateCredentials = (username,password) => {
  const matchedUsername = user.find((obj) => obj.username === username);
  const matchedPassword=matchedUsername&&matchedUsername.password===password
  if (matchedUsername && matchedPassword) {
    localStorage.setItem('username',matchedUsername.username)
    return true;
  } else {
    return false;
  }
};

