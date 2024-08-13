import React from "react";
import { NavLink } from "react-router-dom";

function Errordata() {
  return (
    <>
      <br />
      <br /> <br />
      <br /> <br />
      <br />
      <main class=" grid min-h-full place-items-center bg-white px-6 py-40 sm:py-50 lg:px-8">
        <div class="text-center">
          <p class="text-base font-semibold text-indigo-600">
            <h2>404</h2>
          </p>
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>{" "}
          <br />
          <p class="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <br />
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NavLink
              to="/"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              <button className="btn btn-primary">Back To Home</button>
            </NavLink>
            <br />
          </div>
        </div>
      </main>
    </>
  );
}

export default Errordata;
