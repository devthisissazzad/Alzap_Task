import React, { useEffect, useState } from "react";
import Container from "../../Utils/Container";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import Banner from "../../Svg/Banner";
import Logo from "../../Svg/Logo";
import Navbar from "../Header/Navbar";

const Home = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const res = await axios.get(
        "https://api.shope.com.bd/api/v1/public/hero-categories"
      );
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
        <div className="w-full bg-gray-100 relative overflow-hidden">
          <div className="w-full  bg-red-300 ">
            <Banner />
          </div>
          <div className="flex flex-col  w-1/6 border-r-2">
            <div className=" absolute top-0 left-0">
              {categories?.map((category) => (
                <div
                  key={category.id}
                  className=" group/item min-w-64 w-full  "
                >
                  <div className="flex justify-between items-center hover:bg-slate-800 bg-stone-700 py-1 px-1 ">
                    <span className="font-semibold text-base text-green-500">
                      {category?.title}
                    </span>
                    <div className="group-hover/item:block hidden transition-all duration-300">
                      {category?.childrens && (
                        <IoIosArrowForward size={22} color="white" />
                      )}
                    </div>
                  </div>

                  {category?.childrens && (
                    <ul className="absolute left-full top-0 mt-0   w-48 h-full hidden group-hover/item:block transition-all duration-300 bg-gray-300 ">
                      {category.childrens.map((subcategory) => (
                        <li key={subcategory.id} className=" group/item-sub">
                          <div className=" hover:bg-gray-100  cursor-pointer flex justify-between items-center">
                            <span className="text-gray-700 px-2 capitalize font-medium">
                              {subcategory.title}
                            </span>
                            {subcategory?.childrens && (
                              <div className="group-hover/item-sub:block hidden transition-all duration-300">
                                {category?.childrens && <IoIosArrowForward />}
                              </div>
                            )}
                          </div>

                          {subcategory?.childrens && (
                            <ul className="absolute left-full top-0 mt-0 w-48 h-full border-l-2 hidden group-hover/item-sub:block transition-all duration-300 bg-gray-300 ">
                              {subcategory.childrens.map(
                                (nestedSubCategory) => (
                                  <li
                                    key={nestedSubCategory.id}
                                    className="hover:bg-gray-100 border-b border-gray-200 capitalize"
                                  >
                                    <span className="text-gray-600 px-2">
                                      {nestedSubCategory.title}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
