export default async function call(url) {
  return (async () => {
      const data = await fetch(url);
      if(data.status === 200){
        return await data.json()
      }
      return null
 

  })();
}