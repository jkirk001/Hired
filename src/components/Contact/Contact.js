import "./Contact.css";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";

const Contact = (props) => {
  return (
    <section className="Contact">
      <ContactInfo />
      <ContactForm />
    </section>
  );
};

export default Contact;
