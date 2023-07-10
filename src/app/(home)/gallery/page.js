import Footer from "@/components/home/Footer";
import React from "react";

const galleryData = [
  {
    imageUrl: "/images/gallery/admin_status.jpg",
    description: "Description for Image 1",
  },
  {
    imageUrl: "/images/gallery/aggrey.jpg",
    description: "Description for Image 2",
  },
  {
    imageUrl: "/images/gallery/agriculture.jpg",
    description: "Description for Image 3",
  },
    {
    imageUrl: "/images/gallery/sports/fufa_best.jpg",
    description: "Description for Image 1",
  },
  {
    imageUrl: "/images/gallery/sports/kcb_fufa_team2.jpg",
    description: "Description for Image 2",
  },
  {
    imageUrl: "/images/gallery/sports/kcb_supporters1.jpg",
    description: "Description for Image 3",
  },
    {
    imageUrl: "/images/gallery/alevel.jpg",
    description: "Description for Image 1",
  },
  {
    imageUrl: "/images/gallery/bios_prac.jpg",
    description: "Description for Image 2",
  },
  {
    imageUrl: "/images/gallery/cohen.jpg",
    description: "Description for Image 3",
  },
    {
    imageUrl: "/images/gallery/english.jpg",
    description: "Description for Image 1",
  },
  {
    imageUrl: "/images/gallery/leaders.jpg",
    description: "Description for Image 2",
  },
  {
    imageUrl: "/images/gallery/mulondo.jpg",
    description: "Description for Image 3",
  },
    {
    imageUrl: "/images/gallery/nile.jpg",
    description: "Description for Image 1",
  },
  {
    imageUrl: "/images/gallery/npl.jpg",
    description: "Description for Image 2",
  },
  {
    imageUrl: "/images/gallery/prac.jpg",
    description: "Description for Image 3",
  },
    {
    imageUrl: "/images/gallery/prac1.jpg",
    description: "Description for Image 1",
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
  },
    {
    imageUrl: "/images/gallery/staff1.jpg",
    description: "Description for Image 1",
  },
  {
    imageUrl: "/images/gallery/staff2.jpg",
    description: "Description for Image 2",
  },
  {
    imageUrl: "/images/gallery/students.jpg",
    description: "Description for Image 3",
  },
    {
    imageUrl: "/images/gallery/ww.jpg",
    description: "Description for Image 1",
  },
  {
    imageUrl: "/images/gallery/tank.jpg",
    description: "Description for Image 2",
  },
  {
    imageUrl: "/images/gallery/students1.jpg",
    description: "Description for Image 3",
  }
  // Add more objects for additional images
];

const Gallery = () => {
  return (
    <>
      <div className="pt-36 pb-12 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">BUTIKI GALLERY</h1>
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

      <div className="pt-10 bg-primary">
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
