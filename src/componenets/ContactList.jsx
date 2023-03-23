import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getContacts } from "../service/contacts";
import Delete from "./Delete";

const ContactList = () => {
  //State to manage any update on the list of contacts
  const [contacts, setContacts] = useState(getContacts());

  useEffect(() => {
    if (contacts) {
      setContacts(contacts);
    }
  }, []);

  return (
    <div className="mx-28 shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-md text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">First Name</th>
            <th className="px-6 py-3">Last Name</th>
            <th className="px-6 py-3">Phone Number</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Address</th>
            <th className="px-6 py-3"> </th>
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
              <td className="px-6 py-4">{contact.address}</td>
              <td>
                <Link to={`/${contact.id}/edit`}>
                  <AiFillEdit size={"20px"} />
                </Link>
              </td>
              <td>
                <Delete
                  contacts={contacts}
                  setContacts={setContacts}
                  id={contact.id}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
