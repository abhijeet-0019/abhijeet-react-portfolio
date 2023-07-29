import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";

const About = ({ name, location, brand, email, availability, major, skills }) => {
  return (
    <section className="about">
      <PageHeader title="About Me" description="Let me introduce myself" />
      <AboutMe major={major} name={name} location={location} brand={brand} email={email} availability={availability} skills={skills}/>
    </section>
  );
};

export default About;
