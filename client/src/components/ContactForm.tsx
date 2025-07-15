import React, { useState, useEffect } from 'react';

// ContactFormModal Component
const ContactFormModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Use useEffect to trigger the open animation when the modal is mounted
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Delay calling onClose to allow the exit animation to complete
    setTimeout(onClose, 300); // Match this duration with your CSS transition
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-2xl flex max-w-4xl w-full mx-4 sm:mx-8 md:mx-12 lg:mx-16 transform transition-transform duration-300 ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}
      >
        {/* Left Half: Image */}
        <div className="hidden md:flex w-1/2 bg-gray-100 rounded-l-lg overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" // High-quality tech image from Unsplash
            alt="Technology background"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x800/E0E0E0/333333?text=Tech+Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Right Half: Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold transition-colors duration-200"
            aria-label="Close"
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <form className="space-y-4 overflow-y-auto max-h-[calc(100vh-10rem)] pr-2"> {/* Added max-h and overflow for scrollable form */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="phoneCountry" className="block text-sm font-medium text-gray-700">
                Phone number<span className="text-red-500">*</span>
              </label>
              <div className="mt-1 flex space-x-2">
                <select
                  id="phoneCountry"
                  name="phoneCountry"
                  className="block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  defaultValue="Pakistan" // Set default value
                  required
                >
                  <option value="Pakistan">Pakistan (پاکستان)</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  {/* Add more countries as needed */}
                </select>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="+92"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                Budget<span className="text-red-500">*</span>
              </label>
              <select
                id="budget"
                name="budget"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              >
                <option value="">Your Budget</option>
                <option value="<5k">Less than $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value=">25k">More than $25,000</option>
              </select>
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="companyDomain" className="block text-sm font-medium text-gray-700">
                Company domain / URL
              </label>
              <input
                type="url"
                id="companyDomain"
                name="companyDomain"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="https://"
              />
            </div>

            <div>
              <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                Region<span className="text-red-500">*</span>
              </label>
              <select
                id="region"
                name="region"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              >
                <option value="">Please Select</option>
                <option value="North America">North America</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="South America">South America</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Services you're looking for<span className="text-red-500">*</span>
              </label>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input id="remoteIT" name="services" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  <label htmlFor="remoteIT" className="ml-2 block text-sm text-gray-900">
                    Remote IT Resources
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="customSoftware" name="services" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  <label htmlFor="customSoftware" className="ml-2 block text-sm text-gray-900">
                    Custom Software Development
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="webDevelopment" name="services" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  <label htmlFor="webDevelopment" className="ml-2 block text-sm text-gray-900">
                    Web Development
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="mobileApp" name="services" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  <label htmlFor="mobileApp" className="ml-2 block text-sm text-gray-900">
                    Mobile App Development
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="arVr" name="services" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  <label htmlFor="arVr" className="ml-2 block text-sm text-gray-900">
                    AR/VR
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="gaming" name="services" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  <label htmlFor="gaming" className="ml-2 block text-sm text-gray-900">
                    Gaming
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="cyberSecurity" name="services" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  <label htmlFor="cyberSecurity" className="ml-2 block text-sm text-gray-900">
                    Cyber Security
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="otherIT" name="services" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  <label htmlFor="otherIT" className="ml-2 block text-sm text-gray-900">
                    Other IT Services
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700">
                Project Details<span className="text-red-500">*</span>
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="jobRole" className="block text-sm font-medium text-gray-700">
                I am looking for a job or a role in Devinc
              </label>
              <select
                id="jobRole"
                name="jobRole"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Please Select</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* reCAPTCHA placeholder */}
            <div className="flex items-center space-x-2">
              <div className="border border-gray-300 rounded-md p-2 flex items-center justify-center bg-gray-50">
                <p className="text-sm text-gray-600">protected by reCAPTCHA</p>
                <a href="#" className="text-blue-600 text-xs ml-1">Privacy</a>
                <span className="text-gray-600 text-xs mx-0.5">-</span>
                <a href="#" className="text-blue-600 text-xs">Terms</a>
              </div>
              <img
                src="https://placehold.co/60x60/E0E0E0/333333?text=reCAPTCHA"
                alt="reCAPTCHA icon"
                className="w-16 h-16"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal;
