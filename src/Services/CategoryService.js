export const getCategory = () => {
  return fetch("http://https://dishhub-api.onrender.com/categories").then(
    (res) => res.json()
  );
};
