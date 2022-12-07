const SubmitRace = (race) => {
  console.log("fetching!");
  fetch("/race", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...race,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

export default SubmitRace;
