import About from "@/components/layout/home/about/About";
import Footer from "@/components/layout/home/footer/Footer";
import Form from "@/components/layout/home/connectForm/Form";
import HomeHeader from "@/components/layout/home/header/Header";
import Services from "@/components/layout/home/services/Services";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <About />
        <Services />
        <Form />
      </main>
      <Footer />
    </>
  );
}
