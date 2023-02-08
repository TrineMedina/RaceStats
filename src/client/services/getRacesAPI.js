import { useNavigate } from "react-router-dom";

const getRaces = async (user) => {
  const { user_name, password } = user;
  console.log("in api: ", user_name, password);

  const allRaces = await fetch("race/login", {
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
      console.log(data);
      data ? data : alert("Invalid login information");
      return data;
    })
    .catch((err) => console.log("Error retrieving all races ", err));

  return allRaces;
};

export default getRaces;
