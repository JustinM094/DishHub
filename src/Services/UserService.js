export const getUserByEmail = (email) => {
  return fetch(`https://dishhub-api.onrender.com/users?email=${email}`).then(
    (res) => res.json()
  );
};

export const createUser = (user) => {
  return fetch("https://dishhub-api.onrender.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};
