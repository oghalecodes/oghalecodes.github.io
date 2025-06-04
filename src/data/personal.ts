export const personalInfo = {
  name: "Your Name",
  title: "Senior Software Engineer",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resume: "/resume.pdf",
  careerStartDate: "2017-01-01", // Update this to your actual career start date
  bio: `Passionate full-stack developer with 8+ years of experience 
        building scalable web applications and leading development teams. 
        I specialize in React, Node.js, and cloud technologies.`,
  longBio: `I'm a passionate senior software engineer with over 8 years of experience 
           in building robust, scalable web applications. My journey started with a 
           curiosity about how things work, which led me to fall in love with coding.`,
};

// Utility function to calculate years of experience
export const getYearsOfExperience = (): number => {
  const startDate = new Date(personalInfo.careerStartDate);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
  return diffYears;
};

export const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vue.js', 'HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Tailwind CSS'],
  backend: ['Node.js', 'Express.js', 'Python', 'Django', 'FastAPI', 'PHP', 'Laravel', 'Java', 'Spring Boot', 'C#'],
  database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Firebase', 'Supabase'],
  cloud: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'GitHub Actions', 'Terraform'],
  tools: ['Git', 'Webpack', 'Vite', 'Jest', 'Cypress', 'Figma', 'Jira', 'Slack', 'VS Code', 'Linux']
};

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'Github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'Linkedin'
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'Mail'
  }
];
