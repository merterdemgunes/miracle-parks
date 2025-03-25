"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              Bringing Nature & Play Together for Every Child
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              Let’s build a future where children in rural schools can learn, grow, and play — all in one{"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                joyful space.
                </span>
              </h1>
              <p>
              🌿 About Miracle Parks
              Miracle Parks is a volunteer-driven initiative that builds eco-friendly playgrounds and garden areas for children in rural schools.
              We believe that nature is the best classroom, and through hands-on gardening and outdoor play, children can grow physically, emotionally, and mentally.
              Each park we build includes planting zones, green spaces, and safe play equipment, offering kids a joyful environment to learn about nature, collaborate with others, and develop life skills.
              From designing with love to digging in the soil together, Miracle Parks is about more than just building playgrounds — it’s about planting hope. 🌱
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Volunteer Now
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/image.png"
                    alt="Hero"
                    width={500}
                    height={600}
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/image.png"
                    alt="Hero"
                    width={500}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
