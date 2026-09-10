import "./Team.css";

const teamMembers = [
  {
    name: "Shivam",
    role: "Cloud & Back-End Developer",
    imageUrl: "/assets/teams/shivam.png",
  },
  {
    name: "Sanskar Soni",
    role: "UI/UX Designer",
    imageUrl: "/assets/teams/sans.png",
  },
  {
    name: "Ritik Gupta",
    role: "Front-End Developer",
    imageUrl: "/assets/teams/ritik.png",
  },
  {
    name: "Saksham Gupta",
    role: "Android Developer",
    imageUrl: "/assets/teams/saksham.png",
  },
  {
    name: "Divyanshi Sengar",
    role: "Content Writer",
    imageUrl: "/assets/teams/divyanshi.png",
  },
];

function Team() {
  return (
    <div className="team-container">
      <h1 className="team-title animate"><u>Our Team</u></h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-card animate" key={index}>
            <div className="circle-image">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="profile-pic animate"
              />
            </div>
            <h3 className="member-name animate">{member.name}</h3>
            <p className="member-role animate">{member.role}</p>
            <button className="animate">Connect</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
