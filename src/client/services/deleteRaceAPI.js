const deleteRace = async (raceId) => {
  const id = +raceId;
  let wasDeleted = false;

  await fetch("/race", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log("RETURNED DELETED FROM SERVER: ", data.race.rowCount);
      data.race.rowCount === 0 ? wasDeleted : (wasDeleted = true);
    })
    .catch((err) => {
      console.log("Error deleting race. ", err);
    });

  return wasDeleted;
};

export default deleteRace;
