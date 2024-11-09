import Banner from './components/Banner/Banner';
import Tabs from './components/Services/Services';
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
