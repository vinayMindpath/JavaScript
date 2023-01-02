import fetch from "node-fetch";
import { exit } from "process";

const url = `https://jsonplaceholder.typicode.com/albums`;

let requestingAlbums = async () => {
  let waitingForData = await fetch(url);
  let dataJson = await waitingForData.json();
  return dataJson;
};

requestingAlbums().then((res) => {
  let numberOfdata = 1;
  res.forEach((val) => {
    if (numberOfdata <= 10) console.log(val);
    else exit;
    numberOfdata++;
  });
});
console.log(requestingAlbums());
