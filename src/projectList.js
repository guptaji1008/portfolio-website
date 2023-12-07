const projectList = [
  {
    id: 1,
    name: "SHOPPER'S",
    about: [
      "This is a full stack project, made with MERN (Mongodb, Express, React, Node) technologies.",
      "Used Bootstrap, and React-bootstrap for designing the UI.",
      "Sign In, Sign Up and Log Out with perfect authentication and authorization process, is been provided in this web app.",
      "This website contains two different interface, one for normal user and one for admin.",
      "One can add review, read everone's review, update own review and delete own review.",
      "Admin can add product, update product information, watch all products and remove specific product.",
      "Used cloudinary to store products image on cloud.",
      "Add to cart system from where to shipping and upto payment using payPal.",
      "This web application is perfectly responsive ie, suitable for any device.",
    ],
    imageUrl: "/project1.png",
    skillUsed: ["Mongodb","Express","React","Bootstrap","Redux-toolkit","React-redux"],
    youtubeLink: "https://www.youtube.com/embed/NKOD-UDxpcE",
    githubLink: {
      frontend: "https://github.com/guptaji1008/frondend.git",
      backend: "https://github.com/guptaji1008/backend.git",
    },
    deployLink: "https://shopisz.netlify.app"
  },
  {
    id: 2,
    name: "Book Movie",
    about: [
      "This is a project with MERN technologies.",
      "Basically this is a backend project made with express, mongodb to just test skills",
      "One can book movie, seat type, no. of seats.",
      "One can watch history on booking."
    ],
    imageUrl: "/project2.png",
    skillUsed: ["Mongodb","Express","React","Mongoose"],
    youtubeLink: "https://youtube.com/embed/fN4-OvyVApo",
    githubLink: {
      frontend: "https://github.com/guptaji1008/client.git",
      backend: "https://github.com/guptaji1008/server.git",
    },
    deployLink: "https://bookmoviez.netlify.app"
  },
  {
    id: 3,
    name: "PORTFOLIO",
    about: [
      "This is a front end project, made with React (a JavaScript library).",
      "Used tailwind CSS for designing the UI.",
      "Used React router for easy navigation.",
      "This web application is perfectly responsive ie, suitable for any device.",
    ],
    imageUrl: "/project3.png",
    skillUsed: ["React","React-router","Tailwind CSS"],
    youtubeLink: "https://www.youtube.com/embed/NKOD-UDxpcE",
    githubLink: {
      frontend: "https://github.com/guptaji1008/frondend.git",
      backend: "https://github.com/guptaji1008/backend.git",
    },
    deployLink: "https://myportfoliowebdev.netlify.app"
  },
  {
    id: 4,
    name: "RESUMER'Z",
    about: [
      "This is a front end project, made with React (a JavaScript library).",
      "Used Material UI and CSS for designing the UI.",
      "Used React router for easy navigation.",
      "Used Redux and React-redux for global state management.",
      "After completion, one can preview and can download his/her resume.",
    ],
    imageUrl: "/project4.png",
    skillUsed: ["React","Material UI","React-router","Redux","React-redux"],
    youtubeLink: "https://youtube.com/embed/MiVgm8D508Q",
    githubLink: {
      frontend: "https://github.com/guptaji1008/resume-builder.git",
    },
    deployLink: "https://myresumerz.netlify.app"
  },
];

export default projectList;
