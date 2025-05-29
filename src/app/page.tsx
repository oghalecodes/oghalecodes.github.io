import Layout from "@/components/layout/Layout"
import Brands from "@/components/sections/Brands"
import Resume from "@/components/sections/Resume"
import Testimonials from "@/components/sections/Testimonials"
import Hero from "@/components/sections/Home"
import Projects from "@/components/sections/Projects"
import Service from "@/components/sections/Service"
import Static from "@/components/sections/Static"
import Contact from "@/components/sections/Contact"
import Blog from "@/components/sections/Blog"
import Skills from "@/components/sections/Skills"
import Coporation from "@/components/sections/Coporation"
import Experience from "@/components/sections/Experience"
import Education from "@/components/sections/Education"

export default function Home() {
	return (
		<>
			<Layout headerStyle={2} footerStyle={2}>
				<Hero />
				<Static />
				<Service />
				<Experience />
				<Education />
				{/* <Projects /> */}
				<Skills />
				<Blog />
				<Contact />
			</Layout>
		</>
	)
}