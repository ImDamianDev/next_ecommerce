// fetchData.js

export const fetchData = async () => {
  try {
    const res = await fetch(
      "https://next-ecommerce-ruddy-one.vercel.app/api/products",
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
