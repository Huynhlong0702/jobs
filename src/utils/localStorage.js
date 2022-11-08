export const addUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUser = (user) => {
  localStorage.removeItem("user");
};

export const getUser = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : "";
  return user;
};
