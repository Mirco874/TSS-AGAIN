export const post = async (url, body) => {
    try {
      console.log(JSON.stringify(body));
      const rawResponse = await
        fetch(url,
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(body)
          })
  
      console.log(rawResponse)
      const res = await rawResponse.json();
      return res;
    } catch (error) {
      console.error(error);
    }
  
  }