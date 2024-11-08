import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Floating from "../../../Utils/Floating";
import Container from "../../../Utils/Container";
import Input from "../../../Utils/Input";
import Button from "../../../Utils/Button";
import PasswordStrength from "../../../Utils/PasswordStrength";
const SignIn = () => {
  const [openEye, setOpenEye] = useState({
    password: false,
    confirmPassword: false,
  });
  const [users, setUsers] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="bg-gradient-to-br from-gray-900 vai-green-900 to-emerald-900  h-screen bg-opacity-80 flex justify-center items-center overflow-hidden relative">
      <Floating top="-5%" left="10%" delay={0} />
      <Floating top="70%" bottom="80%" delay={5} />
      <Floating top="50%" left="-10%" delay={2} />

      <div className=" bg-gray-800 max-w-md w-full bg-opacity-50  backdrop-filter shadow-xl overflow-hidden backdrop-blur-xl rounded-2xl p-5">
        <Container>
          <div className="flex justify-between items-center cursor-pointer  transition-all duration-300 ease-in-out ">
            <h3 className="tex-3xl text-transparent font-semibold bg-gradient-to-tr from-green-500 to-emerald-400 bg-clip-text">
              Welcome to Alzaf.com
            </h3>
            <Link
              to="/"
              className="tex-3xl text-transparent font-semibold bg-gradient-to-tr from-violet-500 to-emerald-400 bg-clip-text"
            >
              Sign Up
            </Link>
          </div>

          <form>
            <Input
              onChange={(e) =>
                setUsers((prv) => ({ ...prv, email: e.target.value }))
              }
              icon={HiOutlineMail}
              type="email"
              placeholder="Phone Number or Email"
              name="email"
            />
            <Input
              onChange={(e) =>
                setUsers((prv) => ({ ...prv, password: e.target.value }))
              }
              icon={RiLockPasswordLine}
              type={!openEye.password ? "password" : "text"}
              placeholder="Password"
              eyeopen={FaRegEye}
              eyeclose={FaEyeSlash}
              OpenEye={openEye}
              setOpenEye={setOpenEye}
              name="password"
            />

            <div className="pt-5">
              <Button type="submit">Sign In</Button>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default SignIn;
