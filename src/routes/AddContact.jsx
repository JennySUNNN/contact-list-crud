import "../App.css";

import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <div>
      <div className="px-28 pt-14 flex justify-between items-center">
        <h1 className="font-bold text-[30px] text-center">
          Create New Contact
        </h1>

        <Link to="/">
          <ImCross size={"20px"} />
        </Link>
      </div>

      <form className="mx-28 my-14">
        <div className="sm:grid gap-6 mb-6 md:grid-cols-4">
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              for="phone_num"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone_num"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              for="address1"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Address Line 1
            </label>
            <input
              type="text"
              id="address1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="col-span-2">
            {/* Address Line 2 is optional input */}
            <label
              for="address2"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Address Line 2 (Optional)
            </label>
            <input
              type="text"
              id="address2"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div>
            <label
              for="city"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              for="province"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Province
            </label>
            <input
              type="text"
              id="province"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              for="postal_code"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Postal Code
            </label>
            <input
              type="text"
              id="postal_code"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              for="country"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-80 px-5 py-2.5 mt-8 text-center"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
