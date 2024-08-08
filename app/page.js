import About from "@/components/layout/home/about/About";
import Form from "@/components/layout/home/connectForm/Form";
import Footer from "@/components/layout/home/footer/Footer";
import HomeHeader from "@/components/layout/home/header/Header";
import Services from "@/components/layout/home/services/Services";
import OurValues from "@/components/layout/home/values/OurValues";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <About />
      <Services />
      <Form />

      <Footer />
    </>
  );
}
