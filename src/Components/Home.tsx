import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import {
  FaClock,
  FaCheckCircle,
  FaBriefcase,
  FaCopy,
  FaFileAlt,
  FaDownload,
} from "react-icons/fa";

export default function HomeTab() {
  const navigate = useNavigate();

  const goToGenerator = () => {
    navigate("/cvgenerator");
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            BUILD YOUR PROFESSIONAL CV/RESUME
          </h2>
          <h3 className="text-lg md:text-2xl mt-3 font-medium">
            IN JUST FEW MINUTES
          </h3>
          <p className="mt-5 text-sm md:text-base flex flex-wrap justify-center gap-4">
            <span className="flex items-center gap-2">
              <FaClock /> Time saving
            </span>
            <span className="flex items-center gap-2">
              <FaCheckCircle /> Easy to Use
            </span>
            <span className="flex items-center gap-2">
              <FaBriefcase /> Professional
            </span>
          </p>
          <Button
            type="primary"
            size="large"
            onClick={goToGenerator}
            className="mt-8 font-semibold rounded-xl shadow-md hover:!bg-indigo-700 transition-all duration-300"
          >
            Get Started!
          </Button>
        </div>
      </div>

      {/* Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Create your perfect Resume in just a few easy steps
          </h2>
          <p className="text-gray-600 mt-3">
            Create your job-worthy Resume without making any extra efforts that
          </p>
          <p className="text-gray-600">
            gets you{" "}
            <span className="font-semibold text-indigo-600">HIRED</span> faster
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-indigo-600 text-4xl mb-4 flex justify-center">
                <FaCopy />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Choose a template
              </h3>
              <p className="text-gray-600 mt-2">
                Select a template of your choice from our collection.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-indigo-600 text-4xl mb-4 flex justify-center">
                <FaFileAlt />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Fill your Information
              </h3>
              <p className="text-gray-600 mt-2">
                Provide your details to automatically build your Resume.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-indigo-600 text-4xl mb-4 flex justify-center">
                <FaDownload />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Quick Download
              </h3>
              <p className="text-gray-600 mt-2">
                Download instantly once your CV is generated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
