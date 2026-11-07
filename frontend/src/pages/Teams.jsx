import React, { useState, useMemo, useRef } from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const teamData = [
  // Core Team
  { id: 1, name: 'Shaivi Jain', position: 'President', team: 'Core', imageUrl: '/2.jpeg', socials: { linkedin: 'https://www.linkedin.com/in/shaivi-jain/', twitter: 'https://x.com/shaivijain_' , instagram: 'shaivizz_archive'}},
  { id: 2, name: 'Anupriya', position: 'The General Secretary', team: 'Core', imageUrl: '/IMG_20260531_101657.jpg', socials: { linkedin: 'https://www.linkedin.com/in/anupriya-7a8584322?utm_source=share_via&utm_content=profile&utm_medium=member_android', twitter: 'anu.hereehttps://twitter.com/Sonasha99', instagram: 'anu.heree' }},
  { id: 3, name: 'Kritika Singh', position: 'Vice President', team: 'Core', imageUrl: '/Kritika_delta (1).jpg', socials: { linkedin: 'https://www.linkedin.com/in/kritika1220?utm_source=share_via&utm_content=profile&utm_medium=member_androidhttps://www.linkedin.com/in/palak-bansal-3b6666283', twitter: '@Kritika32717391', instagram: 'ks_.1220' }},
  { id: 4, name: 'Shreya Rathore', position: 'Vice President', team: 'Core', imageUrl: '/FullSizeRender.jpg', socials: { linkedin: 'https://www.linkedin.com/in/shreya-rathore-135785265/', twitter: 'shreyarathore_', instagram: 'shhreyyaarr' }},
  
  // Technical Team
  { id: 8, name: 'Anamika Garg', position: 'Lead', team: 'Technical', imageUrl: '/my.jpeg', socials: { linkedin: 'https://www.linkedin.com/in/anamika-garg-aa14a5300/', twitter: 'https://x.com/AnamikaGarg29', instagram: 'nulllpointerr' }},
  { id: 12, name: 'Aashna Sharma', position: 'Coordinator', team: 'Technical', imageUrl: 'https://res.cloudinary.com/deysvolet/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:22d3ee,b_rgb:262c35/v1762849297/Screenshot_2025-11-11_135054_udmjrh.png', socials: { linkedin: 'https://www.linkedin.com/in/aashna-sharma-20261a35b/', twitter: 'https://x.com/aashnash777', instagram: 'https://www.instagram.com/sh.a7i' }},
  { id: 13, name: 'Purva Mehta', position: 'Core', team: 'Technical', imageUrl: 'https://res.cloudinary.com/deysvolet/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:22d3ee,b_rgb:262c35/v1762848495/IMG20250704123946_2_emg7xs.jpg', socials: { linkedin: 'https://www.linkedin.com/in/purva-mehta-670b53375', twitter: 'https://x.com/PurvaMehta2007', instagram: 'https://www.instagram.com/purvamehta_01' }},
  { id: 14, name: 'Ishanvi Srivastava', position: 'Lead', team: 'Technical', imageUrl: '/ishh.jpeg', imageStyle: { transform: 'scale(1.3) translateY(-8px)' }, socials: { linkedin: 'https://www.linkedin.com/in/ishanvi-srivastava-16i', twitter: 'https://x.com/ishanvisri16', instagram: 'https://www.instagram.com/silvermistt.16' }},
  { id: 15, name: 'Ishita Sati', position: 'Coordinator', team: 'Technical', imageUrl: '/IMG-20260404-WA0108.jpg', socials: { linkedin: 'https://www.linkedin.com/in/ishita-s-91683a32b', twitter: '', instagram: 'https://www.instagram.com/is_hi274828' }},
  { id: 17, name: 'Amna Sehgal', position: 'Coordinator', team: 'Technical', imageUrl: '/WhatsApp Image 2026-06-29 at 14.12.37.jpeg', socials: { linkedin: 'https://www.linkedin.com/in/amnasehgal/', twitter: 'https://x.com/amnasehgal211', instagram: 'https://www.instagram.com/amnasehgall' }},

  // Event Management Team
  { id: 21, name: 'Manupreet Kaur', position: 'Lead', team: 'Events', imageUrl: '/am website.jpg', socials: { linkedin: 'https://www.linkedin.com/in/manupreet-kaur-9a69b0324', twitter: 'https://x.com/@manupreet2307', instagram: 'manu._xo' }},
  { id: 26, name: 'Ananshi Nayak', position: 'Lead', team: 'Events', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:22d3ee,b_rgb:262c35/v1695670259/ananshi_sm23e5.jpg', socials: { linkedin: 'https://www.linkedin.com/in/ananshi-nayak-69a19b327', twitter: 'https://x.com/@ananshi_nayak', instagram: 'ananshiiiiiii' }},
  { id: 28, name: 'Harshita Dahiya', position: 'Lead', team: 'Events', imageUrl: '/pp2.JPG', socials: { linkedin: 'https://www.linkedin.com/in/harshita-dahiya-65a865282/', twitter: 'https://x.com/Harshita_47793', instagram: 'harshita_dahiya08' }},
  { id: 32, name: 'Harleen Kaur', position: 'Coordinator', team: 'Events', imageUrl: '#', socials: { linkedin: 'https://www.linkedin.com/in/harleen-kaur-1a9723362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', twitter: 'https://x.com/harleen05547067?s=21', instagram: 'harleennnn.21' }},
  { id: 34, name: 'Ashmita Kumari', position: 'Core', team: 'Events', imageUrl: 'https://res.cloudinary.com/deysvolet/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:22d3ee,b_rgb:262c35/v1763192778/Screenshot_2025-11-15_131600_y9wdbp.png', socials: { linkedin: 'https://www.linkedin.com/in/ashmita-kumari-6444b436b?utm_source=share_via&utm_content=profile&utm_medium=member_android', twitter: '#', instagram: '_ashmita_1012' }},
  { id: 36, name: 'Drishti Singh', position: 'Core', team: 'Events', imageUrl: '#', socials: { linkedin: 'https://www.linkedin.com/in/drishti-singh-a99163381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: 'https://x.com/Drishtiii2006?t=fgRImkZG3MR39tXF8asbqQ&s=09', instagram: 'drishti_ish01' }},
  { id: 38, name: 'Anshika yadav', position: 'Core', team: 'Events', imageUrl: '#', socials: { linkedin: 'https://www.linkedin.com/in/anshika-yadav-a31a5037a/', twitter: 'https://x.com/AnshikaYadv11', instagram: 'https://www.instagram.com/yadav_anshikaa_' }},

  // Research Team
  { id: 42, name: 'Sargam Sharma', position: 'Lead', team: 'Research', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:22d3ee,b_rgb:262c35/v1695670259/sargam_rrqgbb.jpg', socials: { linkedin: 'https://www.linkedin.com/in/er-sargam-sharma', twitter: '@sharma_sar62453', instagram: '#' }},
  { id: 43, name: 'Anya Kansal', position: 'Core', team: 'Research', imageUrl: 'https://res.cloudinary.com/deysvolet/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:22d3ee,b_rgb:262c35/v1763192907/Screenshot_2025-11-15_131810_os6ew6.png', socials: { linkedin: 'https://www.linkedin.com/in/anya-kansal-a94237373/', twitter: 'https://x.com/kansal86093', instagram: 'https://www.instagram.com/_anyaa._23' }},
  { id: 48, name: 'Tanishka Singh', position: 'Core', team: 'Research', imageUrl: 'https://res.cloudinary.com/deysvolet/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:22d3ee,b_rgb:262c35/v1763193329/Screenshot_2025-11-15_132514_agqbs9.png', socials: { linkedin: 'https://www.linkedin.com/in/tanishka-singh-69879934b/', twitter: '#', instagram: 'https://www.instagram.com/tanishka._22' }},
  { id: 50, name: 'Aditi', position: 'Coordinator', team: 'Research', imageUrl: 'https://res.cloudinary.com/deysvolet/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:22d3ee,b_rgb:262c35/v1763193466/Screenshot_2025-11-15_132732_aivizc.png', socials: { linkedin: 'https://www.linkedin.com/in/aditi-sharma-8021b937b/', twitter: '#', instagram: 'https://www.instagram.com/aditi88855' }},

  // Media Team
  { id: 53, name: 'Mehar Kapoor', position: 'Lead', team: 'Media', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:22d3ee,b_rgb:262c35/v1695672367/mehar_kvevsp.jpg', socials: { linkedin: 'https://linkedin.com/in/mehar-kapoor-428802214/', twitter: '@bytegirlwrites', instagram: 'https://www.instagram.com/mehar_kapoor7/' }},
  { id: 54, name: 'Diya Kotru', position: 'Lead', team: 'Media', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:22d3ee,b_rgb:262c35/v1695672367/diya_a73a8v.jpg', socials: { linkedin: 'https://www.linkedin.com/in/diya-kotru-9059a2322', twitter: '0xdiya', instagram: 'https://www.instagram.com/kotrudiya' }},
  { id: 55, name: 'Tulip', position: 'Core', team: 'Media', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:22d3ee,b_rgb:262c35/v1695672367/tulip_swx7su.jpg', socials: { linkedin: 'www.linkedin.com/in/tulip-gupta-292661328', twitter: 'https://x.com/tulipp_19', instagram: 'https://www.instagram.com/_tulip.15_' }},
  { id: 60, name: 'Rashi Choudhary', position: 'Core', team: 'Media', imageUrl: '', socials: { linkedin: 'https://www.linkedin.com/in/rashi-choudhary-5a2763381/', twitter: '', instagram: 'https://www.instagram.com/ri_pvt18' }},
  { id: 61, name: 'Anika Kulshresh', position: 'Core', team: 'Media', imageUrl: 'https://res.cloudinary.com/deysvolet/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:22d3ee,b_rgb:262c35/v1763194003/Screenshot_2025-11-15_133623_pfn8uw.png', socials: { linkedin: 'https://www.linkedin.com/in/anika-kulshreshtha-806903262/', twitter: '', instagram: 'https://www.instagram.com/anika.naur' }},
  { id: 67, name: 'Amaira Kapoor', position: 'Core', team: 'Media', imageUrl: '/img1.jpg', socials: { linkedin: 'https://www.linkedin.com/in/amaira-kapoor-497847313/', twitter: 'amairakapoor', instagram: 'https://www.instagram.com/am4iraa' }},

  // Outreach Team
  { id: 63, name: 'Akshita', position: 'Lead', team: 'Outreach', imageUrl: '/pic3.png', socials: { linkedin: 'https://www.linkedin.com/in/akshita-tanwar-939a04321', twitter: 'https://x.com/Humaniuiuiexe', instagram: 'https://www.instagram.com/akshita.t9' }},
  { id: 77, name: 'Tanisha', position: 'Lead', team: 'Outreach', imageUrl: "/WhatsApp Image 2026-09-09 at 10.52.42.jpeg", socials: { linkedin: 'https://www.linkedin.com/in/tanisha-bansal-28758b382/', twitter: 'https://x.com/tanishaban71262', instagram: 'https://www.instagram.com/tanishab_3' }},
  { id: 68, name: 'Bhumika Garg', position: 'Core', team: 'Outreach', imageUrl: 'https://res.cloudinary.com/deysvolet/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:22d3ee,b_rgb:262c35/v1763191564/Screenshot_2025-11-15_125547_tvyrgm.png', socials: { linkedin: 'https://www.linkedin.com/in/bhumika-garg-a77577385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: 'https://x.com/BhumikaGarg2531', instagram: 'https://www.instagram.com/bhumika_garg16?igsh=azVkbm1xNjlzeXg' }},
  { id: 71, name: 'Dhruvi Relan', position: 'Core', team: 'Outreach', imageUrl: '', socials: { linkedin: 'https://www.linkedin.com/in/khushboo-aggarwal9582', twitter: 'https://x.com/Khushboo777868?t=k95x-EfKOlWLp0zUZahgbw&s=09', instagram: 'https://www.instagram.com/khushboo_aggarwal17?igsh=MWxiOXp2eDJ0YTlseQ==' }},
  { id: 75, name: 'Sanya Banswal', position: 'Core', team: 'Outreach', imageUrl: '', socials: { linkedin: 'https://www.linkedin.com/in/sanya-banswal-68b3b2376/', twitter: 'https://x.com/sanyabanswal?s=21', instagram: 'https://www.instagram.com/banswalsanya' }},
  { id: 78, name: 'Tripti Singla', position: 'Core', team: 'Outreach', imageUrl: '#', socials: { linkedin: 'https://www.linkedin.com/in/tripti-188123382/', twitter: 'https://x.com/ritsharma386', instagram: 'https://www.instagram.com/Triptii_singla' }},
];

const groupTeamByPosition = (team) => {
  return team.reduce((acc, member) => {
    const { position } = member;
    if (!acc[position]) acc[position] = [];
    acc[position].push(member);
    return acc;
  }, {});
};

const TeamMemberCard = ({ member }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const rotateX = ((y / height) - 0.5) * -40;
    const rotateY = ((x / width) - 0.5) * 40;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    setStyle({ transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)` });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="group relative w-full max-w-xs rounded-2xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 ease-out [transform-style:preserve-3d] hover:border-cyan-500/30 spotlight-card"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative [transform-style:preserve-3d]">
        <div className="mx-auto h-32 w-32 rounded-full border-2 border-white/10 overflow-hidden shadow-md transition-all duration-300 group-hover:border-cyan-400 [transform:translateZ(40px)]">
          <img
            src={member.imageUrl}
            alt={`Profile of ${member.name}`}
            className="h-full w-full object-cover transition-all duration-300"
            style={{
              ...member.imageStyle,
              transform: isHovered
                ? `${member.imageStyle?.transform || 'scale(1)'} scale(1.05)`
                : (member.imageStyle?.transform || 'scale(1)'),
              transition: 'transform 0.3s ease-out',
            }}
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/128x128/1e293b/FFFFFF?text=Image'; }}
          />
        </div>
      </div>
      <h3 className="font-display mt-5 text-xl font-bold text-white [transform:translateZ(30px)] group-hover:text-cyan-300 transition-colors duration-300">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-cyan-400/80 [transform:translateZ(20px)]">{member.position}</p>
      <div className="mt-5 flex items-center justify-center gap-4 opacity-75 transition-opacity duration-300 group-hover:opacity-100 [transform:translateZ(20px)]">
        {member.socials.linkedin && member.socials.linkedin !== '#' && (
          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300">
            <Linkedin size={15} />
          </a>
        )}
        {member.socials.twitter && member.socials.twitter !== '#' && (
          <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300">
            <Twitter size={15} />
          </a>
        )}
        {member.socials.instagram && member.socials.instagram !== '#' && (
          <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300">
            <Instagram size={15} />
          </a>
        )}
      </div>
    </div>
  );
};

export default function Teams() {
  const teams = useMemo(() => ['Core', 'Technical', 'Events', 'Media', 'Research', 'Outreach'], []);
  const [activeTab, setActiveTab] = useState(teams[0]);

  const filteredTeam = useMemo(() => teamData.filter(member => member.team === activeTab), [activeTab]);
  const groupedTeam = groupTeamByPosition(filteredTeam);

  const positionHierarchy = ['President', 'The General Secretary', 'Vice President', 'Lead', 'Core', 'Coordinator'];

  const positionOrder = useMemo(() => {
    return Object.keys(groupedTeam).sort((a, b) => {
      const indexA = positionHierarchy.indexOf(a);
      const indexB = positionHierarchy.indexOf(b);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });
  }, [groupedTeam]);

  const BackgroundPattern = () => (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.08)_1px,_transparent_0)]" style={{ backgroundSize: '1.5rem 1.5rem' }}></div>
    </div>
  );

  return (
    <div className="relative bg-transparent text-white min-h-screen font-sans overflow-hidden">
      <BackgroundPattern />
      <div className="relative z-10 container mx-auto px-4 py-24 sm:py-28 mt-12">
        <div className="text-center mb-16">
          <h1 className="font-sans text-4xl md:text-5xl font-black mt-20 tracking-tight text-white">
            Meet the <span className="font-serif italic font-normal text-cyan-400">Team</span>
          </h1>
          <p className="mt-4 text-base text-slate-400 max-w-xl mx-auto font-light leading-relaxed">
            The passionate individuals driving our vision forward.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center gap-1.5 p-1.5 bg-white/[0.02] border border-white/10 rounded-full backdrop-blur-md">
            {teams.map(team => (
              <button
                key={team}
                onClick={() => setActiveTab(team)}
                className={`flex-shrink-0 px-5 py-2 text-xs font-display font-bold uppercase tracking-wider rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === team
                    ? 'text-slate-950 bg-cyan-400 shadow-md shadow-cyan-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {team} Team
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-20">
          {positionOrder.map(position => (
            <section key={position}>
              <h2 className="text-3xl font-bold text-center mb-12 text-slate-300 capitalize">{position}</h2>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10">
                {groupedTeam[position].map(member => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}