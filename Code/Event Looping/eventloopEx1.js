let details = async () => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      resolve({ name: "Vinay", id: 233 });
    }, 2000);
  });
};
console.log("Fetching Details...");
details().then((res) => console.log(`${res.name} : ${res.id}`));
console.log("Details Fetched..");
