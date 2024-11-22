import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../components/AuthContext/AuthContext';
import { useContext, useState } from 'react';
import { BsEyeSlash } from 'react-icons/bs';
import { LiaEyeSolid } from 'react-icons/lia';

const Regster = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { creactNewUsers } = useContext(AuthProvider);
  const [errorMess, setErrorMess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const userName = e.target.username.value;
    const photo = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conformPassword = e.target.confrompassword.value;
    const terms = e.target.terms.checked;
    console.log(userName, photo, email, password, conformPassword, terms);
    // Reset error message
    setErrorMess('');

    // Validation
    if (!terms) {
      setErrorMess('Please Accept Our terms and Conditions');
    }
    if (password.length < 6) {
      setErrorMess('Password must be at least 6 characters long.');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setErrorMess('Password must include at least one uppercase letter.');
      return;
    }

    if (!/[a-z]/.test(password)) {
      setErrorMess('Password must include at least one lowercase letter.');
      return;
    }

    if (password !== conformPassword) {
      setErrorMess('Passwords do not match.');
      return;
    }

    // Create New User
    creactNewUsers(email, password)
      .then(result => {
        console.log(result.user);
        navigate('/');
      })
      .catch(error => {
        console.error('Registration Error:', error.message);
        setErrorMess(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(showPassword => !showPassword);
  };
  const ContogglePasswordVisibility = () => {
    setShowPasswords(showPasswords => !showPasswords);
  };
  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              // onChange={handleChange}
              placeholder="Enter your username"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          {/* Photo URL */}
          <div className="mb-6">
            <label
              htmlFor="photoUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              type="url"
              name="photoUrl"
              // onChange={handleChange}
              placeholder="Enter your photo URL"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              // onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Password */}

          <div>
            <label htmlFor="password" className="mb-4">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="my-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter password"
              />

              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 end-0 grid place-content-center px-4"
              >
                {showPassword ? <LiaEyeSolid /> : <BsEyeSlash />}
              </span>
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="mb-4">
              Confrom Password
            </label>

            <div className="relative">
              <input
                type={showPasswords ? 'text' : 'password'}
                name="confrompassword"
                placeholder="Confirm your password"
                className="my-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />

              <span
                onClick={ContogglePasswordVisibility}
                className="absolute inset-y-0 end-0 grid place-content-center px-4"
              >
                {showPasswords ? <LiaEyeSolid /> : <BsEyeSlash />}
              </span>
            </div>
          </div>

          {/* Error Message */}
          {errorMess && (
            <p className="text-sm text-red-500 mb-4">{errorMess}</p>
          )}

          <div className=" my-4">
            <label className="flex gap-4 cursor-pointer">
              <input
                type="checkbox"
                name="terms"
                className="checkbox text-sm"
              />
              <span className="label-text tex-xl">Accept Our Term</span>
            </label>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 pt-2">
          Already a member?
          <Link className="underline text-red-600" to="/travel/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Regster;
