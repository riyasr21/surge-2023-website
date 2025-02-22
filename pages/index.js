import "../styles/routes/Home.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import Stats from "../components/Stats/Stats";
import Sponsors from "../components/Sponsors/Sponsors";
import AfterMovie from "../components/AfterMovie/AfterMovie";
function Home() {
  return (
    <main>
      <section className="HeroSection">
        <div className="HeroSection__overlay"></div>
        <div className="HeroSection__content">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="HeroSection__content--heading"
          >
            We are the home of <span>Champions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="HeroSection__content--paragraph"
          >
            Whole-heartedly focused on the growing sports ambition on campus,
            everyone from athletes to fans will be a part of this 3-day fiesta
            of fulfilled dreams in the form of tournaments, one-on-one battles,
            and exertion both physical and mental, as records are formed and
            broken.
          </motion.p>
        </div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="HeroSection__dates"
        >
          <p className="HeroSection__dates--date">3 4 5 November&apos;23</p>
          <p className="HeroSection__dates--scroll">Scroll for more</p>
          <Image
            src="/Images/Icons/chevronsDown.svg"
            alt="Scroll Down"
            width={30}
            height={30}
          />
        </motion.div>
      </section>
      <section className="AftermovieSection">
        <AfterMovie />
      </section>
      <section className="StatsSection">
        <Stats />
      </section>
      <section className="SponsorsSection">
        <Sponsors />
      </section>
    </main>
  );
}

export default Home;
