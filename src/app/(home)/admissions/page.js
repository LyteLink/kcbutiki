/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/home/Footer";

const Admission = () => {
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
          <h1 className="text-4xl font-bold text-white">Admissions</h1>
          <h2 className="text-xl text-white mt-2">
            The leading boys College in producing multi-talented men around the
            country.
          </h2>
        </div>
      </div>

      <section className="pt-12 pb-12 bg-white max-w-7xl mx-auto px-4">
        <div className="mt-20">
          <hr className="hr3" />
          <h1 className="text-2xl my-2 font-semibold text-center">
            Admissions
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Steps to Apply</h2>
              <ol className="list-decimal text-gray-700 pl-6 space-y-2">
                <li>Step 1: Lorem ipsum dolor sit amet.</li>
                <li>Step 2: Consectetur adipiscing elit.</li>
                <li>Step 3: Sed do eiusmod tempor incididunt.</li>
                <li>Step 4: Ut labore et dolore magna aliqua.</li>
                <li>Step 5: Enim ad minim veniam, quis nostrud.</li>
              </ol>
              <button className="bg-primary text-white py-2 px-4 rounded-lg mt-4">
                Apply Now
              </button>
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Fees Structure</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="border border-gray-300 p-2">Year</th>
                    <th className="border border-gray-300 p-2">Term</th>
                    <th className="border border-gray-300 p-2">Form 1</th>
                    <th className="border border-gray-300 p-2">Form 2</th>
                    <th className="border border-gray-300 p-2">Form 3</th>
                    <th className="border border-gray-300 p-2">Form 4</th>
                    <th className="border border-gray-300 p-2">Form 5</th>
                    <th className="border border-gray-300 p-2">Form 6</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">2023</td>
                    <td className="border border-gray-300 p-2">Term 1</td>
                    <td className="border border-gray-300 p-2">$1000</td>
                    <td className="border border-gray-300 p-2">$1200</td>
                    <td className="border border-gray-300 p-2">$1400</td>
                    <td className="border border-gray-300 p-2">$1600</td>
                    <td className="border border-gray-300 p-2">$1800</td>
                    <td className="border border-gray-300 p-2">$2000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">2023</td>
                    <td className="border border-gray-300 p-2">Term 2</td>
                    <td className="border border-gray-300 p-2">$1000</td>
                    <td className="border border-gray-300 p-2">$1200</td>
                    <td className="border border-gray-300 p-2">$1400</td>
                    <td className="border border-gray-300 p-2">$1600</td>
                    <td className="border border-gray-300 p-2">$1800</td>
                    <td className="border border-gray-300 p-2">$2000</td>
                  </tr>
                  {/*Add more rows for other terms and years */}
                </tbody>
              </table>
              <button className="bg-primary text-white py-2 px-4 rounded-lg mt-4">
                Download Document
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <hr className="hr3" />
          <h1 className="text-2xl my-2 font-semibold text-center">
            Basic Requirements for Form 1 Students
          </h1>
          <ul className="list-disc text-gray-700 pl-6 space-y-2">
            <li>Copy of birth certificate</li>
            <li>Passport-sized photographs</li>
            <li>Previous school reports</li>
            <li>Medical examination records</li>
            <li>Proof of address</li>
          </ul>
        </div>
      </section>

      <div className="pt-10 bg-primary">
        <Footer />
      </div>
    </div>
  );
};

export default Admission;
