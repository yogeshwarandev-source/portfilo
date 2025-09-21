import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Rebustar (Real-Time Taxi Booking Platform) </h3>
              <p className="text-gray-400 mb-4">
 Built core backend logic for real-time ride
 booking, dynamic pricing, and RESTful APIs.
 Integrated Stripe, Razorpay, and Twilio for
 payments and SMS notifications.
 Implemented real-time chat using Socket.IO
 and live updates via Firebase.
 Deployed and scaled services with Docker &
 Kubernetes on Azure Cloud.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js","Expressjs","MongoDb","Mongoose","Socket.Io","Firebase","Redis","Monolithic", "AWS", "Docker","kubernets","AngularJs" ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div> */}
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">GainCare (Maintenance management app) </h3>
              <p className="text-gray-400 mb-4">
Developed RESTful APIs for registering and tracking service complaints.
 Integrated video calling functionality using Jitsi for real-time communication.
 mproved backend stability, scalability, and overall user experience
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js","Expressjs","MySql","Prisma","Firebase","Microservices", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div> */}
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2"> Dime (On-demand service booking platform)</h3>
              <p className="text-gray-400 mb-4">
Developed RESTful APIs and implemented real-time video calling & chat using Socket.IO.
 Designed and applied scheduling logic for service packages.
 Built admin dashboards to manage payments, transactions, and refunds via Paystack.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js","Expressjs","MongoDb","Mongoose","Socket.Io","Firebase","Monolithic", "Azure", "Docker"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              {/* <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div> */}
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Sequr (IoT-Based Security Application)</h3>
              <p className="text-gray-400 mb-4">
 Developed RESTful APIs for seamless IoT device integration.
 Implemented real-time device communication using MQTT and WebSockets.
 Built a responsive dashboard for live monitoring, alerts, and access control
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js","Expressjs","Posresql","Sequlizer","Monolithic", "AWS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div> */}
            </div>
                        <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2"> Doctorhub (Health Consultant Application)</h3>
              <p className="text-gray-400 mb-4">
 Built RESTful APIs for seamless integration of telehealth services.
 Developed real-time video calling and chat features integrated with AI-based triage.
 Implemented subscription models and secure payments using Paystack gateway.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js","Expressjs","MongoDb","Mongoose","Socket.Io","Firebase","Monolithic"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              {/* <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div> */}
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2"> Saha (Dating & Matrimonial Application)</h3>
              <p className="text-gray-400 mb-4">
Designed and developed RESTful APIs for matchmaking and messaging features.
 Implemented secure authentication workflows and profile verification processes.
 Integrated subscription plans and premium features with secure payment gateways.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js","Expressjs","MongoDb","Mongoose","Socket.Io","Firebase","Monolithic"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              {/* <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
