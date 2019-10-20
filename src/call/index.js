export default async function call(url) {
  return (async () => {
    const data = await fetch(url);
    const user = await data.json();
    return user;
  })();
}