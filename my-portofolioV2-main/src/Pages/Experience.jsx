import { useEffect, memo } from "react"
import PropTypes from 'prop-types'
import { Briefcase, GraduationCap, Award, Calendar, MapPin, Sparkles, Code, Shield, Users } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

// Memoized Components
const Header = memo(() => (
  <div className="text-center mt-1 mb-8 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        Experience
      </h2>
    </div>
    <p
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2 text-center"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-red-400" />
      My professional journey and achievements
      <Sparkles className="w-5 h-5 text-red-400" />
    </p>
  </div>
));

Header.displayName = 'Header';

const ExperienceCard = memo(({ experience, index }) => (
  <div
    className="relative group mb-8"
    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
    data-aos-duration="1000"
    data-aos-delay={index * 200}
  >
    <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-500 to-rose-500 opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40`}></div>
    <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10">
      <div className="relative rounded-3xl bg-[#120008]/70 border border-white/10 backdrop-blur-xl p-6 overflow-hidden h-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.18),transparent_60%)] opacity-70"></div>
        <div className="absolute -top-1/2 left-0 right-0 h-1/2 bg-gradient-to-b from-red-500/10 via-transparent to-transparent animate-scanline"></div>

        <div className="relative flex flex-col lg:flex-row gap-6">
          {/* Timeline dot */}
          <div className="hidden lg:flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-red-500 to-rose-500 shadow-lg shadow-red-500/50 animate-pulse"></div>
            {index < 2 && <div className="w-0.5 h-16 bg-gradient-to-b from-red-500/50 to-transparent mt-4"></div>}
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">{experience.position}</h3>
              <span className="text-sm text-red-400 font-medium bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                {experience.period}
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <Briefcase className="w-4 h-4 text-red-400" />
              <span className="font-medium">{experience.company}</span>
              <span className="text-gray-500">•</span>
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">{experience.location}</span>
            </div>

            <p className="text-gray-300 leading-relaxed">{experience.description}</p>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {experience.achievements && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-red-400 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {experience.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
));

ExperienceCard.displayName = 'ExperienceCard';

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    position: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    achievements: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const EducationCard = memo(({ education, index }) => (
  <div
    className="relative group mb-6"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay={index * 150}
  >
    <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500/20 to-rose-500/20 flex items-center justify-center">
          <GraduationCap className="w-6 h-6 text-red-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">{education.degree}</h3>
          <p className="text-red-400 font-medium mb-2">{education.institution}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {education.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {education.location}
            </span>
          </div>
          {education.gpa && (
            <p className="text-sm text-gray-300">GPA: {education.gpa}</p>
          )}
        </div>
      </div>
    </div>
  </div>
));

EducationCard.displayName = 'EducationCard';

EducationCard.propTypes = {
  education: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    gpa: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const SkillCategory = memo(({ title, skills, icon: Icon }) => (
  <div
    className="space-y-4"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <h3 className="text-xl font-semibold text-white flex items-center gap-3">
      <Icon className="w-6 h-6 text-red-400" />
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="px-4 py-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300 text-center"
        >
          <span className="text-sm text-gray-300 font-medium">{skill}</span>
        </div>
      ))}
    </div>
  </div>
));

SkillCategory.displayName = 'SkillCategory';

SkillCategory.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.elementType.isRequired,
};

const ExperiencePage = () => {
  // Sample experience data - you can replace with your actual data
  const experiences = [
    {
      position: "Junior Cybersecurity Engineer",
      company: "PT Vinix Seven Aurum (VINIX7) - Internship",
      location: "Yogyakarta, Indonesia",
      period: "August 2025 - December 2025",
      description: "Analyzed web application security utilizing industry standard tools such as Burp Suite, Nuclei, and WPScan, combined with manual testing techniques to detect system weaknesses and logic flaws. Created detailed vulnerability assessment reports, documenting findings, severity levels, and providing actionable technical recommendations for remediation. Contributed to the security enhancement of the clients digital infrastructure by collaborating with the team to propose effective system hardening strategies.",
      technologies: [
      "Burp Suite",
      "Nuclei",
      "Nmap",
      "SQLmap",
      "OWASP Top 10",
      "Web Application Security Testing",
      "Linux (Kali Linux)",
      "Vulnerability Assessment & Reporting"
    ],
      achievements: [
      "Identified and documented multiple web application vulnerabilities through automated and manual security testing techniques",
      "Produced comprehensive vulnerability assessment reports including risk severity, impact analysis, and technical remediation recommendations",
      "Contributed to improving overall security posture by assisting in system hardening strategies aligned with OWASP best practices",
      "Enhanced accuracy of security findings by combining tool-based scanning with manual logic flaw analysis",
      "Collaborated with the security team to validate findings and ensure actionable remediation outcomes"
    ]
    },
    {
      position: "Operations Team Leadership and Organizational Division",
      company: "AIDS Awareness Youth Association of Sidoarjo Regency",
      location: "Sidoarjo, Indonesia",
      period: "Nov 2022 - Nov 2025",
      description: "Actively contributed to organizational development by optimizing program planning, implementation, and evaluation to strengthen cross-team collaboration and increase member engagement. Involved in designing and delivering human resource training modules focused on leadership development, organizational skills, and identifying members’ interests and talents. Additionally, played key roles across multiple event committees, including logistics coordination, event execution, and public relations to ensure successful program delivery and outreach.",
      technologies: ["Team Building", "Event Management", "Leadership", "Communication", "Time Management"],
      achievements: [
        "Optimized organizational programs by coordinating planning, execution, and post-event evaluations, resulting in improved teamwork and higher member participation",
        "Developed and implemented HR training modules on leadership, organizational management, and talent development to enhance member capacity and engagement",
        "Served as Equipment Coordinator for the 2022 AIDS Care Ambassador Selection Event, ensuring timely availability, distribution, and management of event logistics",
        "Contributed as a member of the Events Division for the Parpas Grow Up Event, supporting event preparation, execution, and on-site coordination",
        "Acted as part of the Public Relations Division for the 2022 Parpas Goes to School Event, assisting in communication, coordination, and external engagement activities"
      ]
    },
    {
      position: "Operations Team Household Welfare and Entrepreneurship Division",
      company: "AIDS Awareness Youth Association of Sidoarjo Regency",
      location: "Sidoarjo, Indonesia",
      period: "Oct 2021 - Oct 2022",
      description: "Responsible for managing and optimizing the organization’s inventory system, covering training equipment and daily operational supplies through structured record-keeping to ensure asset accountability and minimize losses. Actively involved in implementing work programs within the household and entrepreneurship sectors by coordinating across divisions, monitoring progress, and evaluating outcomes to ensure timely and effective execution. Additionally, contributed to fostering a warm and supportive organizational culture that strengthened member relationships, increased engagement, and reduced internal conflicts.",
      technologies: ["Team Coordination", " Organization Skills", "Relationship Building"],
      achievements: [
        "Successfully managed and optimized organizational inventory using a structured tracking system, reducing the risk of asset loss and improving resource utilization",
        "Conducted monitoring and evaluation of program outcomes to assess effectiveness and support continuous improvement",
        "Helped build and maintain a positive and familial organizational culture, resulting in higher member engagement and improved internal communication",
        "Coordinated cross-divisional work programs in the household and entrepreneurship sectors, ensuring activities were executed on schedule and aligned with organizational objectives"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Information System",
      institution: "Surabaya State University",
      location: "Surabaya, Indonesia",
      period: "2023 - 2027 (Expected)",
      gpa: "3.71/4.0"
    },
    {
      degree: "SMAN 2 Sidoarjo",
      institution: "High School, Mathematics and Natural Science",
      location: "Sidoarjo, Indonesia",
      period: "2020 - 2023",
      gpa: "92/100"
    }
  ];

  /* const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    "Frontend Technologies": ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend Technologies": ["Node.js", "Express.js", "Python Flask", "PostgreSQL", "MongoDB"],
    "Tools & Platforms": ["Git", "Docker", "AWS", "Vercel", "Figma", "Adobe Creative Suite"]
  }; */

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
      });
    };

    initAOS();

    // Debounced resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div
  className="min-h-screen bg-[#140003] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] pt-23 pb-20"
      id="Experience"
    >
      <Header />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Work Experience Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 mb-4">
              Work Experience
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-center">
              My professional journey through various roles and companies, showcasing growth and expertise development.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/50 via-rose-500/30 to-transparent"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 mb-4">
              Education
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-center">
              Academic background and continuous learning journey in technology and computer science.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <EducationCard key={index} education={edu} index={index} />
            ))}
          </div>
        </section>

        {/* Skills Section }
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 mb-4">
              Technical Skills
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-center">
              Technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, skillList], index) => {
              const icons = [Code, Shield, Users, Briefcase];
              return (
                <SkillCategory
                  key={category}
                  title={category}
                  skills={skillList}
                  icon={icons[index % icons.length]}
                />
              );
            })}
          </div>
        </section> */}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slower {
          to { transform: rotate(360deg); }
        }
        @keyframes statglow {
          0% { transform: translateX(-60%); opacity: 0.3; }
          50% { opacity: 0.9; }
          100% { transform: translateX(120%); opacity: 0.3; }
        }
        @keyframes iconflow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
        .animate-statglow {
          animation: statglow 5s ease-in-out infinite;
        }
        .animate-iconflow {
          animation: iconflow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(ExperiencePage);
