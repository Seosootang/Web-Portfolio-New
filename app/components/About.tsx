"use client";

import React from "react";
import SplitText from "./SplitText/SplitText";
import PixelCard from "./PixelCard/PixelCard";

const About: React.FC = () => {
  const skills = ["PHP", "Laravel", "MySQL", "Git", "React", "TypeScript", "Vue.js", "REST APIs", "Shadcn UI", "Flutter", "Dart", "Python"];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - About Content */}
          <div className="text-left space-y-8">
            {/* About Title */}
            <div>
              <SplitText text="About Me" tag="h2" className="text-4xl font-bold text-white mb-6" splitType="words" delay={100} duration={1.0} from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} textAlign="left" />
            </div>

            {/* About Description */}
            <div className="space-y-6">
              <SplitText
                text="I'm a passionate Back-end Developer with expertise in building robust and scalable web applications. I love creating efficient server-side solutions and working with databases to deliver seamless user experiences."
                tag="p"
                className="text-lg text-gray-300 leading-relaxed"
                splitType="words"
                delay={50}
                duration={1.2}
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                textAlign="left"
              />

              <SplitText
                text="My journey in web development started with a curiosity about how websites work behind the scenes. Now I specialize in creating APIs, managing databases, and ensuring applications run smoothly and securely."
                tag="p"
                className="text-lg text-gray-400 leading-relaxed"
                splitType="words"
                delay={70}
                duration={1.4}
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                textAlign="left"
              />
            </div>

            {/* Current Work Section */}
            <div>
              <SplitText text="Currently Working At" tag="h3" className="text-2xl font-semibold text-white mb-6" splitType="words" delay={80} duration={1.0} from={{ opacity: 0, y: 25 }} to={{ opacity: 1, y: 0 }} textAlign="left" />

              <PixelCard variant="yellow" gap={5} speed={14} noFocus className="!w-full !h-auto !aspect-auto !rounded-xl !border-yellow-400/30 animate-slide-in-up">
                <div className="bg-neutral-900/60 rounded-xl p-6 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300">
                  <h4 className="text-xl font-bold text-yellow-400 mb-3">Aksara Teknologi Mandiri</h4>

                  <div className="space-y-2 mb-4">
                    <p className="text-gray-300 text-sm">
                      Posisi: <span className="text-white font-medium">Back-end Developer (Internship)</span>
                    </p>
                    <p className="text-gray-400 text-sm">
                      Periode: <span className="text-gray-300">July 2025 - Present</span>
                    </p>
                  </div>

                  <a
                    href="https://aksarateknologi.co.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2 rounded-full bg-yellow-400 text-neutral-900 font-semibold text-sm hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
                  >
                    Visit Company
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </PixelCard>
            </div>

            {/* Skills Section */}
            <div className="animate-slide-in-up">
              <h3 className="text-xl font-semibold text-white mb-4">Technologies I work with:</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-6">
              <PixelCard variant="yellow" gap={6} speed={12} noFocus className="!w-full !h-auto !aspect-auto !rounded-xl !border-neutral-700">
                <div className="p-6 rounded-xl border border-white hover:border-yellow-400/30 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">2+</div>
                    <div className="text-gray-300 text-sm font-bold">Years Experience</div>
                  </div>
                </div>
              </PixelCard>

              <PixelCard variant="yellow" gap={6} speed={12} noFocus className="!w-full !h-auto !aspect-auto !rounded-xl !border-neutral-700">
                <div className="p-6 rounded-xl border border-white hover:border-yellow-400/30 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                    <div className="text-gray-300 text-sm font-bold">Projects Completed</div>
                  </div>
                </div>
              </PixelCard>

              <PixelCard variant="yellow" gap={6} speed={12} noFocus className="!w-full !h-auto !aspect-auto !rounded-xl !border-neutral-700">
                <div className="p-6 rounded-xl border border-white hover:border-yellow-400/30 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                    <div className="text-gray-300 text-sm font-bold">Technologies</div>
                  </div>
                </div>
              </PixelCard>

              <PixelCard variant="yellow" gap={6} speed={12} noFocus className="!w-full !h-auto !aspect-auto !rounded-xl !border-neutral-700">
                <div className="p-6 rounded-xl border border-white hover:border-yellow-400/30 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                    <div className="text-gray-300 text-sm font-bold">Learning</div>
                  </div>
                </div>
              </PixelCard>
            </div>

            {/* Additional Info Card */}
            <PixelCard variant="yellow" gap={6} speed={12} noFocus className="!w-full !h-auto !aspect-auto !rounded-xl !border-yellow-400/30">
              <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-3">Quick Facts</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Based in Indonesia
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Available for freelance work
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Passionate about clean code
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Always learning new tech
                  </li>
                </ul>
              </div>
            </PixelCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
