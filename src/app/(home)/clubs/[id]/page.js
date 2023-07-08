/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/home/Footer";
import Image from "next/image";

const Club = () => {
  return (
    <>
      <div className="pt-28 pb-12 max-w-7xl mx-auto px-4">
        <div className="w-full h-[300px] relative">
          <Image
            src="/images/showcase.jpg"
            alt="About Image"
            fill={true}
            className="object-cover grayscale"
            priority
          />
          <div className="absolute w-4/5 bottom-5 left-5 bg-primary/80 p-3 text-white">
            <h1 className="text-2xl font-semibold">Computer Science Club</h1>
            <p className="text-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias iste magni veniam consectetur quis sed. Dicta officiis
              veniam quibusdam magni amet. Ullam reprehenderit eum officia.
            </p>
          </div>
        </div>
        <div className="flex gap-20 mt-8 flex-wrap">
          <div className="flex-1 basis-64 flex flex-col gap-8">
            <h1 className="text-3xl font-bold">Who Are We?</h1>
            <p className="opacity-80 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              soluta. Velit nostrum voluptate possimus ab voluptatibus illo
              ullam qui facere impedit sunt numquam, facilis, voluptates
              repudiandae nemo quidem earum mollitia sint ex, tempore
              dignissimos. Soluta
              <br />
              <br />
              debitis alias eveniet laborum, esse cum laboriosam nobis iste,
              officiis molestiae aspernatur molestias doloribus illo facilis.
              Natus eaque molestias nobis vitae amet doloribus rerum
              reprehenderit?
            </p>
          </div>
          <div className="flex-1 basis-64 flex flex-col gap-8">
            <h1 className="text-3xl font-bold">What We Do?</h1>
            <p className="opacity-80 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              tempora velit sint cumque saepe unde. Quisquam iure dolor ipsum
              adipisci?
            </p>
            <div className="mt-2">
              <p>- Equip Students with Computer Skills</p>
              <br />
              <p>- Dynamic Websites</p>
              <br />
              <p>- Fast and Handy Mobile Apps</p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 bg-primary">
        <Footer />
      </div>
    </>
  );
};

export default Club;
