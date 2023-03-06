import { useEffect, useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
const URL = "https://course-api.com/react-tours-project";

export default function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((item) => item.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  document.title = "Tours";

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }

  if (tours.length < 1) {
    return (
      <div className="refrest">
        <button onClick={fetchTours}>Refrest</button>
      </div>
    );
  }

  return <Tours tours={tours} removeTours={removeTour} />;
}
