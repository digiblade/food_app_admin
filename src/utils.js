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
