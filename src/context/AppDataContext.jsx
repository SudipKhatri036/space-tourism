import { createContext, useState, useEffect, useContext } from "react";

const AppDataContext = createContext();

function AppDataProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/data.json");

        if (!res.ok) return;

        const data = await res.json();

        setData(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <AppDataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </AppDataContext.Provider>
  );
}

const useAppData = () => {
  const data = useContext(AppDataContext);

  return data;
};

export { AppDataProvider, useAppData };
