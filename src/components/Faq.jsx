import { useState } from "react";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is NetworkX?",
      answer:
        "NetworkX is a student-focused event that brings together speakers, participants, innovators and developers to learn, collaborate and build together.",
    },
    {
      question: "What is the 1st Edition of NetworkX?",
      answer:
        "The 1st Edition marks the beginning of NetworkX, bringing together talks, networking and a hands-on hackathon experience.",
    },
    {
      question: "Who can participate?",
      answer:
        "Students and technology enthusiasts interested in learning, networking and building innovative solutions can participate.",
    },
    {
      question: "Where will the event take place?",
      answer:
        "Day 1 (Hackathon) takes place at NIT Srinagar, Hazratbal. Day 2 (Talks) takes place at SKICC (Sher-i-Kashmir International Conference Centre), Srinagar.",
    },
    {
      question: "When will the event schedule be announced?",
      answer:
        "The detailed Day 2 talks schedule is to be decided and will be announced once finalized.",
    },
    {
      question: "How long is the hackathon?",
      answer:
        "The Day 1 hackathon on 3 November will run for 8 hours, starting at 11:00 AM.",
    },{
      question: "What happens during the hackathon?",
      answer:
        "Questions and challenges will be provided to participants, who will then work to solve them.",
    },{
      question: "Internet connectivity?",
      answer:
        "Hackthon will have to work offline, so participants are expected to bring their own devices and work without internet connectivity.",
    },
  ];

  return (
    <div className="bg-dark text-white">
      {/* FAQ */}
      <section id="faq" className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Everything you need to know about the 1st Edition of NetworkX.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-semibold transition hover:bg-white/5"
                  >
                    <span>{faq.question}</span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xl transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-slate-400">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
