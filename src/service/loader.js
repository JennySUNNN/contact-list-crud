import { getContacts, getContactById } from "../service/contacts";

export async function allContactsLoader() {
  const contacts = await getContacts();
  return { contacts };
}

export async function contactLoader({ params }) {
  const contact = await getContactById(params.id);
  return { contact };
}
