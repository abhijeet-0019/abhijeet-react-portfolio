import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Abhijeet Singh Rajpurohit",
    major: 'Computer Science Engineering',
    location: "MBM University, Jodhpur, Rajasthan",
    tagline: "I'm a Developer",
    subtagline: "JS | React | Next",
    email: "abhijeet.govind.singh@gmail.com",
    contactno: "+918209868716",
    availability: "Open to Work (Internship)",
    skills: "React.js | JavaScript | Next.js (begineer) | Git" ,
    brand:
      "Passionate and dedicated pre-final year college student seeking a challenging internship opportunity in field of web-development.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
