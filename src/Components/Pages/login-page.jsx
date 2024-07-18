import React from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "../Atoms/Button/login-button";
import { addTokenIntoTheStorage } from "../../utils";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = React.useState({});
  const [validationError, setValidationErrors] = React.useState({});
  const handleInput = (event) => {
    let { id, value } = event.target;
    if (id && value) {
      let tempLoginFormData = { ...loginFormData, [id]: value };
      setLoginFormData(tempLoginFormData);
    }
  };
  const handleInputCheckBox = (event) => {
    let { id, checked } = event.target;
    if (id) {
      let tempLoginFormData = { ...loginFormData, [id]: !!checked };
      setLoginFormData(tempLoginFormData);
    }
  };
  const handleLoginAttempt = () => {
    let { email, password } = loginFormData;
    let tempValidation = {};
    let valid = true;
    if (
      !email ||
      !email.includes("@") ||
      !email.toLowerCase().includes(".com")
    ) {
      tempValidation["email"] = "Please enter valid email";
      valid = false;
    }
    if (!password || password.length < 6) {
      tempValidation["password"] = "Please enter valid password";
      valid = false;
    }
    setValidationErrors(tempValidation);
    if (valid) {
      addTokenIntoTheStorage(loginFormData);
      navigate("/");
    }
  };
  return (
    <div className="h-screen bg-blue-100 w-100 flex justify-center items-center overflow-auto">
      <div className="w-1/4 bg-white rounded-lg p-4 shadow-lg ">
        <h1 className="w-full flex justify-center font-bold mb-6 text-2xl">
          Admin Panel
        </h1>
        <div className="">
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              onChange={handleInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="john.doe@company.com"
            />
            <span className="text-red-400 text-sm font-medium">
              {validationError["email"]}
            </span>
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={handleInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="•••••••••"
            />
            <span className="text-red-400 text-sm font-medium">
              {validationError["password"]}
            </span>
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                onChange={handleInputCheckBox}
                value={true}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label
              for="remember"
              className="ms-2 text-sm font-medium text-gray-900 "
            >
              I agree with the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                terms and conditions
              </a>
              .
            </label>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <LoginButton
            onClick={handleLoginAttempt}
            disabled={!loginFormData["remember"]}
          />
        </div>
      </div>
    </div>
  );
}
