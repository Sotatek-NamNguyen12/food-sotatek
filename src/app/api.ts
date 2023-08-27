export const getData = async () => {
  try {
    const response = await fetch(
      "https://portal.grab.com/foodweb/v2/merchants/VNGFVN000006ic?latlng=21.0278,105.8342",
      { mode: "no-cors" }
    );
    return response.json();
  } catch (error) {
    console.log({ error });
  }
};
