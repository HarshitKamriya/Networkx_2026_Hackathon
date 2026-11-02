import { useState } from "react";
import { EVENT } from "../data/eventInfo";

const TALKS_DAY = EVENT.days.find((d) => d.title.includes("Talks")) ?? EVENT.days[1];

// In programme order. kind defaults to "Talk"; use "Performance" for performers.
const speakers = [
  {
    name: "Mamta Sharma",
    designation: "Founder, Soldier and Monk",
    talk: "",
    image: "/speakers/mamta-sharma.webp",
    bio: "Mamta Sharma is a Personality Development and Soft Skills Expert, Leadership Mentor, and Entrepreneur with over 15 years of experience shaping confident individuals, inspiring leaders, and developing high-performing professionals. As the Founder of Soldier and Monk, she empowers people to strengthen their confidence, communication skills, emotional intelligence, and professional presence. Her experience spans education, capacity building, stakeholder engagement, and strategic partnerships. With a vision to transform 100,000 individuals by 2030, she believes lasting success requires both external strength and inner wisdom. Through entrepreneurship, leadership, and skill development, she helps students and emerging professionals turn potential into performance and prepare not only for employment, but also for leadership, lifelong learning, and meaningful impact.",
  },
  {
    name: "Mushtaaque Ali Ahmad Khan",
    designation: "Actor & Director · Founder, Kashmir World Film Festival",
    talk: "",
    image: "/speakers/mushtaaque-ali-ahmad-khan.webp",
    bio: "Mushtaaque Ali Ahmad Khan is a Srinagar-based actor, theatre practitioner, television producer and filmmaker who has devoted five decades to the performing arts in Kashmir. He began acting as a child artist in 1974 and completed his post-graduation from the University of Kashmir in 1982. He has acted in and directed more than two dozen stage plays and, as an empanelled producer-director for Doordarshan, has helmed numerous teleplays, telefilms and serials. He is the Creative Director of Actors' Creative Theatre (ACT) and the founder of the Kashmir World Film Festival (KWFF), which he has organised across several editions to bring world cinema to the Valley. His contributions have been recognised with the Jammu & Kashmir Government State Award (2025) and a Lifetime Achievement Award for Art & Culture in Kashmir.",
  },
  {
    name: "Prof. (Dr.) Mohd Amin Malik",
    designation: "College Principal, Higher Education Department, J&K",
    talk: "",
    image: "/speakers/mohd-amin-malik.webp",
    bio: "Prof. (Dr.) Mohd Amin Malik is an academician, researcher, and columnist serving as a College Principal in the Higher Education Department, Government of Jammu and Kashmir. With 30 years of service in higher education, he has taught Physics in institutions across Kashmir for more than 24 years and has served in institutional leadership as a College Principal. His expertise includes curriculum development, academic planning, institutional collaborations, NAAC assessment and accreditation, research management, and campus development. As Principal of Government Degree College Bandipora (2020–2022), he led initiatives in campus development, NAAC accreditation, skill-based courses, research funding, and sustainability. He holds a Ph.D. in Physics from the University of Kashmir (2005), an M.Sc. in Physics, and a Postgraduate Diploma in Computer Science. He has authored 31+ technical research papers, the book Science for a Sustainable Future (2021), and more than 200 articles on science, education, technology, and social issues.",
  },
  /*
  {
    name: "Hiral Sharma",
    designation: "Head of Architecture, Fortinet",
    talk: "",
    image: "/speakers/hiral-sharma.webp",
    bio: "Hiral Sharma is a cybersecurity leader with well over a decade of experience in designing and securing large-scale networks for government, defence, PSU and enterprise organisations. As Head of Architecture at Fortinet, Hiral Sharma leads solution architecture for customers across India and SAARC, having earlier served as Principal Architect and Head – Solution Architect (Govt, Defence & PSU), India & SAARC. A regular speaker at national technology forums, Hiral Sharma speaks on AI-driven security, cyber hygiene and human-machine teaming.",
  },
  */
  {
    name: "Dr. Sandesh Ganjoo",
    designation: "Gynaecologist, Author, Researcher & Marathoner",
    talk: "",
    image: "/speakers/sandesh-ganjoo.webp",
    bio: "Dr. Sandesh Ganjoo is a gynaecologist, author, researcher and marathoner. A medical academician in the Department of Obstetrics & Gynaecology at Guru Gobind Singh Medical College and Hospital, Faridkot, Punjab, Dr. Ganjoo holds an MD in Obstetrics & Gynaecology and combines clinical practice and teaching with research in women's health, with published work on post-menopausal bleeding, carpal tunnel syndrome in pregnancy and lactation, and complications of chronic oligohydramnios. Beyond medicine, Dr. Ganjoo is a passionate marathon runner and was a speaker at TEDx NIT Srinagar.",
  },
  {
    name: "Hina Gojwari",
    designation: "Academic Director, Emly Labs AI Academy",
    talk: "Artificial Intelligence",
    image: "/speakers/hina-gojwari.webp",
    bio: "Hina Gojwari is an educator and technology professional working at the intersection of Artificial Intelligence, education, and industry. As the Academic Director at Emly Labs AI Academy, she focuses on creating practical, project-based learning experiences that prepare students for the evolving world of technology. She is also the driving force behind JKOSI, an open-source community initiative in Jammu and Kashmir that brings students and developers together to build, collaborate, and contribute to real-world projects. Her work centres on bridging the gap between academic learning and industry through hands-on learning, open-source collaboration, and innovation.",
  },
  {
    name: "Adv. Barkat Rattan",
    designation: "Advocate & Social Activist",
    talk: "",
    image: "/speakers/barkat-rattan.webp",
    bio: "Adv. Barkat Kaur Rattan is a Srinagar-based advocate and social activist. A vocal voice for youth, she has spoken publicly on youth representation in politics, unemployment, women's empowerment and inclusive governance in Jammu and Kashmir, and has encouraged young citizens to take an active part in the democratic process. Beyond law, she is also active in theatre and television.",
  },
  {
    name: "Mir Sarwar",
    designation: "Actor, Director & Producer",
    talk: "",
    image: "/speakers/mir-sarwar.webp",
    bio: "Mir Sarwar is a distinguished Kashmiri actor, director and producer, widely recognised for his powerful screen presence and nuanced portrayals in Hindi cinema. Born and raised in Pandrethan, Srinagar, he began his artistic journey in theatre and modelling before honing his craft through workshops at the National School of Drama (NSD), Delhi. His breakthrough came with Bajrangi Bhaijaan (2015), and his filmography includes Phantom, Dishoom, Kedarnath, Jolly LLB 2, Kesari, Hamid, Laxmii and Am I Next. Beyond acting, he is an award-winning photographer and filmmaker who directed Bed No. 17. Deeply committed to the growth of cinema in Jammu & Kashmir, he works to attract film productions to the region and create opportunities for local talent, and through his production banner Safdar Arts supports meaningful, independent storytelling. He has also served on the preview committee of the International Film Festival of India (IFFI).",
  },
  {
    name: "Dr. Aneeda Jan",
    designation: "Assistant Professor of Law, CDOE, University of Kashmir",
    talk: "Human Trafficking: Laws and Challenges",
    image: "/speakers/aneeda-jan.webp",
    bio: "Dr. Aneeda Jan is an Assistant Professor of Law at the Centre for Distance and Online Education (CDOE), University of Kashmir. An academician, researcher, author, and legal educator, she has experience in legal education, curriculum development, online learning, and academic administration. She was the first candidate from the Department of Law, University of Kashmir, to qualify for the UGC Junior Research Fellowship (JRF) and Senior Research Fellowship (SRF), and has also qualified the State Level Eligibility Test (SLET). Her research interests include the socio-legal perspectives on euthanasia and honour killings, gender justice, women's rights, and criminal justice. She authored Honour Killings (Academic Press, London, 2019) and Euthanasia: Socio-Legal Perspectives (2012). She has also coordinated SWAYAM/CEC online courses in Constitutional Law, Administrative Law, and Law of Torts. At NetworkX 2026, she will speak on the legal and socio-legal dimensions of human trafficking, its implementation challenges, and the need for a coordinated, victim-centred response.",
  },
  /*
  {
    name: "Mr. Altaf Bukhari",
    designation: "Founder & President, J&K Apni Party",
    talk: "",
    image: "/speakers/altaf-bukhari.webp",
    bio: "Syed Mohammad Altaf Bukhari is a Srinagar-based politician and businessman and the Founder-President of the Jammu and Kashmir Apni Party. Elected to the Legislative Assembly from Amira Kadal in 2014, he served as a Cabinet Minister in the Jammu and Kashmir Government, including as Minister for Education. In March 2020 he founded the Jammu and Kashmir Apni Party, with a focus on development, employment for youth and the restoration of statehood. Alongside public life, he has an established background in business and enterprise in Kashmir.",
  },
  */
  {
    name: "Prof. (Dr.) Sabia Qureshi",
    designation: "Professor cum Chief Scientist, Microbiology & Immunology · Associate Dean, Faculty of Veterinary Sciences, SKUAST-K",
    talk: "",
    image: "/speakers/sabia-qureshi.webp",
    bio: "Prof. (Dr.) Sabia Qureshi is a Professor cum Chief Scientist in the Division of Veterinary Microbiology and Immunology and Associate Dean of the Faculty of Veterinary Sciences and Animal Husbandry at SKUAST-Kashmir. She was the first woman to win the gold medal at the bachelor's level in the Faculty of Veterinary Sciences. Her master's research on rotavirus was part of the first reported detection of rotavirus in animals in Kashmir, and for her Ph.D. she developed a bacteriophage-lysed Pasteurella multocida vaccine and a DIVA ELISA that tells vaccinated animals apart from infected ones. As a laboratory officer at the Disease Investigation Laboratory, Budgam, she helped set up a microbiology lab that expanded pathogen identification and antibiotic sensitivity testing. In 2021 she joined the Centre for Public Health at the University of Nebraska Medical Center, USA, where she worked on whole-genome sequencing and wastewater surveillance of SARS-CoV-2. She leads a DBT-funded project to develop an aptamer-based diagnostic kit for Campylobacter infection, and her work has been published in international journals.",
  },
  {
    name: "Farah Zaidee",
    designation: "Social Activist, Gender Researcher & Content Creator",
    talk: "",
    image: "/speakers/farah-zaidee.webp",
    bio: "Farah Zaidee is a Kashmir-based social activist, development practitioner and digital content creator. She holds a Master's in Gender Studies from the University of Kashmir, has worked as an NGO project lead with the Indo-Global Social Service Society, and has been a show host at Doordarshan Kendra Srinagar and a radio presenter. Through her writing and her widely followed social media platforms, she speaks on women's empowerment, gender sensitivity and violence against women, including acid attacks in Kashmir. She also documents rural education and sustainable travel across the Valley, visiting villages to highlight local challenges and supporting NGOs and community initiatives.",
  },
  {
    name: "Jagdeep Singh, JKAS",
    designation: "Civil Servant · TEDx Speaker · Strategic Reformer",
    talk: "",
    image: "/speakers/jagdeep-singh.webp",
    bio: "Jagdeep Singh is a Jammu & Kashmir Administrative Service (JKAS) officer of the 2019 batch, serving in the Department of Industries and Commerce, Government of Jammu & Kashmir. An alumnus of NIT Srinagar, he graduated with a B.Tech in 2015. His experience in public administration and governance spans district administration, public service delivery, healthcare and industrial development. A multiple-time TEDx speaker, he has been featured on TEDx platforms at NIT Srinagar, NIT Goa, NIT Hamirpur, Andhra University and SBU Pune, along with other national events.",
  },
  {
    name: "Noor Mohammad",
    designation: "Kashmiri Sufi & Folk Singer",
    kind: "Performance",
    talk: "Live Singing Performance",
    image: "/speakers/noor-mohammad.webp",
    bio: "Noor Mohammad Shah is a celebrated Kashmiri Sufi and folk singer and rabab player from Baki-Aker village in Handwara, Kupwara. For years he sang traditional Kashmiri kalam on the streets and at Sufi shrines of the Valley, until a video of him singing by the roadside with his rabab went viral and made him a household name. Songs such as \"Kya Karie Korimol\" have since reached millions online, and he now performs at cultural events and festivals across the country. His soulful voice carries forward the rich tradition of Kashmiri Sufi music to new generations.",
  },
];

