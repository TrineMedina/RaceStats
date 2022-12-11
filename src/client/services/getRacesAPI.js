const getRaces = async () => {
  const allRaces = await fetch("/race", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log("Error retrieving all races ", err));

  return allRaces;
};

export { getRaces };
