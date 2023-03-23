import { AiFillDelete } from "react-icons/ai";
import { deleteContact } from "../service/contacts";

const Delete = ({ contacts, setContacts, id }) => {
  const handleSubmit = (id) => {
    //delete the id(selected) contact from contacts list
    const newList = deleteContact(contacts, id);
    setContacts(newList); //update the contacts list
  };

  return (
    <button
      type="submit"
      onClick={() => handleSubmit(id)}
    >
      <AiFillDelete size={"20px"} />
    </button>
  );
};

export default Delete;
