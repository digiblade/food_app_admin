import axios from "axios";
import React from "react";

const useApi = (url, options = {}) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const fetchData = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios(url, options);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  React.useEffect(() => {
    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

export default useApi;
