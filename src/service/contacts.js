// Contact information is saved as object
// contact = {
//   id: 1,
//   firstName: "Jenny",
//   lastName: "Sun",
//   phone: "613-456-7890",
//   email: "jianijennysun@gmail.com",
//   address: "** Street, Toronto, Canada",
// };

// Below are functions that mock the CRUD operations:
// Using web storage API - "localStorage" to store and retrieve the contacts data

import { v4 as uuidv4 } from "uuid"; //generate unique id for each contact data

// Get all contacts information
export const getContacts = () => {
  //if no 'contacts' item in localStorage, initial it with an empty array.
  if (!localStorage["contacts"]) {
    localStorage["contacts"] = "[]";
  }
  let contacts = localStorage["contacts"];
  contacts = JSON.parse(contacts);
  return contacts;
};

// Create: Add new contact object to contacts array
export const addContact = (newContact) => {
  const contacts = getContacts();
  const idNewContact = { id: uuidv4(), ...newContact }; //add a unique id to new contact
  contacts.push(idNewContact);
  localStorage["contacts"] = JSON.stringify(contacts);
};

// Find the contact obj by id
export const getContactById = (id) => {
  const contacts = getContacts();
  const contact = contacts.find((contact) => contact.id === id);
  return contact;
};

// Edit contact with updated contact information
export const editContact = (id, updatedContact) => {
  let contacts = getContacts();
  let contact = contacts.find((contact) => contact.id === id);
  if (!contact) throw new Error("No contact found!");

  // Delete old contact obj:
  contacts = contacts.filter((contact) => contact.id !== id);

  Object.assign(contact, updatedContact);

  // Add the updated contact obj to contacts array
  contacts.unshift(contact);
  localStorage["contacts"] = JSON.stringify(contacts);
};

// Delete: filter out the aim to be deleted contact by its id
export const deleteContact = (contacts,id) => {
  contacts = contacts.filter((contact) => contact.id !== id);
  localStorage["contacts"] = JSON.stringify(contacts);
  return contacts;
};
