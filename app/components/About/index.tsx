import AboutSection from "./section";


const About = () => {

  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">

        <AboutSection inverted={false} title={'Welcome to Jaru!'} message={"We’re a team of pet lovers dedicated to creating a space where pets feel safe, happy, and loved. Jaru was born out of a genuine love for animals and a desire to support pet owners in providing the best care for their furry friends."}


        />

        <AboutSection inverted={true} title={'Jaru services'} message={"Our services—like pet grooming, daycare, boarding, dog walking, and training—are designed to fit into your pet’s life with as little disruption as possible. We believe that every pet deserves attentive, personalized care, whether it’s a refreshing walk, a day of play, or a cozy place to rest while you’re away."}


        />

        <AboutSection inverted={false} title={'Jaru community'} message={"At Jaru, we see pets as family, and we’re here to build a community where pets and their people can connect and thrive. Join us, and let’s make this a home away from home for your beloved pets."}

        />


      </div>
    </section>
  );
};



export default About;
