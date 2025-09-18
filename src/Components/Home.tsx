import { useNavigate } from "react-router-dom";

export default function HomeTab() {
  const navigate = useNavigate();

  const goToGenerator = () => {
    navigate("/cvgenerator");
  };

  return (
    <div className="w-full">
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
              <i className="fas fa-clock"></i> Time saving
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-check-circle"></i> Easy to Use
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-briefcase"></i> Professional
            </span>
          </p>
          <button
            onClick={goToGenerator}
            className="mt-8 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300"
          >
            Get Started!
          </button>
        </div>
      </div>

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
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-indigo-600 text-4xl mb-4">
                <i className="fa-regular fa-copy"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Choose a template
              </h3>
              <p className="text-gray-600 mt-2">
                Select a template of your choice from our collection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-indigo-600 text-4xl mb-4">
                <i className="fa-regular fa-file-lines"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Fill your Information
              </h3>
              <p className="text-gray-600 mt-2">
                Provide your details to automatically build your Resume.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-indigo-600 text-4xl mb-4">
                <i className="fa-solid fa-download"></i>
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
