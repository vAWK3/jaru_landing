import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Tabs from './components/Services/Services';
import Mentor from './components/Mentor/Mentor';
import Students from './components/Students/Students';
import Newsletter from './components/Newsletter/Newsletter';
import About from './about/page';

export default function Home() {
  return (
    <main>
      <Banner />
      {/* <Companies /> */}
      <About />
      <Tabs />
      {/* <Mentor /> */}
      {/* <Students /> */}
      {/* <Newsletter /> */}
    </main>
  )
}
