import React from "react";

export default function OurStory() {
  return (
    <section id="our-story" className="bg-[#F5F7FA] py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Texts */}
        <div>
          <span className="uppercase text-[12px] tracking-widest text-[#C45B5B] font-bold mb-4 block">
            Our Story
          </span>
          <h2 className="text-[1.45rem] sm:text-2xl font-bold text-[#212136] mb-7 leading-tight">
            Across Nigeria, millions of small businesses depend solely on social media to sell—
            <span className="text-black font-bold"> not by choice, but because building a website feels expensive and complicated.</span>
          </h2>
          {/* Only appears on mobile, the text that is on the bottom right */}
          <div className="md:hidden mt-4">
            <p className="text-[#555C6D] text-[15px] leading-relaxed">
              Without a website, businesses look incomplete, struggle to earn trust, and lose attention to louder competition.<br /><br />
              At Richkraft, we turn sole websites a luxury into they're business essentials.<br /><br />
              We make professional websites simple, affordable, and accessible. So, Nigerian business owners can look credible, compete confidently, and grow beyond social media.
            </p>
          </div>
        </div>
        {/* Right: Images + Paragraph */}
        <div className="relative flex flex-col items-end">
          <div className="flex gap-7 justify-end items-start mb-7">
            <div>
              <img
                src="/people/person1.jpg"
                alt="Portrait of a person"
                width={225}
                height={225}
                style={{
                  borderRadius: '19px'
                }}
                className="w-[225px] h-[225px] object-cover rounded-[19px] shadow-lg"
                loading="eager"
              />
            </div>
            <div className="flex flex-col gap-4">
              <img
                src="/people/person2.jpg"
                alt="Portrait of a person"
                width={130}
                height={110}
                style={{
                  borderRadius: '14px'
                }}
                className="w-[130px] h-[110px] object-cover rounded-[14px] shadow-md"
              />
              <img
                src="/people/person3.jpg"
                alt="Portrait of a person"
                width={55}
                height={55}
                style={{
                  borderRadius: '9px'
                }}
                className="w-[55px] h-[55px] object-cover rounded-[9px] shadow"
              />
            </div>
            {/* Dots decoration - top right */}
            <span className="absolute right-0 -top-7 hidden md:block">
              <svg width="44" height="31" fill="none">
                <g stroke="#CCE2E8" strokeWidth="2">
                  {Array.from({ length: 5 }).map((_, row) =>
                    Array.from({ length: 3 }).map((_, col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={col * 11}
                        cy={row * 7}
                        r="1"
                      />
                    ))
                  )}
                </g>
              </svg>
            </span>
          </div>
          {/* Decsription paragraph - only on md+ */}
          <div className="hidden md:block">
            <p className="text-[#555C6D] text-[15px] leading-relaxed max-w-[340px]">
              Without a website, businesses look incomplete, struggle to earn trust, and lose attention to louder competition.<br /><br />
              At Richkraft, we turn sole websites a luxury into they're business essentials.<br /><br />
              We make professional websites simple, affordable, and accessible. So, Nigerian business owners can look credible, compete confidently, and grow beyond social media.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}