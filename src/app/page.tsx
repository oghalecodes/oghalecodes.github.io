import { 
  Hero, 
  About, 
  Skills, 
  Projects, 
  Experience, 
  Blog, 
  Contact 
} from '@/components/sections';
import Coporation from '@/components/sections/Coporation';
import Service from '@/components/sections/Service';
import Static from '@/components/sections/Static';

export default function Home() {
  return (
    <>
      <Hero />
      <Static />
      <Service />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blog />
      <Contact />
    </>
  );
}
