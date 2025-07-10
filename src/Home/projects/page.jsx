import React from "react";
import Contact from "../../component/contact";

const projectSectionOne = {
  left: "/choose.jpg",
  right: [
    ["/commerical.jpg", "/night.jpg"],
    "/industrial.jpg",
  ],
};

const projectSectionTwo = {
  left: ["/services.jpg", "/snow.jpg", "/airC.jpg"],
  right: "/services.jpg",
};

const Projects = () => {
  return (
    <div>
      <section className="px-4 md:px-10 lg:px-28 pt-28 pb-8">
        <div className="w-full md:w-11/12 mx-auto">
          <div className="flex items-center gap-x-3">
            <img src="/variables.svg" alt="variables" />
            <h1 className="text-[#021419] text-3xl md:text-4xl capitalize font-bold">
              our projects
            </h1>
          </div>
          <p className="max-w-md w-full mt-6">
            Explore standout projects that showcase the quality, craftsmanship,
            and attention to detail we bring to every job.
          </p>
        </div>

        {/* Section One */}
        <div className="flex flex-col md:flex-row my-6 md:h-[40rem] gap-3">
          {/* Left image */}
          <div className="basis-full md:basis-[40%] h-[20rem] md:h-full rounded-md overflow-hidden">
            <img
              src={projectSectionOne.left}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* Right images */}
          <div className="basis-full md:basis-[60%] flex flex-col md:flex-row gap-3 h-full">
            {/* Left column (two stacked images) */}
            <div className="flex flex-col gap-3 basis-1/2">
              {projectSectionOne.right[0].map((src, idx) => (
                <div className="h-[20rem] rounded-md overflow-hidden" key={idx} >
                  <img src={src} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>

            {/* Right column (single image) */}
            <div className="basis-1/2 rounded-md h-full overflow-hidden">
              <img
                src={projectSectionOne.right[1]}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Section Two */}
        <div className="flex flex-col md:flex-row gap-3">
          {/* Left (stacked images) */}
          <div className="basis-full md:basis-[40%]">
            <div className="flex flex-col gap-3">
              {projectSectionTwo.left.map((src, idx) => (
                <div className="h-[20rem] rounded-md overflow-hidden" key={idx}>
                  <img src={src} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* Right (single large image) */}
          <div className="basis-full md:basis-[60%] h-[61.5rem] rounded-md overflow-hidden">
            <img
              src={projectSectionTwo.right}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Projects;
