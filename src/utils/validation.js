export const formValidationSignUp = ({
  userName,
  email,
  password,
  confirmPass,
}) => {
  if (userName === "") {
    return { type: false, message: "Invalid Name" };
  }
  if (email === "" || !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
    return { type: false, message: "Invalid Email" };
  }
  if (password === "" || password.length < 8) {
    return { type: false, message: "Password Length should be more than 8" };
  }
  if (password !== confirmPass) {
    return { type: false, message: "Passwords Don't Match" };
  }
  return { type: true };
};

export const formValidationLogin = ({ email, password }) => {
  console.log(email, password);
  if (email === "" || !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
    return { type: false, message: "Invalid Email" };
  }
  if (password === "" || password.length < 8) {
    return { type: false, message: "Password Length should be more than 8" };
  }
  return { type: true };
};
