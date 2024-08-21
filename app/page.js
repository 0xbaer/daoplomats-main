import DAOIt from "@/components/layout/home/daoIt/DAOIt";
import About from "@/components/layout/home/about/About";
import Footer from "@/components/layout/home/footer/Footer";
import Form from "@/components/layout/home/connectForm/Form";
import HomeHeader from "@/components/layout/home/header/Header";
import Services from "@/components/layout/home/services/Services";
import Testimonials from "@/components/layout/home/testimonial/Testimonials";
import OurGovernanceFeed from "@/components/layout/home/governance/OurGovernanceFeed";
import Decentralization from "@/components/layout/home/decentralization/Decentralization";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <Decentralization />
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
