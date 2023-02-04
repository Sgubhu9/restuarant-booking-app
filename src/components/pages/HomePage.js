import Heading from "../sections/headingPages/Heading";
import Specials from "../sections/headingPages/Specials.js";
import Testimonials from "../sections/headingPages/Testimonials";
import About from "../sections/headingPages/About";
export default function Homepage() {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}