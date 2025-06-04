import { 
  Hero, 
  About, 
  Skills, 
  Projects, 
  Experience, 
  Blog, 
  Contact 
} from '@/components/sections';
import Static from '@/components/sections/Static';

export default function Home() {
  return (
    <>
      <Hero />
      <Static />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blog />
      <Contact />
    </>
  );
}
