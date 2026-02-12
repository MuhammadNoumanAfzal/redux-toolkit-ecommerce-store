import { useState } from "react";

const Contact = () => {
  const [hover, setHover] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-6 py-16">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Form */}
        <div className="space-y-8">
          {["Your Name", "Your Email", "Share your thoughts"].map(
            (placeholder, index) => (
              <div key={index}>
                <input
                  type={placeholder === "Your Email" ? "email" : "text"}
                  placeholder={placeholder}
                  className="w-full bg-transparent border-b border-gray-600 text-white py-3 text-lg outline-none placeholder-gray-400 focus:border-blue-500 transition-all"
                />
              </div>
            )
          )}
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`relative w-full text-white cursor-pointer text-lg font-semibold py-4 border-2 border-blue-500 rounded-lg overflow-hidden transition-all
              ${
                hover
                  ? "bg-blue-500 shadow-lg shadow-blue-500/50"
                  : "bg-transparent"
              }
            `}
          >
            SHARE YOUR FEEDBACK
            {/* Hover Effect */}
            <span
              className={`absolute inset-0 bg-white opacity-10 transition-all
                ${hover ? "scale-150" : "scale-0"}
              `}
            ></span>
          </button>
        </div>

        {/* Right: Contact Text */}
        <div className="text-white text-center md:text-left space-y-8">
          <h2 className="text-6xl font-bold tracking-wide relative inline-block">
            <span className="text-white">Contact</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Us
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            It is very important for us to keep in touch with you, so we are
            always ready to answer any questions that interest you. Shoot!
          </p>
          <div className="flex space-x-6 justify-center md:justify-start"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
