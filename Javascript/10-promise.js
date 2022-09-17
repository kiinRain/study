import thenFs from "then-fs";
// thenFs.readFile('../1.txt','utf8').then(res => {console.log(res);})
// thenFs.readFile('../2.txt','utf8').then(res => {console.log(res);})
// thenFs.readFile('../3.txt','utf8').then(res => {console.log(res);})
thenFs
  .readFile("../1.txt", "utf8")
  .catch((err) => {
    console.log(err);
  })
  .then((res) => {
    console.log(res);
    return thenFs.readFile("../2.txt", "utf8");
  })
  .then((res) => {
    console.log(res);
    return thenFs.readFile("../4.txt", "utf8");
  })
  .then((res) => {
    console.log(res);
  });
