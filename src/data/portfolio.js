import aaImage from "../assets/images/aa.jpg";
import amautobuyImage from "../assets/images/amautobuyImage.png";
import portImage from "../assets/images/portImage.png";
import medCare from "../assets/images/medCare.png";
import silverCrest from "../assets/images/silverCrest.png";
import nikeclone from "../assets/images/nikeclone.png";
const portfolioData = [
  {
    title: "Amautobuy E-commerce Platform",
    description: "automotive parts e-commerce platform.",
    image: amautobuyImage, // Make sure to import this image
    technologies: ["React", "Node.js", "MongoDB", "Redis"],
    tags: ["web", "ecommerce"],
    liveUrl: "https://amautobuy.com",
    codeUrl: "https://github.com/yourusername/amautobuy",
  },
  {
    title: "Medcare",
    description:
      "Modern healthcare web platform with doctor booking, service info, and blog integration.",
    image: medCare,
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    tags: ["web"],
    liveUrl: "https://med-care-six.vercel.app/", // Replace with actual live link
    codeUrl: "https://github.com/yourusername/medcare", // Replace with actual repo
  },

  {
    title: "Portfolio Website",
    description:
      "Modern and responsive portfolio design for a creative professional.",
    image: portImage,
    technologies: ["React", "Node.js", "Figma"],
    tags: ["design"],
    liveUrl: "https://kharageousportfolio.vercel.app/",
  },
  {
    title: "Silver Crest Orphanage Website",
    description:
      "A static informational website designed for the Silver Crest Orphanage Mission, showcasing their history, services, and contact details.",
    image: silverCrest, // Replace with your imported image variable or path
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: ["web"],
    liveUrl: "https://kharageous.github.io/SilverCrest/", // Replace with your actual GitHub Pages URL
    codeUrl: "https://github.com/yourusername/SilverCrest",
  },

  // Project info object
  {
    title: "Nike Clone",
    description:
      "A modern e-commerce website replicating Nike's online store with product browsing, cart, and checkout functionality.",
    image: nikeclone,
    technologies: ["React", "Redux", "Firebase", "Stripe"],
    tags: ["web", "e-commerce"],
    liveUrl: "https://nike-clone-beta.vercel.app/",
    codeUrl: "https://github.com/yourusername/NikeClone",
  },

  {
    title: "Restaurant Booking System",
    description:
      "Online reservation system for restaurants with table management.",
    image: aaImage,
    technologies: ["Vue.js", "Node.js", "MySQL"],
    tags: ["web"],
    liveUrl: "https://restaurant-booking-demo.com",
    codeUrl: "https://github.com/yourusername/restaurant-booking",
  },
];

export default portfolioData;
