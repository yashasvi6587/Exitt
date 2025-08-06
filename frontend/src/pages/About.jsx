import React from 'react';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-8 md:px-20 font-sans leading-relaxed">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center tracking-widest uppercase border-b pb-4 border-gray-700">
          The Code
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-center italic text-gray-300">
          This is not a brand. This is a <span className="text-white font-semibold">mark</span>.
        </p>

        {/* Story Section */}
        <div className="text-base sm:text-lg md:text-xl space-y-6 text-gray-200">
          <p className="text-center text-xl sm:text-2xl font-light text-gray-400 tracking-wide">
            We Don’t Follow Fashion. <span className="text-white font-medium">We Follow the Road.</span>
          </p>

          <p className="text-justify">
            EXITT was never built to be trendy. We were built for the <span className="text-white font-semibold italic">ones who live untamed</span> — the riders, the loners, the drifters, the tribe with no flag but freedom.
          </p>

          <p className="text-justify">
            We don’t sell clothing. We create gear that <span className="text-white font-semibold">carries the marks of the ride</span> — dust, wind, time, scars, and stories. Every thread is part of the journey.
          </p>

          <p className="text-justify">
            When you wear EXITT, you’re not wearing a product. You’re joining a <span className="text-white font-semibold">movement</span>. One built on freedom, fire, speed, and soul.
          </p>
        </div>

        {/* Pillars Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 pt-10 text-gray-100">
          {[
            {
              title: '⚡ FREEDOM OVER EVERYTHING',
              desc: 'We ride to escape. To breathe. To be unowned. Freedom isn’t a slogan — it’s our fuel.',
            },
            {
              title: '🏍️ RIDE YOUR OWN WAY',
              desc: 'No rules. No trends. No right bike or perfect look. If it’s real — it’s EXITT.',
            },
            {
              title: '🤝 TRIBE OF THE MARKED',
              desc: 'Brotherhood. Sisterhood. We don’t ride the same, but we ride together.',
            },
            {
              title: '🔥 GEAR THAT TELLS STORIES',
              desc: 'Every drop is a chapter. Every jacket a journal. Wear it. Ride it. Mark it.',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-zinc-900 rounded-2xl shadow-md border border-zinc-700">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-base sm:text-lg">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center pt-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6">
            Ready to Mark the Free?
          </h2>
          <a
            href="/collection"
            className="inline-block bg-white text-black px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-md hover:bg-gray-300 transition"
          >
            Explore Road Editions →
          </a>
        </div>
      </div>

      {/* Newsletter */}
      <NewsLetterBox />
    </div>
  );
};

export default About;
