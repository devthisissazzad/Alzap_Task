import React from "react";
import Container from "../../Utils/Container";
import Logo from "../../Svg/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-3">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <div>
            <input
              type="search"
              placeholder="Search Product..."
              className=" ring-1 ring-blue-500 max-w-52 px-2 py-1 border-none outline-none focus:ring-green-500 text-lg font-medium caret-green-500"
            />
          </div>
          <div className=" bg-green-500 text-white font-bold px-3 py-1 rounded-md">
            <Link to="/signUp">Sign Up</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
