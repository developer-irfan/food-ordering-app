import React from "react";

function Header() {
  return (
    <>
      <div className="bg-white dark:bg-darker">
        <div className="relative bg-yellow-50 dark:bg-gray-900">
          <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[50px] lg:px-[100px]">
            <div className="flex items-center flex-wrap px-2 md:px-0">
              <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                <h1 className="font-bold text-4xl text-yellow-900 dark:text-yellow-50 md:text-[40px] lg:leading-[50px] lg:w-10/12">
                  Your favorite dishes, right at your door
                </h1>

                <p className="mt-8 text-gray-700 dark:text-gray-200 lg:w-10/12">
                  Order Your favourite dishes online with good quality by paying
                  with your card or manually and get the food right at your
                  door.
                </p>
              </div>
              <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
                <img
                  src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp"
                  className="relative w-full h-auto xl:w-[500px] xl:h-[450px] xl:bottom-[60px]"
                  alt="food illustration"
                  loading="lazy"
                  width="100"
                  height="450"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
