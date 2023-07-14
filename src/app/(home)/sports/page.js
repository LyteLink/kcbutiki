/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/home/Footer";
import Image from "next/image";

const galleryData = [
    {
    imageUrl: "/images/gallery/sports/fufa_best.jpg",
    description: "Description for Image 1",
  },
  {
    imageUrl: "/images/gallery/sports/kcb_fufa_team2.jpg",
    description: "Description for Image 2",
  },
  {
    imageUrl: "/images/gallery/sports/fufa_supporters1.jpg",
    description: "Description for Image 3",
  },
  {
    imageUrl: "/images/gallery/sport1.jpg",
    description: "Description for Image 2",
  },
  {
    imageUrl: "/images/gallery/sport2.jpg",
    description: "Description for Image 3",
  },
    {
    imageUrl: "/images/gallery/sport3.jpg",
    description: "Description for Image 1",
  },
  {
    imageUrl: "/images/gallery/sport4.jpg",
    description: "Description for Image 2",
  },
  {
    imageUrl: "/images/gallery/sport_1.jpg",
    description: "Description for Image 3",
  }
  ,
  {
    imageUrl: "/images/gallery/sports/kcb_fufa_team3.jpg",
    description: "Description for Image 3",
  }
  // Add more objects for additional images
];


const Sport = () => {
  return (
    <>
      <div className="pt-28 pb-6 max-w-7xl mx-auto px-4">
        <div className="w-full h-[300px] relative">
          <Image
            src="/images/showcase.jpg"
            alt="About Image"
            fill={true}
            className="object-cover grayscale"
            priority
          />
          <div className="absolute w-4/5 bottom-5 left-5 bg-primary/80 p-3 text-white">
            <h1 className="text-2xl font-semibold">Sports</h1>
            <p className="text-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias iste magni veniam consectetur quis sed
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
      <section className="pt-12 pb-12 bg-white max-w-7xl mx-auto px-4">
      <div className="mt-20 pt-6">
          <hr className="hr3" />
          <h1 className="text-2xl my-2 font-semibold text-center">
            Word from sports teacher
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center mt-4">
            <div className="md:col-span-1">
              <img
                src="/images/dosA.jpg"
                alt=""
                className="h-[250px] md:h-[300px] rounded-lg shadow-md"
              />
            </div>
            <div className="md:col-span-2">
              <div className="p-4 border rounded-lg border-green-600">
                <p className="text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
                  ab. Et, itaque! Dicta ab dignissimos cupiditate. Unde minima
                  recusandae, cumque nisi enim est nostrum laborum saepe iure
                  repellat porro quam. Reprehenderit, dolorum amet soluta
                  dignissimos adipisci.
                 </p>
              </div>
            </div>
          </div>
        </div>

         <div className="pt-36 pb-12 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Sports Gallery</h1>
          <p className="text-muted mt-3">
            Explore our memories at Butiki as we share the happiness and strive
            for success
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3">
          {galleryData.map((item, i) => (
            <div
              className="overflow-hidden group cursor-pointer relative"
              key={i}
            >
              <img
                src={item.imageUrl}
                alt=""
                className="w-full object-cover h-[250px] group-hover:scale-125 transition-a"
              />
              <div className="absolute w-full h-full flex-center-center gap-3 bg-primary/50 top-0 left-0 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-a">
                <p className="text-center text-white">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
      <div className="pt-10 bg-primary">
        <Footer />
      </div>
    </>
  );
};

export default Sport;
