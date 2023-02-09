const getRaces = async (user) => {
  console.log(user);
  const { user_name, password } = user;
  console.log("in api: ", user_name, password);

  return await fetch("race/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_name,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log("Error retrieving all races ", err));
};

export default getRaces;
