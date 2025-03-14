//import "./styles.css"
import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);

  const getCountriesData = async () => {
    try {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const res = await data.json();
      setCountries(res);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    getCountriesData();
  }, []);

  const imageStyle = { width: "100px", height: "100px" }; // Add this image;
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  const cardStyle = {
    width: "200px",
    margin: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={containerStyle}>
      {countries.map((country) => {
        return (
          <div key={country.cca3} style={cardStyle}>
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              style={imageStyle}
            />
            <h2>{country.name.common}</h2>
          </div>
        );
      })}
    </div>
  );
}
