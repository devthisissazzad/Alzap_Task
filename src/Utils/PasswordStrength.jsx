import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
const PasswordCriteria = ({ password }) => {
  const criteria = [
    {
      label: "At least one uppercase letter",
      regex: /[A-Z]/.test(password),
    },
    {
      label: "At least one digit",
      regex: /[0-9]/.test(password),
    },
    {
      label: "At least one special character",
      regex: /[^A-Za-z0-9]/.test(password),
    },
    {
      label: "Password Must be 8 characters and longer",
      regex: /.{8,}/.test(password),
    },
  ];
  return (
    <>
      <div>
        {criteria?.map((vl) => (
          <div key={vl.label} className="flex items-center justify-start gap-3">
            {" "}
            <div>
              {vl.regex ? (
                <span>
                  <FaCheck size={22} className=" text-green-500" />
                </span>
              ) : (
                <span>
                  <IoMdClose size={22} className="text-red-500" />
                </span>
              )}
            </div>
            <p className={`${vl.regex ? "text-green-500" : "text-red-500"}`}>
              {vl.label}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

const PasswordStrength = ({ password }) => {
  const strength = (password) => {
    let count = 0;
    if (password.match(/[A-Z]/)) count++;
    if (password.match(/[0-9]/)) count++;
    if (password.match(/[^A-Za-z0-9]/)) count++;
    if (password.match(/.{8,}/)) count++;

    return count;
  };

  return (
    <div>
      <div className="flex justify-between items-center pb-2">
        <h4 className="text-green-500">Password Strength</h4>
        <span>
          {strength(password) == 0 ? (
            <span className=" text-red-600">Very Week</span>
          ) : strength(password) == 1 ? (
            <span className=" text-yellow-500">Week</span>
          ) : strength(password) == 2 ? (
            <span className="text-blue-400">Fair</span>
          ) : strength(password) == 3 ? (
            <span className="text-green-500">Good</span>
          ) : (
            ""
          )}
        </span>
      </div>
      <div className="flex justify-between items-center gap-5 pb-2">
        {/* {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`w-full h-2 ${
              strength(password) == 0 && index == 0
                ? "bg-red-600"
                : strength(password) == 1 && index == 1
                ? "bg-yellow-500"
                : strength(password) == 2 && index == 2
                ? "bg-blue-400"
                : strength(password) == 3 && index == 3
                ? "bg-green-500"
                : ""
            } rounded-full`}
          ></div>
        ))} */}
      </div>
      <PasswordCriteria password={password} />
    </div>
  );
};

export default PasswordStrength;
