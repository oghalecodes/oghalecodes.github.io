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

export default function Home() {

	return (
		<>
			<Layout headerStyle={2} footerStyle={2}>
				<Hero />
				<Static />
				<Service />
				<Projects />
				<Resume />
				<Skills />
				<Brands />
				<Testimonials />
				<Blog />
				<Contact />
			</Layout>
		</>
	)
}