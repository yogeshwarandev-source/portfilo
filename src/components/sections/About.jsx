import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Angular",
    "TypeScript",
  ];

  const backendSkills = ["Node.js","Expressjs", "GraphQL", "RestFul","MongoDb","Mysql","Posresql"];

  const architectureSkills = ["Monolithic","Microservices"]

  const CloudSkils = ["Aws","Azure", "GoogleCloudPlatform"]

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
With 4 years of experience as a Full-Stack Developer, I bring expertise in building powerful backend systems.
I focus on API design, database optimization, and performance-driven architectures.
I enjoy solving complex problems, securing applications, and scaling systems for high traffic.
At the same time, I ensure the frontend remains simple, responsive, and user-friendly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Architecture </h3>
                <div className="flex flex-wrap gap-2">
                  {architectureSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Cloud PlatForm </h3>
                <div className="flex flex-wrap gap-2">
                  {CloudSkils.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-bold">
                    {" "}
                    Software Engineer at AbserveTech Technologies Pvt Ltd (2021 - Present){" "}
                  </h4>
                  <p>
                    Developed and maintained Monolithic and microservices for Bussiness and fintech
                    applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold">
                    {" "}
                    Service Deleivery Executive at Neeyamo Enterprise Technologies Pvt Ltd  (2019 - 2021){" "}
                  </h4>
                  <p>
                    Improved Overall Service quality by 30% by mentoring more than 40 junior team and training them in strict safety standards
                  </p>
                </div>
              </div>
            </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.E. in Mechanical Engineering </strong> - Sethu Institute Of Technology
                  (2015-2019)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
