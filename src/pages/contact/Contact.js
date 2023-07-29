import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import ContactInfo from "../../components/ContactInfo";

const Contact = ({ name, email, location, contactno }) => {
  return (
    <section className="contact">
      <PageHeader title="Contact" description="Get in touch" />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12 col-lg-4">
          </div>
          <div className="col-12 col-lg-4">
            <ContactInfo name={name} location={location} email={email} contactno={contactno}/>
          </div>
          <div className="col-12 col-lg-4">
          </div>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Contact;
