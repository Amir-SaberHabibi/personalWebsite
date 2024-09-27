import project1 from "../assets/projects/metaml_logo.jpg";
import project2 from "../assets/projects/graph.jpg";
import project3 from "../assets/projects/simplex_bg.png";
import project4 from "../assets/projects/space.jpg";

export const HERO_CONTENT = `Amir Saberhabibi is an enthusiast in Machine Learning, Generative AI, Software Engineering, and Natural Language Processing. His primary interest lies in information retrieval using advanced NLP methodologies, where he explores how these techniques can enhance understanding and extraction of information. He has substantial experience working with LLMs, leveraging their capabilities to tackle complex problems across various domains, including software ecosystems analysis. Amir's work involves applying LLMs to improve data processing, derive insights, and contribute to innovative solutions in these fields.`;
export const ABOUT_TEXT = `Amir Saberhabibi holds a B.Sc. in Computer Science from the University of Guilan, Iran. He had the privilege of serving as an Undergraduate Teaching Assistant and Research Assistant, working in diverse areas of AI research, where he designed and developed pipelines based on the Proof of Concept (POC) research methodology. Amir is committed to fully dedicating himself to the things he prioritizes in life and remains unwavering in his pursuit of his dreams, rewarding himself only when those goals are achieved.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Research Assistant",
    title: "AI-Driven Decision Models in SE",
    company: "Uni. of Guilan & Utrecht Uni.",
    description: `This master’s project explores software ecosystems by analyzing common software package combinations, technologies, and code idioms. It results in a context-aware software package recommender system that functions, using an integration of retrieval-augmented generation (RAG) and a knowledge graph design.`,
    technologies: ["Mining Software Repositories","Knowledge Graphs", "NLP", "LLMs"],
  },
  {
    year: "2022 - 2023",
    role: "Research Assistant",
    title: "Migration from Monolithic Apps to Microservices",
    company: "Uni. of Guilan",
    description: `Implementing a DBSCAN-based method to decompose Monolithic applications to Microservices, while applying Natural Language Processing techniques and methodologies as a key component for semantic-linking of the application features, to create a well-structured microservice architecture.`,
    technologies: ["Application Development", "Microservices", "Clustering", "NLP"],
  },
  {
    year: "2023 - 2024",
    role: " Teaching Assistant",
    title: "Database Design (SQL) Course Assistantship",
    company: "Uni. of Guilan",
    description: `Provided guidance for students to design ERD and SQL Querying (Fundamentals and practical level).`,
    technologies: ["Database", "SQL", "ERD", "Teaching"],
  },
  {
    year: "2021 - 2023",
    role: " Teaching Assistant",
    title: "Advanced (Python) Programming Assistantship",
    company: "Uni. of Guilan",
    description: `As a member of the teaching assistants team for the 'Advanced Programming' course over four semesters (AP14001, AP14002, AP14011, AP14012), I facilitated the comprehension of Python programming components for around 60 students.`,
    technologies: ["Teaching", "Python", "GitHub", "Git"],
  },

];

export const PROJECTS = [
  {
    title: "MetaML",
    image: project1,
    link: "https://metaml.streamlit.app/",
    description:"a Metaheuristic-based neural network optimization tool for training A.N.Ns, using different optimization algorithms (Backpropagation, Genetic Algorithm, and Particle Swarm Optimization). The results could be analyzed to retrieve insights using the Llama3-70b Large Language Model.",
    technologies: ["Deep Learning", "Machine Learning", "Neural Networks", "Optimization"],
  },
  {
    title: "Word Embedding Explorer",
    image: project4,
    link: "https://word-embedding-explorer.streamlit.app/",
    description:"An interactive Streamlit web app for exploring and visualizing word embeddings using pre-trained models like GloVe, Word2Vec, and FastText. Users can intuitively search for words and view their relationships in interactive plots. ",
    technologies: ["Word Embedding", "Vectorization", "Word Analogy", "NLP"],
  },
  {
    title: "Network Traffic Flow Analysis",
    image: project2,
    link: "https://ntfaproject.streamlit.app/",
    description:"A Graph-based Integration of Network Traffic Flow Analysis (Case Study on Unicauca Network Flows Dataset). This project aims to provide tools for better network analysis and visualization using graph-based algorithms (currently Dijkstra)",
    technologies: ["Graph Algorithms", "Data Science", "NetworkX", "Shortest Path Algorithms"],
  },
  {
    title: "OPT-Simplex",
    link: "https://github.com/Amir-SaberHabibi/OPT-Simplex",
    image: project3,
    description:
      "a Python-based project designed to solve linear programming problems using the Simplex optimization method. This project provides a comprehensive implementation that supports both maximization and minimization problems, making it versatile for various optimization needs. ",
    technologies: ["Python", "Linear Optimization", "Linear Programming"],
  },
];

export const CONTACT = {
  // address: "",
  // phoneNo: "",
  email: "amiirsbr@gmail.com",
};
