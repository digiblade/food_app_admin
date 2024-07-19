import axios from "axios";

let tokenKey = "taxi-client-service-token";

export const checkTokenIsPresent = () => {
  let tokenValue = sessionStorage.getItem(tokenKey);
  if (!tokenValue) {
    return false;
  } else {
    try {
      return JSON.parse(tokenValue);
    } catch (error) {
      console.log("Error in token parsing");
      return false;
    }
  }
};
export const addTokenIntoTheStorage = (value) => {
  sessionStorage.setItem(tokenKey, JSON.stringify(value));
};

export const apiHelper = async (
  url,
  method = "GET",
  data = {},
  headers = {}
) => {
  try {
    if (!url) {
      throw new Error("URL is required");
    }

    let fullURL = process.env.REACT_APP_API_URL + url;
    const response = await axios(fullURL, {
      method,
      headers,
      data,
    });
    return { data: response.data, error: null };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error: error.response ? error.response.data : error.message,
    };
  }
};
