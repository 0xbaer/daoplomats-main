import DAOIt from "@/components/layout/home/daoIt/DAOIt";
import About from "@/components/layout/home/about/About";
import Footer from "@/components/layout/home/footer/Footer";
import Form from "@/components/layout/home/connectForm/Form";
import HomeHeader from "@/components/layout/home/header/Header";
import Services from "@/components/layout/home/services/Services";
import OurGovernanceFeed from "@/components/layout/home/governance/OurGovernanceFeed";
import Testimonials from "@/components/layout/home/testimonial/Testimonials";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <DAOIt />
        <About />
        <OurGovernanceFeed />
        <Services />
        <Testimonials />
        <Form />
      </main>
      <Footer />
    </>
  );
}
