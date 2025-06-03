import { 
  Hero, 
  About, 
  Skills, 
  Projects, 
  Experience, 
  Blog, 
  Contact 
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blog />
      <Contact />
    </>
  );
}
