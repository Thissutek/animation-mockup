// src/app/page.js
// src/app/page.js
"use client";

import ScrollBackground from "@/components/ScrollBackground";

export default function Home() {
  return (
    <ScrollBackground videoSrc="/blender-animation.mp4">
      {/* First section */}
      <section className="h-screen flex items-center justify-center">
        <div className="bg-black/60 text-white p-8 rounded-lg max-w-2xl backdrop-blur-sm">
          <h1 className="text-5xl font-bold">Welcome</h1>
          <p className="mt-4 text-xl">
            As you scroll, watch our animation evolve in the background
          </p>
          <div className="mt-8 animate-bounce flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-black/60 text-white p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Our Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-4">Service One</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-4">Service Two</h3>
                <p>
                  Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
                  elementum imperdiet.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-4">Service Three</h3>
                <p>
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="h-screen flex items-center justify-center">
        <div className="bg-black/60 text-white p-8 rounded-lg max-w-2xl backdrop-blur-sm">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="mb-4">
            Our company prides itself on innovation and creativity. The dynamic
            background animation you see represents our approach to
            problem-solving and design.
          </p>
          <p>
            Founded in 2023, we've quickly established ourselves as leaders in
            creating engaging digital experiences that captivate audiences.
          </p>
          <button className="mt-8 bg-white text-black px-6 py-2 rounded-full font-medium">
            Learn More
          </button>
        </div>
      </section>

      {/* Contact section */}
      <section className="h-screen flex items-center justify-center">
        <div className="bg-black/60 text-white p-8 rounded-lg max-w-2xl backdrop-blur-sm">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="mb-8">
            Ready to start your project? Contact us today to discuss how we can
            bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium">
              Contact Us
            </button>
            <button className="bg-transparent border border-white px-6 py-3 rounded-full font-medium">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </ScrollBackground>
  );
}
