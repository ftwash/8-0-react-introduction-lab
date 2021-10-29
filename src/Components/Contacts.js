import ContactUserCard from "./Contacts";

const Contacts = () => {
  return (
    <div className="contacts">
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
};

//linked file
//created a function that returns a div with a class of "contacts"
//inserted contactUserCards inside of the div

export default Contacts;
