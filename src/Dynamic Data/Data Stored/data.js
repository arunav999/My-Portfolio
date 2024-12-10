import HtmlIcon from "../../logo/tech-logo/html5-icon.png";
import CssIcon from "../../logo/tech-logo/css3-icon.png";
import JsIcon from "../../logo/tech-logo/js-icon.png";
import ReactIcon from "../../logo/tech-logo/react-icon.png";
import NextIcon from "../../logo/tech-logo/nextjs-icon.png";
import GithubIcon from "../../logo/tech-logo/github-icon.png";
import GitIcon from "../../logo/tech-logo/git_VCS-icon.png";
import NetifyIcon from "../../logo/tech-logo/netify-icon.png";
import OmniSS from "../../img/Projects Screenshots/Omni-ss.png";
import YTcloneSS from "../../img/Projects Screenshots/YT-Clone-ss.png";
import LoginSS from "../../img/Projects Screenshots/Login-Form-ss.png";
import PortSS from "../../img/Projects Screenshots/Resume-ss.png";

/*-------------------------------------- */
/*-------------------------------------- */

// MY-DATA
const myData = [
  {
    myName: "Arunav Singh",
    occupation: "Web Developer",
    description:
      "Aspiring Web Developer and Web Designer with a focus on front-end development. Proficient in HTML, CSS, JavaScript, and ReactJS at a beginner level, with a passion for creating responsive and user-friendly web interfaces. Dedicated to learning and improving in the field of web development.",
    email: "arunavsingh999@gmail.com",
    eHref: "mailto:arunavsingh999@gmail.com",
    phone: "+91-7008122921",
    pHref: "tel:7008122921",
    location: "Bengaluru, India - 560048",
    lHref:
      "https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9537902,77.3012781,10z/data=!3m1!4b1!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D",
  },
];

// MY-EDUCATION-DATA
const myEducationData = [
  {
    instituteName: "Sathyabma Instiute of Science and Technology",
    location: "Chennai, TN",
    stream: "B.E in Computer Science Engineering",
    year: "2018-2022",
    status: "Completed",
    description:
      "Completed B.E. in Computer Science from Sathyabhama University in 2022. My final year project focused on Sign Language Recognition using Machine Learning in Python. It was an independent project that deepened my interest in innovative technologies.",
  },
  {
    instituteName: "Sri Chaitanya Techno School | CBSE",
    location: "Visakhapatnam, AP",
    stream: "PMCE-IP",
    year: "2015-2017",
    status: "Completed",
    description:
      "Completed 12th grade from Sri Chaitanya, specializing in PCME-IP. I gained a solid understanding of foundational subjects and honed my analytical skills. This stage was instrumental in shaping my interest in technology and problem-solving.",
  },
  {
    instituteName: "Vikash Residential School | CBSE",
    location: "Bargarh, OD",
    stream: "Science",
    year: "2011-2015",
    status: "Completed",
    description:
      "Completed 10th grade from Vikash with a strong academic record. My learning here laid the groundwork for advanced studies, sparking my curiosity in mathematics and science. These formative years encouraged my pursuit of engineering.",
  },
];

// MY PROJECTS DATA
const myProjectsData = [
  {
    proImg: OmniSS,
    proTag: "OmniFood",
    proAlt: "OmniFood website screenshot",
    proDesc: "Omnifood project built in HTML, CSS and Javascript",
    proVisit: "https://omnifood-arunav.netlify.app/",
    proCode: "https://github.com/arunav999/OMNI_FOOD-Project",
  },
  {
    proImg: YTcloneSS,
    proAlt: "Youtube Clone website screenshot",
    proTag: "Youtube Clone",
    proDesc: "Youtube Clone project built in HTML and CSS",
    proVisit: "https://yt-clone-arunav.netlify.app/",
    proCode: "https://github.com/arunav999/Youtube-Clone",
  },
  {
    proImg: LoginSS,
    proAlt: "Login form screenshot",
    proTag: "Login form",
    proDesc:
      "It's a basic login form built using HTML and CSS with a video background.",
    proVisit: "https://login-form-arunav.netlify.app/",
    proCode: "https://github.com/arunav999/Login-form-basic",
  },
  {
    proImg: PortSS,
    proAlt: "My portfolio website screenshot",
    proTag: "Portfolio",
    proDesc: "Created this portfolio using React js.",
    proVisit: "https://adorable-dusk-9a2e6d.netlify.app/",
    proCode: "https://github.com/arunav999/My-Portfolio",
  },
];

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
export { myData, myEducationData, typingConfig, myProjectsData };
