import { useContext, useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { AuthProvider } from '../../components/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const Banneer = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthProvider);
  const [book, setBooking] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const tours = [
    'Luxury Beach Villas',
    'Scuba Diving Adventures',
    'Honeymoon Packages',
    'Family Resorts',
    'Budget-Friendly Trips',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = tour => {
    setSelectedTour(tour);
    setIsOpen(false);
  };

  const handleStartDateChange = e => {
    setStartDate(e.target.value);
  };

  // Handle changes for end date
  const handleEndDateChange = e => {
    setEndDate(e.target.value);
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };
  const handleBooking = () => {
    if (user && user?.email) {
      setBooking(true);
    } else {
      navigate('/travel/login');
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto relative">
      {/* Banner Image */}
      <div className="h-[550px]">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?cs=srgb&dl=pexels-asadphoto-1268855.jpg&fm=jpg"
          alt="Maldives Vommuli"
        />
      </div>

      {/* Content Layout */}
      <div className="absolute top-20 left-10 right-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Text Content */}
        <div className="text-white space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold">
            Toure Travel & Adventure Camping
          </h2>
          <p className="text-lg font-medium">
            Nestled in the heart of the Maldives, Vommuli Island is a sanctuary
            of pristine beauty and serenity. Surrounded by turquoise lagoons,
            lush greenery, and a tranquil river winding through the island.
          </p>
          <button
            onClick={handleBooking}
            className="btn bg-warning text-center mt-6 flex items-center gap-2 hover:bg-yellow-500"
          >
            Booking <FaLongArrowAltRight />
          </button>
        </div>

        {book ? (
          <div className="flex justify-center rounded-md">
            <div className="card card-compact bg-base-100 w-[400px] shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Book Your Trip
              </h2>

              {/* Origin */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Origin
                </label>
                <input
                  type="text"
                  placeholder="Enter your origin"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              {/* Maldives Tour Dropdown */}
              <div className="relative inline-block text-left w-full mb-4">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-700"
                >
                  Maldives Tour selection
                </label>
                <button
                  onClick={toggleDropdown}
                  className="w-full flex justify-between items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {selectedTour || 'Select a Maldives Tour'}
                  <svg
                    className="w-5 h-5 ml-2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute z-10 mt-2 w-full rounded-lg bg-white shadow-lg">
                    <ul className="py-2">
                      {tours.map((tour, index) => (
                        <li
                          key={index}
                          onClick={() => handleSelect(tour)}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700"
                        >
                          {tour}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                {/* Start Date */}
                <div className="mb-4">
                  <label
                    htmlFor="startDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={handleStartDateChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                {/* End Date */}
                <div className="mb-4">
                  <label
                    htmlFor="endDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={handleEndDateChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Book Now
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Banneer;
