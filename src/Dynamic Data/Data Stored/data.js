import HtmlIcon from "../../logo/tech-logo/html5-icon.png";
import CssIcon from "../../logo/tech-logo/css3-icon.png";
import JsIcon from "../../logo/tech-logo/js-icon.png";
import ReactIcon from "../../logo/tech-logo/react-icon.png";
import NextIcon from "../../logo/tech-logo/nextjs-icon.png";
import GithubIcon from "../../logo/tech-logo/github-icon.png";
import GitIcon from "../../logo/tech-logo/git_VCS-icon.png";
import NetifyIcon from "../../logo/tech-logo/netify-icon.png";

// ICONS-DATA
const skillsData = [
  {
    $name: "HTML",
    imgSrc: HtmlIcon,
    altText: "Html icon",
  },
  {
    $name: "CSS",
    imgSrc: CssIcon,
    altText: "Css icon",
  },
  {
    $name: "Javascript",
    imgSrc: JsIcon,
    altText: "Javascript icon",
  },
  {
    $name: "React",
    imgSrc: ReactIcon,
    altText: "React icon",
  },
  {
    $name: "Next JS",
    imgSrc: NextIcon,
    altText: "Next JS icon",
    filter: true,
  },
  {
    $name: "Github",
    imgSrc: GithubIcon,
    altText: "Github icon",
    filter: true,
  },
  {
    $name: "Git VCS",
    imgSrc: GitIcon,
    altText: "Git VCS icon",
  },
  {
    $name: "Netify",
    imgSrc: NetifyIcon,
    altText: "Netify icon",
  },
];

// MY-DATA
const myData = [
  {
    myName: "Arunav Singh",
    occupation: "Web Developer",
    description:
      "Aspiring Web Developer and Web Designer with a focus on front-end development. Proficient in HTML, CSS, JavaScript, and ReactJS at a beginner level, with a passion for creating responsive and user-friendly web interfaces. Dedicated to learning and improving in the field of web development.",
    email: "arunavsingh999@gmail.com",
    phone: "+91-7008122921",
    place: "Bengaluru, India - 560048",
  },
];

// MY-EDUCATION-DATA
const myEducationData = [
  {
    instituteName: "Sathyabma Institute of Science and Technology",
    stream: "B.E in Computer Science Engineering",
    year: "2018-2024",
    status: "Completed",
  },
  {
    instituteName: "Sri Chaitanya Techno School | CBSE",
    stream: "PMCE-IP",
    year: "2015-2018",
    status: "Completed",
  },
  {
    instituteName: "Vikash Residentianl School | CBSE",
    stream: "Science",
    year: "2011-2015",
    status: "Completed",
  },
];

// TYPING DATA
const typingConfig = [
  {
    texts: ["Web Designing", "Web Development", "Frontend Development"],
    typingDuration: 1100,
    deletingDuration: 350,
    blinkSpeed: 250,
    pauseDuration: 1500,
  },
];

export default skillsData;
export { myData, myEducationData, typingConfig };
