export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Response from API" };
      resolve(data); 
    }, 1000);
  });
}
