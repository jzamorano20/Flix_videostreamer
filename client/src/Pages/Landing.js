import React from "react";

function Landing() {
  return (
    <div>
      <nav className="bg-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0"></div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <img className="h-8 w-8" src="" alt="logo" />

                  <a
                    href="/"
                    className="text-white-50 hover:bg-white-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    HOME
                  </a>
                  <a
                    href="/login"
                    className="text-white-50 hover:bg-white-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    LOGIN
                  </a>
                  <a
                    href="/register"
                    className="text-white-50 hover:bg-white-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    REGISTER
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white-50 bg-black-950 rounded-md p-6">
            FLIX
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;
