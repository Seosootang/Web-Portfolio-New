import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Threads from "./components/Threads/Threads";

const projectsData = [
  {
    id: 1,
    title: "Audit Learning System",
    description: "Back-end Developer on a learning platform that helps accounting students learn auditing practices.",
    longDescription:
      "Audit Learning System is a web-based platform created to help accounting students learn auditing through interactive case studies, guided exercises, and automated assessments. I served as a Back-end Developer responsible for designing and implementing RESTful APIs, database schemas, authentication and role-based access, and integrations with the Inertia.js-driven React frontend. My work included building endpoints for course and assignment management, student progress tracking, practice simulations, and grading automation while ensuring performance, security, and data integrity. The application uses Laravel with Inertia for server-driven frontend rendering, React for interactive UI components, and Shadcn UI for consistent styling.",
    technologies: ["Laravel", "Inertia.js", "React", "Shadcn UI", "MySQL", "PHP"],
    image: "/assets/images/als.png",
    features: [
      "Interactive auditing case studies and guided exercises",
      "Student progress tracking and performance dashboards",
      "Course and assignment management for instructors",
      "Authentication and role-based access (students, instructors)",
      "Automated assessment and grading workflows",
      "Responsive, accessible UI using Shadcn components",
    ],
  },
  {
    id: 2,
    title: "Jaringwan",
    description: "Back-end Developer building a corporate website and product management system.",
    longDescription:
      "Jaringwan is a website created to help our client showcase their company and manage their product catalog. I worked as the Back-end Developer, responsible for designing and implementing RESTful APIs, database schemas, authentication and role-based access control, product CRUD operations, and server-side validation. I also handled file uploads, image processing, and integrations needed by the admin dashboard. The backend was built with Laravel and Inertia to power a React-driven frontend; Shadcn UI was used for consistent styling. My focus was on data integrity, security, and making content management easy for non-technical staff.",
    technologies: ["Laravel", "Inertia.js", "React", "Shadcn UI", "MySQL", "PHP"],
    github: "",
    image: "/assets/images/jaringwan.png",
    features: [
      "Company profile and about pages to showcase the client's business",
      "Backend APIs for product management (create, read, update, delete)",
      "Admin dashboard backend with role-based access and permissions",
      "File upload and image handling for product assets",
      "Server-side validation and secure authentication",
      "SEO-friendly routing and reliable data handling",
    ],
  },
  {
    id: 3,
    title: "Anti-Hypertension Pakisaji Website",
    description: "Fullstack Developer role implementing patient CRUD and scheduled WhatsApp messaging.",
    longDescription:
      "Served as a Fullstack Developer on the Anti-Hypertension Pakisaji project. Implemented patient CRUD (Create, Read, Update, Delete) features and a scheduled WhatsApp messaging system to send appointment reminders and health notifications. The project uses Laravel with Inertia.js and React for the frontend, Shadcn UI components for consistent styling, and Twilio API for WhatsApp messaging integration.",
    technologies: ["Laravel", "Inertia.js", "React", "Shadcn UI", "MySQL", "Twilio API"],
    github: "https://github.com/Seosootang/MedicineReminder",
    image: "/assets/images/antihypertension.png",
    features: [
      "Patient management CRUD (create, view, update, delete)",
      "Scheduled WhatsApp messaging for reminders and notifications (Twilio integration)",
      "Inertia + React frontend with server-driven rendering",
      "Responsive UI using Shadcn component library",
      "Secure authentication and role-based access control",
    ],
  },
  {
    id: 4,
    title: "Six Season Musical",
    description: "Fullstack Developer role building a website with authentication, product & category CRUD, and payment gateway integration.",
    longDescription:
      "Worked as a Fullstack Developer on Six Season Musical Project. Implemented user authentication, full CRUD for products and categories, and integrated Xendit payment gateway to enable secure online payments. The application uses Laravel with Inertia.js and React for a server-driven frontend, Shadcn UI for consistent component styling, and Xendit API for payment processing.",
    technologies: ["Laravel", "Inertia.js", "React", "Shadcn UI", "MySQL", "Xendit API"],
    github: "https://github.com/Seosootang/MusicStore",
    image: "/assets/images/sixseasonsmusical.png",
    features: [
      "User authentication and role-based access",
      "Product CRUD (create, view, update, delete)",
      "Category CRUD and management",
      "Payment gateway integration with Xendit",
      "Admin dashboard for product and order management",
      "Responsive UI built with Shadcn component library",
    ],
  },
  {
    id: 5,
    title: "Re-engineering Mayar",
    description: "Fullstack Developer role in a 4-person team implementing webinar CRUD, authentication, and payment gateway.",
    longDescription:
      "Worked as a Fullstack Developer in a 4-person team on the Re-engineering Mayar project. Implemented CRUD functionality for webinars, user authentication, and integrated Xendit payment gateway for paid webinars and services. Built using Laravel with Inertia.js and React, styled with Shadcn UI components for consistent interface, and backed by MySQL for data persistence.",
    technologies: ["Laravel", "Inertia.js", "React", "Shadcn UI", "MySQL", "Xendit API"],
    github: "http://github.com/Seosootang/re-engineering-mayar",
    image: "/assets/images/mayar.png",
    features: [
      "Webinar CRUD (create, schedule, edit, delete)",
      "User authentication and role-based access",
      "Payment gateway integration with Xendit for paid webinars",
      "Admin panel for webinar and user management",
      "Responsive UI using Shadcn component library",
      "Team collaboration features and deployment workflows",
    ],
  },
  {
    id: 6,
    title: "Ventela Barabai",
    description: "Front-end and Back-end Developer role using Flutter and Firebase in a 5-person team.",
    longDescription:
      "Served as both Front-end and Back-end Developer for Ventela Barabai in a 5-person team. Built cross-platform mobile experiences using Flutter and managed data and real-time features using Firebase (Firestore and Authentication). Implemented app features including user authentication, data synchronization, and backend integrations to support the mobile app.",
    technologies: ["Flutter", "Firebase", "Cloud Functions", "Firestore", "Firebase Auth"],
    github: "https://github.com/Dotzler/VentelaBarabai",
    // image: "/assets/images/ventela.jpg",
    features: [
      "Cross-platform mobile app built with Flutter",
      "User authentication via Firebase Auth",
      "Realtime data syncing with Firestore",
      "Backend logic with Firebase Cloud Functions",
      "Offline support and data persistence",
      "Collaborative team development (5 members)",
    ],
  },
  {
    id: 7,
    title: "Sneaker Space",
    description: "Mobile e-commerce app for buying and selling a wide variety of sneakers.",
    longDescription:
      "Sneaker Space is a cross-platform mobile marketplace for sneaker enthusiasts. I worked on both front-end and back-end aspects, building product catalogs, shopping cart and checkout flows, and order management. The app supports browsing, searching, wishlists, and secure payments. Implemented real-time features and push notifications via Firebase to keep users informed about order status and promotions.",
    technologies: ["Flutter", "Firebase", "Cloud Functions", "Firestore", "Firebase Auth"],
    github: "https://github.com/Seosootang/SportifyGear",
    image: "/assets/images/sneakerspace.jpg",
    features: ["Product catalog with search and filtering", "Shopping cart, checkout, and secure payments", "Order tracking and push notifications", "User wishlists and favorites", "Seller/product management dashboard"],
  },
  {
    id: 8,
    title: "SimuCourt",
    description: "Practicum website for the Faculty of Law (SimuCourt). Role: QA Tester",
    longDescription:
      "SimuCourt is a practicum web platform developed for the Faculty of Law at Universitas Muhammadiyah Malang. I contributed as a QA Tester and Technical Writer. Creating and executing test plans, reporting and verifying defects, writing test cases, and producing user and developer documentation to ensure a reliable practicum experience. The application uses React for the frontend and Laravel for backend APIs.",
    technologies: ["React", "Laravel", "PHP", "MySQL"],
    image: "/assets/images/simucourt.png",
    features: [
      "Practicum management and case simulation features",
      "QA testing: test plans, test cases, and bug reporting",
      "Technical writing: user guides and developer documentation",
      "Integration between React frontend and Laravel APIs",
      "Accessibility and reliability focus for student use",
      "Collaboration with faculty and students for requirements",
    ],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <Threads color={[1, 1, 1]} amplitude={1} distance={0.1} />
      </div>
      <div className="relative z-10">
        <Header title="Berryl Abyantara" />
        <Hero name="Berryl Abyantara" title="Back-end Developer" description="Welcome to my personal website👋" />
        <About />
        <Projects projects={projectsData} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
