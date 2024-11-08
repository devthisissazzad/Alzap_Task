import React from "react";

const Input = ({ icon: Icon, OpenEye, setOpenEye, ...props }) => {
  const { type, eyeopen: Ieyeopen, eyeclose: Ieyeclose, name } = props;
  return (
    <div className=" relative mt-5">
      <div className="absolute left-1 top-1/2 -translate-y-1/2 inset-y-0 z-50 pointer-events-none">
        <Icon className="size-5 text-green-500" />
      </div>
      {name === "password" && (
        <div
          className="absolute right-1 top-1/2 -translate-y-1/2 inset-y-0 z-50  cursor-pointer"
          onClick={() =>
            setOpenEye((prv) => ({ ...prv, password: !OpenEye.password }))
          }
        >
          {!OpenEye.password ? (
            <Ieyeopen className="size-5 text-green-500" />
          ) : (
            <Ieyeclose className="size-5 text-green-500" />
          )}
        </div>
      )}
      {name === "confirmPassword" && (
        <div
          className="absolute right-1 top-1/2 -translate-y-1/2 inset-y-0 z-50  cursor-pointer"
          onClick={() =>
            setOpenEye((prv) => ({
              ...prv,
              confirmPassword: !OpenEye.confirmPassword,
            }))
          }
        >
          {!OpenEye.confirmPassword ? (
            <Ieyeopen className="size-5 text-green-500" />
          ) : (
            <Ieyeclose className="size-5 text-green-500" />
          )}
        </div>
      )}
      <input
        {...props}
        className=" bg-gray-800 backdrop-blur-xl backdrop-filter rounded-md focus:right-1 focus:ring-green-500 border-none outline-none w-full ring-1 ring-gray-800 shadow-md px-8 py-2 transition-all duration-300 text-green-500 font-medium text-base caret-green-500"
      />
    </div>
  );
};

export default Input;
