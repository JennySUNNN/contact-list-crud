import "../App.css";
import { ImCross } from "react-icons/im";
import { Form, Link, useLoaderData, redirect } from "react-router-dom";
import { editContact } from "../service/contacts";

export async function editAction({ request, params }) {
  const formData = await request.formData(); //
  const updates = Object.fromEntries(formData);
  await editContact(params.id, updates);
  return redirect("/");
}

const EditContactForm = () => {
  const { contact } = useLoaderData();

  return (
    <div>
      <div className="px-28 pt-14 flex justify-between items-center">
        <h1 className="font-bold text-[30px] text-center">Edit Conatct</h1>
        <Link to="/">
          <ImCross size={"20px"} />
        </Link>
      </div>

      <Form
        method="post"
        className="mx-28 my-14"
      >
        <div className="sm:grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={contact.firstName}
              required
            />
          </div>
          <div>
            <label
              for="lastName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={contact.lastName}
              required
            />
          </div>
          <div>
            <label
              for="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={contact.email}
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
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={contact.email}
              required
            />
          </div>
          <div className="col-span-2">
            <label
              for="address"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={contact.address}
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
      </Form>
    </div>
  );
};

export default EditContactForm;