const organizers = [
  {
    name: "Team Member",
    role: "Event Coordinator",
    image: "", // add a photo path, e.g. "/speakers/name.jpg"
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "Technical Coordinator",
    image: "", // add a photo path, e.g. "/speakers/name.jpg"
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "Design Coordinator",
    image: "", // add a photo path, e.g. "/speakers/name.jpg"
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "Operations Coordinator",
    image: "", // add a photo path, e.g. "/speakers/name.jpg"
    linkedin: "#",
  },
];

const faculty = [
  {
    name: "Umar Majid",
    role: "Coordinator",
    image: "/faculty/umar-majid.webp",
  },
  {
    name: "Syed Hussain",
    role: "Co-coordinator",
    image: "/faculty/syed-hussain.webp",
  },
];

// Shows the photo when one is set, otherwise a branded placeholder with initials.
function Photo({ src, alt, className = "" }) {
  if (src) return <img src={src} alt={alt} className={className} />;
  const initials = alt
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center bg-linear-to-br from-primary to-dark text-4xl font-extrabold text-white/80 ${className}`}
    >
      {initials}
    </div>
  );
}

function SpeakerCard({ speaker, onReadMore }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* 4:5 matches the speaker photos in public/speakers, so nothing is cropped */}
      <div className="relative aspect-[4/5] overflow-hidden bg-light">
        <Photo
          src={speaker.image}
          alt={speaker.name}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />

        <div className="absolute bottom-2 left-3 right-3 text-white sm:bottom-4 sm:left-4 sm:right-4">
          <h3 className="text-sm font-bold leading-tight sm:text-xl">
            {speaker.name}
          </h3>
        </div>
      </div>

      <div className="p-3 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
          {TALKS_DAY.label} · {speaker.kind ?? "Talk"}
        </p>

        <h3 className="mt-1 min-h-[3.75rem] text-xs font-bold leading-snug text-text sm:mt-2 sm:min-h-[3.5rem] sm:text-lg">
          {speaker.designation}
        </h3>

        <button
          onClick={() => onReadMore(speaker)}
          className="mt-3 inline-flex items-center text-sm font-semibold text-primary transition hover:text-accent sm:mt-5 sm:text-base"
        >
          Read Bio
          <span className="ml-2 transition group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>
  );
}

function PersonCard({ person, showLinkedIn = false }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-square overflow-hidden bg-light">
        <Photo
          src={person.image}
          alt={person.name}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-3 sm:p-5">
        <h3 className="text-sm font-bold text-text sm:text-lg">
          {person.name}
        </h3>

        <p className="mt-1 text-sm font-medium text-primary">
          {person.role}
        </p>

        {showLinkedIn && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center rounded-lg bg-light px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  return (
    <div className="bg-white text-text">

      {/* ==================== SPEAKERS ==================== */}
      <section id="talks" className="bg-light px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">
            <p className="font-semibold uppercase tracking-wider text-primary">
              {TALKS_DAY.label} · {TALKS_DAY.date}
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-text md:text-4xl">
              Talks & Speakers
            </h2>

            <p className="mt-4 text-slate-600">
              Explore the speakers and discover the topics they will
              be discussing on the talks day of NetworkX.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                speaker={speaker}
                onReadMore={setSelectedSpeaker}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ==================== BIO MODAL ==================== */}
      {selectedSpeaker && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/70 px-5 py-8 backdrop-blur-sm"
          onClick={() => setSelectedSpeaker(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-7 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-light text-xl font-bold text-text transition hover:bg-primary hover:text-white"
              aria-label="Close biography"
            >
              ×
            </button>

            <div className="pr-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                {selectedSpeaker.kind === "Performance" ? "Performer" : "Speaker"}
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-text">
                {selectedSpeaker.name}
              </h2>

              <p className="mt-1 font-medium text-slate-500">
                {selectedSpeaker.designation}
              </p>
            </div>

            <Photo
              src={selectedSpeaker.image}
              alt={selectedSpeaker.name}
              className="mx-auto mt-6 aspect-[4/5] w-full max-w-60 rounded-xl bg-light object-cover object-top"
            />

            {selectedSpeaker.talk && (
              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {selectedSpeaker.kind ?? "Talk"}
                </p>

                <h3 className="mt-2 text-xl font-bold text-text">
                  {selectedSpeaker.talk}
                </h3>
              </div>
            )}

            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Biography
              </p>

              <p className="mt-2 leading-7 text-slate-600">
                {selectedSpeaker.bio}
              </p>
            </div>

            <button
              onClick={() => setSelectedSpeaker(null)}
              className="mt-7 w-full rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-dark"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

// Faculty and organizing team, rendered further down the page (after Sponsors).
export function Team() {
  return (
    <div id="team" className="bg-white text-text">
      {/* ==================== FACULTY ==================== */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-wider text-primary">
              Guidance & Support
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-text md:text-4xl">
              Faculty Coordinators
            </h2>

            <p className="mt-4 text-slate-600">
              Faculty members supporting and guiding the NetworkX
              event.
            </p>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 sm:gap-6">
            {faculty.map((person, index) => (
              <PersonCard
                key={index}
                person={person}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ==================== ORGANIZING TEAM ==================== */}
      {/* Hidden for now.
      <section className="bg-light px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-wider text-primary">
              The Team
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-text md:text-4xl">
              Organizing Team
            </h2>

            <p className="mt-4 text-slate-600">
              The student team working behind the scenes to bring
              NetworkX to life.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {organizers.map((person, index) => (
              <PersonCard
                key={index}
                person={person}
                showLinkedIn
              />
            ))}
          </div>

        </div>
      </section>
      */}
    </div>
  );
}
