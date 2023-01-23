import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex-1 bg-[#0F1017] text-white p-4 mt-24">
        <div className="flex flex-col md:flex-row justify-around max-w-4xl gap-12 mx-auto">
          <div class="group relative max-w-md">
            <img src="/tile1.png" alt="dev logo" />
            <div class="absolute p-4 text-center top-0 left-0 w-full lg:h-0 flex flex-col justify-center items-center bg-zinc-800 opacity-75 h-full lg:opacity-0 xl:group-hover:h-full lg:group-hover:opacity-75 duration-500">
              <p className="text-lg italic mb-2">AI Drive Design</p>
              <p className="text-sm font-light">
                Using the latest AI driven content and image we can create an
                truly unique design for your business.
              </p>
            </div>
          </div>
          <div class="group relative max-w-md">
            <img src="/tile2.png" alt="dev logo" />
            <div class="absolute p-4 text-center top-0 left-0 w-full lg:h-0 flex flex-col justify-center items-center bg-zinc-800 opacity-75 h-full lg:opacity-0 xl:group-hover:h-full lg:group-hover:opacity-75 duration-500">
              <p className="text-lg italic mb-2">Cutting Edge Development</p>
              <p className="text-sm font-light">
                Bleeding edge ReactJS libraries to create blazing fast SEO
                optimised websites.
              </p>
            </div>
          </div>
          <div class="group relative max-w-md">
            <img src="/tile3.png" alt="dev logo" />
            <div class="absolute p-4 text-center top-0 left-0 w-full lg:h-0 flex flex-col justify-center items-center bg-zinc-800 opacity-75 h-full lg:opacity-0 xl:group-hover:h-full lg:group-hover:opacity-75 duration-500">
              <p className="text-lg italic mb-4">Deployment &amp; Hosting</p>
              <p className="text-sm font-light">
                Continuous deployment and hosting on Vercel allowing for zero
                downtime and real time updates.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#0F1017] text-[#d5d5d3] max-w-xl border text-md md:mx-auto p-8 mt-24 mx-4">
        <p className="mb-8">
          Are you looking for a reliable web development agency to help you
          create a modern, high-performing website? Look no further than disi.
          We specialize in using <span className="font-bold">ReactJS</span>{" "}
          frameworks like <span className="font-bold">NextJS </span> and{" "}
          <span className="font-bold"> GatsbyJS</span> to build websites that
          are both visually stunning and highly functional.
        </p>

        <p className="mb-8">
          Our team of experts is well-versed in using the latest technologies
          and best practices to ensure that your website is built to the highest
          standards. We use <span className="font-bold">TailwindCSS</span> to
          create beautiful, responsive designs that look great on any device,
          and we offer hosting and continuous deployment services using{" "}
          <span className="font-bold">Vercel</span>.
        </p>

        <p className="mb-8">
          In addition to our technical expertise, we also pride ourselves on our
          commitment to customer service. We understand that creating a website
          can be a daunting task, and we&lsquo;re here to guide you through the
          process every step of the way. Whether you&lsquo;re a small business
          owner or a large corporation, we&lsquo;ll work closely with you to
          understand your needs and create a website that meets your specific
          requirements.
        </p>
        <p>
          So why wait? If you&lsquo;re ready to take your website to the next
          level, contact us today and let us show you what we can do. With disi,
          you can be sure that you&lsquo;re getting the best in web development
          services.
        </p>
      </div>
    </>
  );
};

export default Home;
