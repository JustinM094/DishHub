export const getCategory = () => {
  return fetch("https://dishhub-api.onrender.com/categories").then((res) =>
    res.json()
  );
};
