import "./App.css";
import { Link } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";
import ContactList from "./componenets/ContactList";

function App() {
  return (
    <div className="App">
      {/* Header Section */}

      <div className="flex items-center justify-between py-14 px-28">
        <h1 className="font-bold text-[40px]">Contacts</h1>
        {/* Add New Contact Button */}
        <Link
          to={"/new"}
          className="flex items-center gap-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
        >
          Add Contact
          <IoMdPersonAdd size={"18px"} />
        </Link>
      </div>

      {/* Contact List Section */}
      <ContactList />
      
    </div>
  );
}

export default App;
