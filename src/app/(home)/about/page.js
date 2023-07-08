/* eslint-disable react/no-unescaped-entities */
import Gallery from "@/components/home/Gallery";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import Footer from "@/components/home/Footer";
import StrategicFocus from "@/components/home/StrategicFocus";
import SchoolLogo from "@/components/home/SchoolLogo";
import AlternateTimeline from "@/components/home/AlternateTimeline";

const About = () => {
  return (
    <div className="w-full mt-10">
      <div
        className="py-36 flex-center-center !bg-cover !bg-no-repeat"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/npl2.jpg)",
        }}
      >
        <div className="max-w-4xl md:text-6xl mx-auto px-5 text-center">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
          <h2 className="text-xl text-white mt-2">
            The leading boys ollege in prooducing mUlti-talented men around the
            country.
          </h2>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center py-10">
        <div>
          <p className="text-muted text-2xl">
            <strong>School Status: </strong>Government O and A'Level Boys'
            Boarding School established in 1959
          </p>
        </div>
      </div>

      <div className="py-16">
        <StrategicFocus />
      </div>

      <div className="py-16 bg-green-100/30">
        <SchoolLogo />
      </div>

      <div className="py-16">
        <AlternateTimeline />
      </div>

      <div className="py-10">
        <h1 className="text-center text-4xl md:text-6xl font-bold mb-10 my-4">
          At the hills
        </h1>
        <Gallery />
      </div>
      <div className="py-10">
        <TestimonialSlider />
      </div>
      <div className="pt-10 bg-primary">
        <Footer />
      </div>
    </div>
  );
};

export default About;
