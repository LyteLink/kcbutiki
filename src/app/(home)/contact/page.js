import ContactForm from "@/components/home/ContactForm";
import Footer from "@/components/home/Footer";
import LocationDetails from "@/components/home/LocationDetails";
import Map from "@/components/home/Map";

const Contact = () => {
  return (
    <div className="bg-white">
      <Map />
      <div className="my-10 flex-align-center flex-wrap gap-10 max-w-7xl mx-auto px-4">
        <div className="flex-1 basis-[25rem]">
          <LocationDetails />
        </div>
        <div className="flex-1 basis-[25rem]">
          <ContactForm />
        </div>
      </div>
      <div className="pt-10 bg-primary">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
