import Image from 'next/image'
import Styles from '@/styles/index.module.css'
import AnimationWrapper from "@/components/AnimationWrapper";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Link from "next/link";

export default function Home() {
  return (
      <main>
        <div id="hero" className={`container ${Styles.HeroContainer}`}>
          <div className={`${Styles.heroInformation}`}>
          <div>
            <h1>Bennjmann<br/>Redman</h1>
            <p>Empowering the Future through Project Development</p>
          </div>
          <div>
            <button className="primary">Resume</button>
            <button><Link className="secondary" href={'#contact'}>Contact me</Link></button>
          </div>
        </div>
        <div className={Styles.blurredColour}>
          <div/>
          <div/>
        </div>
      </div>


    	<div id="about" className={`container ${Styles.introduction}`}>
    	  <AnimationWrapper extraClasses="area-one" animateClass={Styles.animate}>
    	    <div className={`${Styles.boxes}`}>
    	      <h2>Hello, call me Ben for short</h2>
    	      <div/>
    	      <div/>
    	      <div/>
    	    </div>
    	  </AnimationWrapper>
    	  <AnimationWrapper extraClasses="area-two" animateClass={Styles.animate}>
    	    <div className={Styles.about}>
    	    <h3>About Me</h3>
    	    <p>
    	      Hello, my name is Bennjmann. I am a web developer from the Sunshine Coast, QLD, and I am currently studying for a Bachelor of Information Technology with a major in Computer Science at QUT.
    	    </p>
    	    <p>
    	      My journey kicked off by creating simplistic games in game engines like Game Maker and Scratch as a kid. What began as a hobby evolved into a passion, leading me to delve further into the development space.
    	      After discovering immense enjoyment in technology, I decided to expand my knowledge by obtaining two different certifications in information technology. These certifications have helped further hone my skills.
    	    </p>
    	    <p>
    	      I obtained these IT certifications while working as a Construction Material Tester, a field in which I achieved a Level 3 certification. In this role,
    	      I developed a keen eye for generating quick, high-quality, and accurate results, greatly benefiting my applications.
    	    </p>
    	    <p>
    	      Now I am currently working as a full-stack developer, creating websites while pursuing a bachelor&apos;s degree in Information Technology at QUT.
    	    </p>
    	    <p>
    	      For a <a href="#skills"><u>list of the skills</u></a> i&apos;ve gain throughout my studies and career.
    	    </p>
    	    </div>
    	  </AnimationWrapper>
    	</div>

		  <AnimationWrapper animateClass={Styles.animate}>
		  <div id="projects" className={`container ${Styles.projects}`}>
			  <h2>Projects</h2>
			  <div>
				  <Project title="Cordwells Concrete" type="Gatsby" link="https://cordwells.au/"
						   src="/images/Cordwells-Website.png" alt="Screen Shot of the Cordwells Concrete Website">
					  A Seven page website made for a Concrete Company located on the Sunshine Coast.
				  </Project>
				  <Project title="QCTesting" type="Gatsby" link="https://QCTesting.au/"
						   src="/images/WP.png" alt="Photo of the Homepage of QCTesting">
					  Work in Progress....
				  </Project>
				  <Project title="CleanToDay" type="Next.js" link="#contact"
						   src="/images/WP.png" alt="A photo of the CleanToday Homepage">
					  Work in Progress....
				  </Project>
				  <Project title="This Website" type="Next.js" link="/"
						   src="/images/Portfoilo-Wesite.png" alt="A photo of the Homepage of this website">
					  A Single Page Application website made as a portfolio for myself to display my work and experience.
				  </Project>
			  </div>
		  </div>
	  	  </AnimationWrapper>

		<div id="skills" className={`container ${Styles.skills}`}>
			<h2>Skills</h2>
			<div className="area-one">
				<AnimationWrapper animateClass={Styles.animate}>
				<div className={`${Styles.skillGrid}`}>
					<h3>Frameworks</h3>
					<Skill title="React" rating={80} src="/images/React-icon.png" alt="React Logo" />
					<Skill title="Gatsby" rating={90} src="/images/Gatsby-Monogram.png" alt="Gatsby Logo" />
					<Skill title="Astro.build" rating={55} src="/images/astro-icon-light.png" alt="Astro.gg Logo" />
					<Skill title="Next.js" rating={70} src="/images/" alt="Next.js Logo" />
					<Skill title="Unity" rating={50} src="/images/" alt="Unity Logo" />
					<Skill title="Wordpress" rating={70} src="/images/WordPress-logo.png" alt="Wordpress Logo" />
				</div>
				</AnimationWrapper>
				<AnimationWrapper animateClass={Styles.animate}>
				<div className={`${Styles.skillGrid}`}>
					<h3>Certs</h3>
					<Skill title="IT" rating={100} src="/images/" alt="React Logo" />
					<Skill title="Creative indestruy" rating={100} src="/images/" alt="Gatsby Logo" />
					<Skill title="Construction Material Testing" rating={100} src="/images/" alt="Astro.gg Logo" />
				</div>
				</AnimationWrapper>
			</div>
			<div className="area-two">
				<AnimationWrapper animateClass={Styles.animate}>
				<div className={Styles.skillGrid}>
					<h3>Languages</h3>
					<Skill title="HTML" rating={90} src="/images/HTML5.png" alt="HTML5 Logo" />
					<Skill title="CSS" rating={85} src="/images/CSS3-logo.png" alt="CSS3 Logo" />
					<Skill title="TypeScript" rating={70} src="/images/ts-logo.png" alt="TypeScript Logo" />
					<Skill title="JavaScript" rating={75} src="/images/js-logo.png" alt="Javascript Logo" />
					<Skill title="C#" rating={80} src="/images/Csharp-Logo.png" alt="Csharp Logo" />
					<Skill title="Python" rating={70} src="/images/python-icon.png" alt="Python Logo" />
					<Skill title="Rust" rating={25} src="/images/" alt="Rust Logo" />
					<Skill title="SQL" rating={60} src="/images/Sql-logo.png" alt="SQL Logo" />
				</div>
				</AnimationWrapper>
				<AnimationWrapper animateClass={Styles.animate}>
				<div className={Styles.skillGrid}>
					<h3>Software</h3>
					<Skill title="Illustrator" rating={65} src="/images/Illustrator-icon.png" alt="Illustrator Logo"/>
					<Skill title="Photoshop" rating={55} src="/images/Photoshop-icon.png" alt="Photoshop Logo" />
					<Skill title="Figma" rating={75} src="/images/" alt="Figma Logo" />
				</div>
				</AnimationWrapper>
			</div>
		</div>
		  <AnimationWrapper animateClass={Styles.animate}>
			<div id="contact" className={`container ${Styles.contact}`}>
				<h2>Contact</h2>
				<img className="area-one" src="/images/Me.jpg" alt="A photo of me"  width="500" height="500"/>
				<div className="area-two">
					<p>
						Thank you for reviewing my portfolio.
						<br/>
						If you appreciate what you&apos;ve seen or have a project idea and are interested in hiring me for development work, please feel free to contact me using the methods below.
					</p>
					<br/>
					<p>Email: <mark>Bennjmann.red@gmail.com</mark></p>
					<p>Phone: <mark>0428586104</mark></p>
				</div>
			</div>
		  </AnimationWrapper>
	</main>
  )
}
