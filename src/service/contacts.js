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
  contacts.push(newContact);
  localStorage["contacts"] = JSON.stringify(contacts);
};

// Delete: filter out the aim to be deleted contact by its id
export const deleteContact = (id) => {
  let contacts = getContacts();
  contacts = contacts.filter((contact) => contact.id !== id);
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

  // Delete old contact obj:
  contacts = contacts.filter((contact) => contact.id !== id);
  // Add the updated contact obj to contacts array
  contacts.push(updatedContact);
  localStorage["contacts"] = JSON.stringify(contacts);
};