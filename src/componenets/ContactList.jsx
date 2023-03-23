import { CgMoreO } from "react-icons/cg";

import { getContacts } from "../service/contacts";
import { useLoaderData, Link } from "react-router-dom";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

const ContactList = () => {
  const { contacts } = useLoaderData();

  return (
    <div>
      <div className="mx-28 shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-md text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">First Name</th>
              <th className="px-6 py-3">Last Name</th>
              <th className="px-6 py-3">Phone Number</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3"> </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">{contact.firstName}</td>
                <td className="px-6 py-4">{contact.lastName}</td>
                <td className="px-6 py-4">{contact.phone}</td>
                <td className="px-6 py-4">{contact.email}</td>
                <td>
                  <Link to={`/contacts/${contact.id}`}>
                    {/* To corresponding contact detail page (including ed
                   it & delete operation) */}
                    <CgMoreO size={"20px"} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
