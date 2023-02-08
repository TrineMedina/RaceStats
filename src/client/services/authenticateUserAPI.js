import { useNavigate } from "react-router-dom";

const authUser = async (user) => {
  console.log(user);
  const { user_name, password } = user;
  const navigate = useNavigate();

  await fetch("/", {
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
      //If data has payload -> navigate to dashboard
      //If data does not have payload -> display error message
    })
    .catch((err) => {
      console.log("Error validating user login ", err);
    });
};

export default authUser;
