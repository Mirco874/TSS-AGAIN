export const get = async (url, body) => {
  console.log("hola")
  try {
    const rawResponse = await fetch(url, {
      method: "GET",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    });

    const res = await rawResponse.json();
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};
