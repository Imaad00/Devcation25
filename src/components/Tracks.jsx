import React from "react";

const Tracks = () => {
  return (
    <>
      <h1 id="tracks" className="Rocher-heading" style={{ color: "#2D2B46", marginTop: "30px"}}>
        Tracks
      </h1>
      <div className="flex flex-col items-center sm:items-center justify-items-center ">
        <div className="sm:w-2/4 cursor-pointer">
          {/* <p className="text-#000056 text-center">
            At Devcation`24, innovation meets impact! This year, our focus is on
            addressing pressing global issues and creating positive change
            through technology.
          </p> */}
          <br />
          <div>
            <div className="grid grid-cols-2 gap-4 mt-4 ">
              <div className="flex flex-col items-center text-white bg-gradient-to-br from-blue-900 to-blue-500 p-4 rounded-md hover:bg-blue-700 cursor-pointer">
                <img
                  src="./Tracks&prizes/save-the-world.png"
                  alt="sustainable-development"
                  className="w-12 h-12 mb-2 "
                />
                Sustainable Development (Open Innovation)
              </div>
              <div className="flex flex-col items-center text-white bg-gradient-to-br from-blue-900 to-blue-500 p-4 rounded-md hover:bg-blue-700 p-4 rounded-md hover:bg-blue-100 cursor-pointer">
                <img
                  src="./Tracks&prizes/mental-health.png"
                  alt="mental-health"
                  className="w-12 h-12 mb-2"
                />
                HealthTech
              </div>
              <div className="flex flex-col items-center text-white bg-gradient-to-br from-blue-900 to-blue-500 p-4 rounded-md hover:bg-blue-700 p-4 rounded-md hover:bg-blue-100 cursor-pointer">
                <img
                  src="./Tracks&prizes/fist.png"
                  alt="womans-fist"
                  className="w-12 h-12 mb-2"
                />
                EdTech
              </div>
              <div className="flex flex-col items-center text-white bg-gradient-to-br from-blue-900 to-blue-500 p-4 rounded-md hover:bg-blue-700 p-4 rounded-md hover:bg-blue-100 cursor-pointer">
                <img
                  src="./Tracks&prizes/innovation.png"
                  alt="innovation"
                  className="w-12 h-12 mb-2"
                />
                FinTech
              </div>
            </div>
          </div>
          <br />
          {/* <p className="mt-5">
            Join us to tackle these critical topics and to make a difference
            through technology. See you at Devcation'24!
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Tracks;
