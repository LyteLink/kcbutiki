/* eslint-disable react/no-unescaped-entities */
import Gallery from "@/components/home/Gallery";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import AdminSlider from "@/components/home/AdminSlider";
import Footer from "@/components/home/Footer";

const Administration = () => {
  return (
    <div className="w-full mt-10">
      <div className="py-10">
        <TestimonialSlider />
      </div>
      <div className="py-10">
        <AdminSlider />
      </div>
      <section className="pt-12 pb-12 bg-white max-w-7xl mx-auto px-4">
        <div className="mt-20 pt-6">
          <hr className="hr3" />
          <h1 className="text-2xl my-2 font-semibold text-center">
            Word from headteacher
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center mt-4">
            <div className="md:col-span-1">
              <img
                src="/images/headteacher1.jpg"
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
                  dignissimos adipisci, perspiciatis, quo minima veritatis
                  deleniti sequi iusto reiciendis! Obcaecati minus repudiandae
                  doloremque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pt-12 pb-12 bg-gray-100 max-w-7xl mx-auto px-4">
        <div className="mt-20">
          <hr className="hr3" />
          <h1 className="text-2xl my-2 font-semibold text-center">
            PTA Report
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">PTA Annual Report</h2>
              <p className="text-muted mb-2">
                Date: July 1, 2023
              </p>
              <p className="text-muted mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, distinctio. Doloremque numquam ullam est. Fugit
                veniam architecto deleniti, neque sequi saepe tempore
                reprehenderit dolorem perferendis, vel quis expedita, totam
                adipisci?
              </p>
              <div className="flex items-center space-x-4">
                <button className="bg-primary text-white py-2 px-4 rounded-lg">
                  Download Report
                </button>
                <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h1 className="text-2xl my-2 font-semibold text-center">
            AGM Report
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Annual General Meeting Report</h2>
              <p className="text-muted mb-2">
                Date: June 15, 2023
              </p>
              <p className="text-muted mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, distinctio. Doloremque numquam ullam est. Fugit
                veniam architecto deleniti, neque sequi saepe tempore
                reprehenderit dolorem perferendis, vel quis expedita, totam
                adipisci?
              </p>
              <div className="flex items-center space-x-4">
                <button className="bg-primary text-white py-2 px-4 rounded-lg">
                  Download Report
                </button>
                <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg">
                  Share
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">KICOBA</h2>
              <p className="text-muted mb-2">
                Date: May 30, 2023
              </p>
              <p className="text-muted mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, distinctio. Doloremque numquam ullam est. Fugit
                veniam architecto deleniti, neque sequi saepe tempore
                reprehenderit dolorem perferendis, vel quis expedita, totam
                adipisci?
              </p>
              <div className="flex items-center space-x-4">
                <button className="bg-primary text-white py-2 px-4 rounded-lg">
                  Download Report
                </button>
                <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-10 bg-primary">
        <Footer />
      </div>
    </div>
  );
};

export default Administration;
