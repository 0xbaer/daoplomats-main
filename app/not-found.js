import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-white">
      <div className="flex items-center justify-center min-h-screen px-2">
        <div className="text-center">
          <h1 className="text-9xl font-bold font-philosopher text-primary">
            404
          </h1>

          <p className="text-2xl font-medium mt-4">Oops! Page not found</p>

          <p className="mt-4 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>

          <Link
            href="/"
            className="px-6 py-3 font-bold rounded-full transition duration-300 ease-in-out bg-white hover:bg-primary text-black font-urbanist"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
