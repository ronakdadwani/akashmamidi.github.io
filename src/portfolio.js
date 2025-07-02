/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Akash's Portfolio",
  description:
    "Strategic thinker in digital, building robust online presences and fostering engagement.",
  og: {
    title: "Akash Mamidi Portfolio",
    type: "website",
    url: "http://akashmamidi.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Akash Mamidi",
  logo_name: "AkashMamidi",
  nickname: "akashmamidi",
  subTitle:
    "Strategic thinker in digital, building robust online presences and fostering engagement.",
  resumeLink:
    "https://drive.google.com/file/d/15dLyn3eOMByX7pFFXIyCWnnp9lygX6yn/view?usp=sharing",
  portfolio_repository: "https://github.com/vishalmamidi",
  githubProfile: "https://github.com/vishalmamidi",
};

const socialMediaLinks = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/akashsamamidi/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/akashmamidi/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/vishal0x11/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Twitter",
    link: "https://twitter.com/",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Gmail",
    link: "mailto:mamidiakash13@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Github",
    link: "https://github.com/akashmamidi",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Digital Marketer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Blends logic, creativity, and algorithms to spark attention",
        "⚡ Navigates the digital space to put your brand where it matters",
        "⚡ Always evolving to stay ahead of trends.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "logos:spring-icon",
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        // {
        //   skillName: "HTML5",
        //   fontAwesomeClassname: "simple-icons:html5",
        //   style: {
        //     color: "#E34F26",
        //   },
        // },
        // {
        //   skillName: "CSS3",
        //   fontAwesomeClassname: "fa-css3",
        //   style: {
        //     color: "#1572B6",
        //   },
        // },
        // {
        //   skillName: "JavaScript",
        //   fontAwesomeClassname: "simple-icons:javascript",
        //   style: {
        //     backgroundColor: "#000000",
        //     color: "#F7DF1E",
        //   },
        // },
        // {
        //   skillName: "ReactJS",
        //   fontAwesomeClassname: "simple-icons:react",
        //   style: {
        //     color: "#61DAFB",
        //   },
        // },
      ],
    },
    {
      title: "SEO + [ Search Engine Optimization] ",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Conduct keyword research, on-page/off-page SEO, Local SEO and technical audits",
        "⚡ Perform competitor analysis to identify SEO opportunities and develop effective strategies",
        "⚡ Improve search rankings and drive organic traffic",
        "⚡ Monitor performance using tools like Google Search Console, Google Analytics, Ahrefs, SEMrush and Moz",
      ],
      softwareSkills: [
       
      ],
    },
     {
       title: "SMO + [ Social Media Optimization] ",
       fileName: "DesignImg",
       skills: [
         "⚡ Weekly posts planned around awareness, engagement, education, and promotions.",
         "⚡ Use trends, hashtags, and interaction to boost reach and growth.",
         "⚡ Track insights to refine content and improve results.",
       ],
       softwareSkills: [
         
       ],
     },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/VishalMamidi",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/vishalmamidi",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/vishalmamidi",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@vishalmamidi",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/vishalmamidi",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Kakatiya Institute of Technology and Science Warangal",
      subtitle: "B.Tech. in Computer Science and Engineering",
      // logo_path: "iiitk_logo.png",
      logo_path: "kits_logo.png",
      alt_name: "KITS Kurnool",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have Studied HTML, CSS, Java etc",
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Achieved Ethical Hacking certification at Sumshodini-16 (2016). Which was conducted between 80% of Computer Science & Information Technology Students.",
      ],
      website_link: "https://www.kitsw.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I began my journey with an internship at Fission Labs, focusing on SEO and SMO. Later, I joined Gravitas Digital as an SEO Executive and was promoted to Digital Marketing Executive. Now at Bhuvana Group, I handle digital strategies to boost visibility and drive quality leads.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Digital Marketing Executive ",
          company: "Bhuvana Group",
          company_url: "https://bhuvanagroup/",
          logo_path: "vm_logo.jpg",
          duration: "March 2025 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working on SEO and SMO strategies to improve online visibility and engagement.  "+
            "Planning and executing content marketing campaigns. "+
            "Running paid ads on Google and Meta platforms.  "+
            "Managing WhatsApp campaigns for direct audience outreach.  "+
            "Using tools like Ahrefs, Ubersuggest, SEMrush, Google Search Console, and Google Analytics to track performance, optimize results, and generate insights.",
          color: "#0879bf",
        },
        {
          title: " Digital Marketing SEO",
          company: "Gravitas ",
          company_url: "https://gravitasin.com/",
          logo_path: "virtusa_logo.jpg",
          duration: "Dec 2023 - Jan 2025",
          location: "Hyderabad, Telangana",
          description:
            "At Gravitas, I worked on end-to-end SEO and SMO strategies "+
            "Managed content marketing campaigns, and gained hands-on experience with Google Ads and Meta Ads at a foundational level.",
          color: "#9b1578",
        },
        {
          title: "Digital Marketing Intern",
          company: "Fission Infotech",
          company_url: "https://fission.it/",
          logo_path: "modak_logo.jpg",
          duration: "Aug 2023 - Nov 2023",
          location: "Hyderabad, Telangana",
          description:
            "Worked on SEO focusing on quality backlinks and basic optimization. During this time, I also learned SMO to enhance brand presence across platforms.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        // {
        //   title: "Mentor igital marketer for Interns",
        //   company: "Bhuvanagroup",
        //   company_url: "https://Bhuvanagroup/",
        //   logo_path: "google_logo.png",
        //   duration: "June 2025 - Present",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Currently mentoring digital marketing interns at Bhuvana Group, helping them develop practical skills in SEO, SMO, content marketing, and paid ads.",
        //   color: "#4285F4",
        // },
        {
          title: "Mentor Digital Marketer for Interns",
          company: "Bhuvanagroup",
          company_url: "https://Bhuvanagroup/",
          logo_path: "microsoft_logo.png",
          duration: "June 2025 - Present",
          location: "Hyderabad, Telangana",
          description:
            "Currently mentoring digital marketing interns at Bhuvana Group, helping them develop practical skills in SEO, SMO, content marketing, and paid ads.",
          color: "#D83B01",
        },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Warangal, Telangana",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        {
          title: "Digital Marketing Trainer",
          company: "NextVVmarketer",
          company_url:
            "https://Nextvvmarketer.com/",
          logo_path: "kits_logo.png",
          duration: "Jan 2025 - Mar 2025",
          location: "Warangal, Telangana",
          description:
            "I conduct digital marketing lectures for employees at NextVVMarketers, helping them enhance their practical skills and industry knowledge.",
          color: "#0C9D58",
        },
        {
          title: "Digital Marketing lecture",
          company: "SSK Seva Samaj",
          company_url: "https://.com/",
          logo_path: "github_logo.png",
          duration: "12th Jan 2025",
          location: "Warangal",
          description:
            "Organized a digital marketing awareness event for the SSK Seva Samaj community in Warangal, empowering members with knowledge on online growth strategies.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a wide range of the latest digital marketing tools and platforms. My best experience is creating and managing data-driven campaigns across Google Ads, Meta Ads, and SEO tools like SEMrush and Ahrefs.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
//   title: "Publications",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    email: "mailto:mamidiakash13@gmail.com",
    profile_image_path: "me.png",
    description:
      "I am available on almost every social media. You can drop a message. I can help you with Instagram, LinkedIn, Facebook, WhatsApp.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://akashsamamidi.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Mattewada, Warangal, Telangana - 506002",
    avatar_image_path: "address_image.svg",
    location_map_link: "mailto:mamidiakash13@gmail.com",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8121580321",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
