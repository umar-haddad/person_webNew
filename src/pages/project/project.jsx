import React from "react";

function project() {
  // const projects = [
  //   {
  //     name: "canva",
  //     percent: "50%",
  //     image: canva,
  //   },
  // ];

  return (
    <>
      <div>
        {/* <!-- Wrapper --> */}
        <div className="sticky pt-20 bg-white z-50 shadow">
          <div className="bg-light-4 d-flex flex justify-center items-center py-4">
            <span className="text-xs tracking-[7.5px] text-left-light font-medium font-inter">
              MY PORTOFOLIO
            </span>
          </div>
        </div>
        <div class="w-full overflow-x-auto">
          {/* <!-- Carousel container --> */}
          <div class="flex gap-6 px-4 py-4 w-max snap-x snap-mandatory overflow-x-auto scroll-smooth">
            {/* <!-- CARD 1 --> */}
            {/* {projects.map((projects, index) => (
              <div
                key={index}
                class="snap-start flex-shrink-0 w-80 bg-black rounded-xl overflow-hidden bg-cover bg-center relative"
                style={{ backgroundImage: `url(${projects.image})` }}
              >
                <div class="bg-white p-4 mt-40 rounded-b-xl border border-t-0">
                  <span class="text-xs text-gray-500 border border-gray-200 px-2 py-1 rounded">
                    {projects.name}
                  </span>
                  <div class="mt-2 flex items-center gap-2">
                    <img src="" alt="icon" className="w-6 h-6" />
                    <p class="text-base font-medium text-gray-900">
                      {projects.description}
                    </p>
                  </div>
                </div>
              </div>
            ))} */}
            <div
              class="snap-start flex-shrink-0 w-80 bg-black rounded-xl overflow-hidden bg-cover bg-center relative"
              //   style="background-image: url('./assets/1189.png');"
            >
              <div class="bg-white p-4 mt-40 rounded-b-xl border border-t-0">
                <span class="text-xs text-gray-500 border border-gray-200 px-2 py-1 rounded">
                  WordPress
                </span>
                <div class="mt-2 flex items-center gap-2">
                  <img src="" alt="icon" class="w-6 h-6" />
                  <p class="text-base font-medium text-gray-900">
                    Agency Website.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- CARD 2 --> */}
            <div
              class="snap-start flex-shrink-0 w-80 bg-black rounded-xl overflow-hidden bg-cover bg-center relative"
              //   style="background-image: url('./assets/1196.png');"
            >
              <div class="bg-white p-4 mt-40 rounded-b-xl border border-t-0">
                <span class="text-xs text-gray-500 border border-gray-200 px-2 py-1 rounded">
                  React
                </span>
                <div class="mt-2 flex items-center gap-2">
                  <img src="" alt="icon" class="w-6 h-6" />
                  <p class="text-base font-medium text-gray-900">
                    Dashboard Website.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- CARD 2 --> */}
            <div
              class="snap-start flex-shrink-0 w-80 bg-black rounded-xl overflow-hidden bg-cover bg-center relative"
              //   style="background-image: url('./assets/1196.png');"
            >
              <div class="bg-white p-4 mt-40 rounded-b-xl border border-t-0">
                <span class="text-xs text-gray-500 border border-gray-200 px-2 py-1 rounded">
                  React
                </span>
                <div class="mt-2 flex items-center gap-2">
                  <img src="" alt="icon" class="w-6 h-6" />
                  <p class="text-base font-medium text-gray-900">
                    Dashboard Website.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- CARD 2 --> */}
            <div
              class="snap-start flex-shrink-0 w-80 bg-black rounded-xl overflow-hidden bg-cover bg-center relative"
              //   style="background-image: url('./assets/1196.png');"
            >
              <div class="bg-white p-4 mt-40 rounded-b-xl border border-t-0">
                <span class="text-xs text-gray-500 border border-gray-200 px-2 py-1 rounded">
                  React
                </span>
                <div class="mt-2 flex items-center gap-2">
                  <img src="" alt="icon" class="w-6 h-6" />
                  <p class="text-base font-medium text-gray-900">
                    Dashboard Website.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- CARD 3 --> */}
            <div
              class="snap-start flex-shrink-0 w-80 bg-black rounded-xl overflow-hidden bg-cover bg-center relative"
              //   style=""
            >
              <div class="bg-white p-4 mt-40 rounded-b-xl border border-t-0">
                <span class="text-xs text-gray-500 border border-gray-200 px-2 py-1 rounded">
                  PHP
                </span>
                <div class="mt-2 flex items-center gap-2">
                  <img src="" alt="icon" class="w-6 h-6" />
                  <p class="text-base font-medium text-gray-900">
                    Support Center Website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default project;
