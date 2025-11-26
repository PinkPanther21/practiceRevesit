import { Link, Route, Routes } from "react-router-dom";
import { Plus, User } from "lucide-react";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
export function Navbar() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-5 gap-3 h-full">
        <div className="flex justify-between items-center w-full m-4">
          <div className="flex gap-2 max-md:hidden max-sm:hidden">
            <button className="bg-gray-400 text-white rounded ">
              <User className="size-10 p-2" />
            </button>
            <button className="bg-linear-to-r from-indigo-300 to-indigo-400 text-white rounded">
              <Plus className="size-10 p-2" />
            </button>
          </div>

          <div className="flex gap-6 justify-center items-center text-gray-700">
            <Link
              to="/"
              className="text-lg  font-semibold hover:border-b hover:scale-110 transition-all duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg font-semibold hover:border-b hover:scale-110 transition-all duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/contacts"
              className="text-lg font-semibold hover:border-b hover:scale-110 transition-all duration-300 ease-in-out"
            >
              Contacts
            </Link>
          </div>

          <div className="flex gap-5 max-md:gap-0 max-sm:gap-0">
            <button className="rounded-full text-gray-700 px-6 py-1 max-md:p-2 max-sm:p-2 max-sm:text-sm border-2 border-black font-bold">
              Log in
            </button>
            <button className="rounded-full px-6 py-1 max-md:p-2 max-sm:p-2 max-sm:text-sm text-white bg-indigo-400 font-bold">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
