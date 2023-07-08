import AboutSection from "@/components/home/AboutSection";
import ImageSlider from "@/components/home/ImageSlider";
import axios from "axios";
import HistoryTimeline from "@/components/home/HistoryTimeline";
import Events from "@/components/home/Events";
import BlogPosts from "@/components/home/BlogPosts";
import Footer from "@/components/home/Footer";

// const getSlides = async () => {
//   const res = await axios.get("http://localhost:3000/api/slides");
//   return res.data;
// };

const Home = async () => {
  // const slides = await getSlides();
  const slides = [];

  return (
    <div className="w-full">
      <ImageSlider slides={slides} />
      <AboutSection />
      <div className="bg-green-100/20 py-20">
        <h1 className="text-center text-4xl md:text-6xl font-bold mb-10 my-4">
          College History
        </h1>
        <HistoryTimeline />
      </div>

      <div
        className="py-16 !bg-cover !bg-no-repeat !text-slate-100"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/timeline_bg.jpg')",
        }}
      >
        <Events />
      </div>
      <div className="py-16">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-10 my-4">
          Know What is Taking Place
        </h1>
        <BlogPosts />
      </div>

      <div className="pt-10 bg-primary">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
