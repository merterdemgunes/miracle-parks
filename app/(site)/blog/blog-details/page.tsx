import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Miracle Parks",

  // other metadata
  description: "This is Blog details page for Solid Pro"
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">

            <div className="lg:w-3/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                Every Child Deserves To Play!
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Melisa Terzi
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: July 30, 2023
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                    Position: 
                    </span>
                     Ceo, Project Manager
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    Miracle Parks is more than just a playground project — it’s a movement rooted in nature, community, and kindness. In rural villages where children have limited access to green spaces, we create safe, eco-friendly environments where they can learn, play, and grow.
                  </p>

                  <p>
                    Each park we build includes a garden area where kids plant, water, and harvest real vegetables and flowers. It’s a hands-on experience that teaches responsibility, patience, and a deep love for the earth. At the same time, swings, slides, and climbing sets provide joy and social bonding.
                  </p>

                  <h3 className="pt-8">
                    Powered by Volunteers, Fueled by Hope
                  </h3>

                  <p>
                    None of this would be possible without the amazing people who volunteer their time and heart. From building fences to painting signs, from planting seeds to running workshops — every hand shapes a miracle.
                  </p>

                  <p>
                    In this story, we highlight one of our recent park builds in Şırnak. Over 200 children now enjoy a colorful garden and playground thanks to 14 dedicated volunteers. Their smiles are our greatest reward.
                  </p>

                  <p>
                    Stay tuned for more stories from the field as we continue to turn empty spaces into places full of life. Miracle Parks is growing — and so are the kids we work for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
