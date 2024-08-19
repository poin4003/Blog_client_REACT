import React, { createContext, useContext, useState } from 'react';
import dayjs from 'dayjs';

const BlogContext = createContext();

export const useBlogContext = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    {
        "id": 5,
        "title": "Exploring Quantum Computing",
        "category": "Technology",
        "author": "alex",
        "view": 75,
        "createOn": "2023-03-15",
        "content": "Quantum computing represents a revolutionary shift from classical computing. Unlike traditional computers that use bits as the smallest unit of data, quantum computers use qubits, which can exist in multiple states simultaneously. This property, known as superposition, along with entanglement, allows quantum computers to process vast amounts of data and solve complex problems at speeds unimaginable with classical computers. This guide will delve into the principles of quantum mechanics, explore the architecture of quantum processors, and examine real-world applications such as cryptography, optimization, and drug discovery.",
        "image": "https://th.bing.com/th/id/OIP.VweJuj7drkYkoR3bnj_v2QHaD3?rs=1&pid=ImgDetMain"
    },
    {
        "id": 6,
        "title": "The Future of AI: Predictions and Possibilities",
        "category": "Technology",
        "author": "mia",
        "view": 120,
        "createOn": "2023-05-22",
        "content": "Artificial Intelligence (AI) is rapidly advancing, and its future holds both exciting opportunities and complex challenges. This article explores predictions about the next decade in AI, including advancements in machine learning, natural language processing, and autonomous systems. We will discuss how AI might transform industries such as healthcare, finance, and transportation. Additionally, we will consider ethical implications, including data privacy concerns and the potential impact on employment. By examining current trends and expert forecasts, this piece provides a comprehensive look at where AI is headed and how it could shape our world.",
        "image": "https://th.bing.com/th/id/R.726f16ec70d5b22eb63cce5d71e589c7?rik=8yiPZi3xJf%2fmYQ&pid=ImgRaw&r=0"
    },
    {
        "id": 7,
        "title": "Building Your First AR App",
        "category": "Technology",
        "author": "jordan",
        "view": 65,
        "createOn": "2023-07-10",
        "content": "Augmented Reality (AR) has transformed the way we interact with the digital world, overlaying virtual elements onto our physical environment. This tutorial provides a step-by-step guide to creating your first AR app, from conceptualization to deployment. We'll start with setting up your development environment and selecting the right tools and frameworks, such as Unity and ARKit/ARCore. The guide covers designing intuitive user interfaces, integrating AR functionalities, and testing your app on various devices. Whether you're developing a gaming app or an educational tool, this comprehensive guide will help you bring your AR vision to life.",
        "image": "https://2.bp.blogspot.com/-qw4eJqgyBBc/Wz9DAfGhtxI/AAAAAAAAANw/fRvcZiHoTpkq-gFVWu0dWhzxqtGqm0cCwCLcBGAs/s1600/AR.jpg"
    },
    {
        "id": 8,
        "title": "The Art of Cybersecurity",
        "category": "Technology",
        "author": "casey",
        "view": 90,
        "createOn": "2023-01-30",
        "content": "Cybersecurity is a critical field focused on protecting systems, networks, and data from digital attacks. This article explores the various aspects of cybersecurity, including threat identification, risk management, and defensive strategies. We will delve into the latest trends and technologies, such as artificial intelligence in threat detection, blockchain for secure transactions, and ethical hacking. The article also covers the importance of cybersecurity policies, employee training, and the role of regulations in safeguarding information. By understanding these elements, you'll gain insight into the complex landscape of cybersecurity and how to effectively protect your digital assets.",
        "image": "https://www.mea-markets.com/wp-content/uploads/2021/01/cybersecurity.jpg"
    },
    {
        "id": 9,
        "title": "Mars Colonization: A Practical Approach",
        "category": "Aerospace",
        "author": "taylor",
        "view": 85,
        "createOn": "2023-02-25",
        "content": "Colonizing Mars is one of the most ambitious goals of space exploration. This article examines the practicalities involved in establishing a human settlement on the Red Planet. Topics include the challenges of life support systems, habitat construction, and the sustainability of resources. We will explore proposed technologies for terraforming, energy production, and transportation. Additionally, the article discusses potential solutions to the health risks posed by prolonged exposure to low gravity and radiation. By analyzing current research and future missions, this piece provides a roadmap for humanity's journey to Mars.",
        "image": "https://static.independent.co.uk/2020/10/05/15/mars%20full%20bright.jpg?quality=75&width=1200&auto=webp"
    },
    {
        "id": 10,
        "title": "The Physics of Space Travel",
        "category": "Aerospace",
        "author": "riley",
        "view": 100,
        "createOn": "2023-04-18",
        "content": "Space travel relies on understanding and applying the fundamental principles of physics. This article provides a detailed overview of the key concepts, including propulsion mechanisms, orbital mechanics, and relativistic effects. We will discuss the physics behind rocket engines, gravity assists, and the challenges of traveling at near-light speeds. The guide also covers recent advancements in propulsion technologies, such as ion drives and nuclear thermal engines. By examining these principles and technologies, you'll gain a deeper appreciation of the science that makes space exploration possible.",
        "image": "https://th.bing.com/th/id/OIP.LKXsF1PVsP4xajF_87FnPQHaEK?rs=1&pid=ImgDetMain"
    },
    {
        "id": 11,
        "title": "Satellites and Their Impact on Modern Life",
        "category": "Aerospace",
        "author": "jamie",
        "view": 70,
        "createOn": "2023-06-05",
        "content": "Satellites play a crucial role in modern society, influencing various aspects of daily life. This article explores the impact of satellites on communication, weather forecasting, navigation, and global security. We will discuss how satellite technology enables everything from GPS systems and satellite TV to climate monitoring and disaster response. The guide also covers the evolution of satellite technology, including the transition from geostationary to low Earth orbit satellites. By understanding the integral role of satellites, you'll appreciate how they enhance connectivity and provide critical data for decision-making.",
        "image": "https://th.bing.com/th/id/R.c968e6e11a06bf51b32a81eaca0f5050?rik=zn%2bc5518TsWJTw&riu=http%3a%2f%2fwww.nasa.gov%2fsites%2fdefault%2ffiles%2fthumbnails%2fimage%2fgallery-satellite_68-3.jpg&ehk=XTlLnVOmGV7xeqqQGnFtvWAKhfib8EJOB7brLPuQHs4%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        "id": 12,
        "title": "Advancements in Rocket Propulsion",
        "category": "Aerospace",
        "author": "alex",
        "view": 55,
        "createOn": "2023-08-12",
        "content": "Rocket propulsion is at the heart of space exploration, and recent advancements are pushing the boundaries of what's possible. This article delves into the latest developments in propulsion technologies, including chemical rockets, electric propulsion, and emerging nuclear options. We will explore the principles behind each type of propulsion and how they contribute to mission success. The guide also discusses the challenges associated with developing new propulsion systems and their potential applications for future space missions. By understanding these advancements, you'll gain insight into the future of space travel and exploration.",
        "image": "https://th.bing.com/th/id/R.e02c9ff6526a72d17bfbd957c0f23e38?rik=RO4DAppX8wXxdQ&riu=http%3a%2f%2fesracsulb.weebly.com%2fuploads%2f4%2f2%2f7%2f6%2f42763647%2f862091456.gif&ehk=pxFk3TiyWSApS%2bbEfbZGKUROz3AGLyspi%2fXe3YYE14I%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        "id": 13,
        "title": "The Rise of Cyborgs: Fiction vs. Reality",
        "category": "Science Fiction",
        "author": "elena",
        "view": 80,
        "createOn": "2023-03-03",
        "content": "Cyborgs, or cybernetic organisms, have been a staple of science fiction for decades, depicting humans enhanced with mechanical parts. This article contrasts the fictional portrayals of cyborgs with current technological advancements in cybernetics. We'll explore iconic cyborgs from literature and film, such as the Terminator and RoboCop, and compare them with real-world innovations like prosthetics and neural implants. The piece also addresses the ethical and societal implications of integrating technology with the human body, considering both the potential benefits and concerns.",
        "image": "https://www.peterjoosten.org/wp-content/uploads/2021/08/Cyborg-Justice-League.png"
    },
    {
        "id": 14,
        "title": "Time Travel in Science Fiction: Possibilities and Paradoxes",
        "category": "Science Fiction",
        "author": "max",
        "view": 95,
        "createOn": "2023-04-20",
        "content": "Time travel is a popular concept in science fiction, offering intriguing narratives and complex paradoxes. This article examines how time travel is portrayed in literature, film, and television, highlighting key examples such as 'Back to the Future' and 'Doctor Who'. We will discuss the various theories of time travel, including wormholes and relativity, and the paradoxes that arise from them, such as the grandfather paradox. The guide also explores how these fictional portrayals influence our understanding of time and the potential for real-world time travel, based on current scientific theories.",
        "image": "https://th.bing.com/th/id/R.d1096cdd18c95e025e904f330d902118?rik=csGe8mD%2fELW%2bSA&pid=ImgRaw&r=0"
    },
    {
        "id": 15,
        "title": "AI and Alien Intelligence: Are We Ready?",
        "category": "Science Fiction",
        "author": "sara",
        "view": 110,
        "createOn": "2023-06-30",
        "content": "The idea of alien intelligence has long captivated science fiction enthusiasts, but what if we combined this with artificial intelligence? This article explores the hypothetical scenario of encountering extraterrestrial beings and how AI might play a role in understanding and interacting with them. We will examine various fictional accounts of alien contact, such as 'The Day the Earth Stood Still' and 'Arrival', and discuss the potential applications of AI in decoding alien communication and technology. Additionally, the guide considers the implications of such a discovery for humanity's future and our preparedness for such an encounter.",
        "image": "https://static0.srcdn.com/wordpress/wp-content/uploads/2018/01/Xenomorph-from-Alien-Covenant.jpg"
    },
    {
        "id": 16,
        "title": "The Evolution of Robots in Sci-Fi",
        "category": "Science Fiction",
        "author": "jake",
        "view": 85,
        "createOn": "2023-08-25",
        "content": "Robots have evolved significantly in science fiction, from clunky automatons to sophisticated artificial beings. This article traces the evolution of robots in science fiction, highlighting key works such as Isaac Asimov's 'I, Robot' and the film 'Ex Machina'. We will explore how these portrayals reflect societal attitudes towards technology and artificial intelligence, as well as their influence on real-world robotics research. The guide also discusses emerging trends in robotics and AI, and how they may shape future science fiction narratives and real-world applications.",
        "image": "https://th.bing.com/th/id/R.f351601470baf18ae326ac7a70257fcf?rik=qExjbGR5wm8K1A&riu=http%3a%2f%2ftorfrick.com%2fimages%2fBall.jpg&ehk=j62HUVu8h6Q9hI4IwiZc561WH77Yerqz8YmflMtVtS0%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        "id": 17,
        "title": "Virtual Reality Worlds: Beyond the Horizon",
        "category": "Technology",
        "author": "taylor",
        "view": 150,
        "createOn": "2023-09-14",
        "content": "Virtual Reality (VR) is not just a technology but a gateway to entirely new worlds and experiences. This article explores the potential of VR to transform various industries, including entertainment, education, and healthcare. We will delve into the development of immersive VR environments, from gaming and interactive simulations to virtual classrooms and therapeutic applications. The guide also addresses the technical challenges and innovations driving VR forward, such as advancements in haptic feedback, motion tracking, and graphics rendering. By examining the current state and future possibilities of VR, you'll gain insight into how this technology is reshaping our interaction with digital worlds.",
        "image": "https://th.bing.com/th/id/R.b89689b1fc89b6024b41127a036d5fc6?rik=0DbwzUoYYtJ%2fRQ&pid=ImgRaw&r=0"
    },
    {
        "id": 18,
        "title": "Bioengineering: The Next Frontier",
        "category": "Technology",
        "author": "casey",
        "view": 95,
        "createOn": "2023-07-05",
        "content": "Bioengineering is at the forefront of scientific innovation, merging biological principles with engineering techniques to solve complex problems. This article covers the latest advancements in bioengineering, including genetic modification, tissue engineering, and synthetic biology. We will explore how these technologies are being used to develop new medical treatments, enhance agricultural productivity, and create sustainable solutions for environmental challenges. The guide also discusses ethical considerations and potential risks associated with bioengineering, providing a balanced perspective on this rapidly evolving field.",
        "image": "https://th.bing.com/th/id/OIP.BkM-WOwZcYk2jdZuL1p19AHaE9?rs=1&pid=ImgDetMain"
    },
    {
        "id": 19,
        "title": "Space Tourism: What to Expect",
        "category": "Aerospace",
        "author": "jamie",
        "view": 105,
        "createOn": "2023-10-01",
        "content": "Space tourism is becoming an increasingly viable industry, offering the public a chance to experience space travel. This article provides an overview of what to expect from space tourism, including current options for suborbital and orbital flights. We will examine the technologies behind commercial space travel, such as spacecraft design, life support systems, and safety measures. The guide also covers the costs associated with space tourism and the potential impact on future space exploration missions. By understanding these aspects, you'll gain insight into the future of space tourism and its potential to make space accessible to more people.",
        "image": "https://th.bing.com/th/id/OIP.Rwt7gaacP2GHwrY9t0RVdgAAAA?rs=1&pid=ImgDetMain"
    },
    {
        "id": 20,
        "title": "Artificial Gravity and Its Applications",
        "category": "Aerospace",
        "author": "riley",
        "view": 60,
        "createOn": "2023-11-15",
        "content": "Artificial gravity is a concept that has captured the imagination of scientists and science fiction writers alike. This article explores the principles and technologies behind artificial gravity, including rotating spacecraft and electromagnetic fields. We will discuss the potential applications of artificial gravity in space stations and long-duration space missions, examining how it could address issues such as muscle atrophy and bone density loss experienced in microgravity environments. The guide also covers current research and theoretical models, providing a glimpse into how artificial gravity might become a reality in future space exploration.",
        "image": "https://th.bing.com/th/id/R.ecc46f73f0b52fb0429aaa45e4d58def?rik=JrlfxFbM7RoiqQ&pid=ImgRaw&r=0"
    }
  ]);

  const [filterCriteria, setFilterCriteria] = useState({});
  const [formData, setFormData] = useState({});
  const [formImage, setFormImage] = useState('');
  const [createForm, setCreateForm] = useState(null); 
  const [searchKeyword, setSearchKeyword] = useState('');

  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  const applyFilters = (filters) => {
    setFilterCriteria(filters);
  };

  const filteredBlogs = blogs.filter((blog) => {
    const { category, author, createOn } = filterCriteria;
    let isMatch = true;

    if (category) isMatch = isMatch && blog.category === category;

    if (author)
      isMatch = isMatch && blog.author.toLowerCase().includes(author.toLowerCase());

    if (createOn) {
      const blogDate = dayjs(blog.createOn);
      isMatch = isMatch && blogDate.isSame(createOn, 'day');
    }

    if (searchKeyword) 
      isMatch = isMatch && blog.title.toLowerCase().includes(searchKeyword.toLowerCase()); 

    return isMatch;
  });

  if (filterCriteria.sortByView) {
    filteredBlogs.sort((a, b) => {
      if (filterCriteria.sortByView === 'ascend') {
        return a.view - b.view;
      } else {
        return b.view - a.view;
      }
    });
  }

  return (
    <BlogContext.Provider
      value={{
        blogNotFilted: blogs,
        blogs: filteredBlogs,
        addBlog,
        formData,
        createForm,
        setFormData,
        formImage,
        setFormImage,
        applyFilters,
        setCreateForm,
        searchKeyword,
        setSearchKeyword 
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
