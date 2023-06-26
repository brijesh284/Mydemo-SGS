window.onload = () => {
  let persons = document.querySelectorAll('.person');
  let person = document.querySelector('.persons');
  let overlay = document.querySelector('.overlay');
  let card = document.querySelector('.card');
  let closeBtn = document.querySelector('#closeBtn');
  let backgroung = window.backgroung;

  let data = [
    {
      name: 'Filip Barilić',
      position: 'IT Specialist',
      description:
        'Filip is a student at Algebra University, currently majoring Bachelor’s in a field of Digital Marketing in Zagreb. Ever since he started studying, Filip was perfecting his IT skills. He is a hard-working, reliable and responsible type of person who takes ownership of situations, and someone who is not afraid of a difficult challenge.',
    },
    {
      name: 'Lidija Lovrić',
      position: 'Senior Account Manager',
      description:
        'With a master’s degree in Business & Economics from the University of Zagreb, majoring in International Trade, Lidija had the experience of working for various departments of multiple companies before moving to Germany in 2019. In Germany, she was the Store Supervisor for Primark, an Irish multinational fashion retailer with headquarters in Dublin, Ireland. Working in Germany, she became fluent in both German and English and perfectly fits the role of the Senior Account Manager for the entire DACH region. In addition to her sales skills, she is also skilled in Project Management and Team Management. ',
    },
    {
      name: 'Maja Pekas',
      position: 'Investment Relations Manager',
      description:
        'Always having a smile on her face, Maja is experienced in customer-facing roles as well as organizing business. She loves to observe human behavior and how we perceive the world. Storytelling researcher and enthusiast, just ask her a question related to storytelling, and she’ll talk about it for hours. She has finished an e-leadership MBA at Algebra University and is already making new plans to continue her education. Always active, if she isn’t in her high heels, she is probably in her sneakers jogging, hiking, or exploring nature.',
    },
    {
      name: 'Luka Vuković',
      position: ' Head of Operations & IT',
      description:
        'Holding a master’s degree in Industrial engineering and a Google project management certificate Luka has more than 10 years of experience leading various technical teams and 5 years of experience as a hardware/software startup-company CEO, where he has built the company around his patent and led the product development from start to selling it on 3 different continents. On top of that, Luka has experience serving as a chairman and a board member in two public companies and as a president of the local basketball club where he actively played.His drive is to build fantastic products that, eventually, millions will use.',
    },
    {
      name: 'Markus Borlinghaus',
      position: 'CEO',
      description:
        'Inventor of DaaS“Has decades of experience in Corporate Leadership and working at executive level positions in Cisco Systems, Juniper Networks, Microsoft, Xerox and ATI.Successfully co-built two startups: Peribit Networks (sold to Juniper Networks) and Whale Communications (sold to Microsoft).',
    },
    {
      name: 'Kristina Šmidt Grancarić',
      position: 'CSO',
      description:
        '“Kristina oversees all revenue-generating activities, including sales, channel partnerships and development, and customer experience.Her career includes 20 years of international work experience in Engineering, DIY and Fashion Retail in the D/A/CH region.”',
    },
    {
      name: 'Tara Maya Mammen',
      position: 'Talent Searcher',
      description:
        '“Since working at SGS I discovered the joy of achieving my personal goals. Most importantly, Mornings are easy to survive when sharing them with great co-workers.”',
    },
    {
      name: 'Marko Piljagić',
      position: 'Digital Designer',
      description: `Marko is a student, currently majoring a Master’s degree in a field of Graphic Design in Zagreb, where he acquired a Bachelor’s degree in Graphic Product Design. He is professionally skilled in Adobe suit of programs, video montage and 3D modeling. Over the course of the last four years since he started his education, he acquired experience in a field of graphic finishing such as printing industry as well as automotive film wrap market. In love with creating digital and traditional art.`,
    },
    {
      name: 'Doroteja Petravić',
      position: 'Senior Account Manager',
      description:
        '“Doroteja is an experienced Senior Account Manager at Scalable Global Solutions for the UK and Ireland region. She has a Master’s degree from the University of Zagreb and her skill set includes identifying clients’ business needs, consulting & providing support, negotiation, content creation, and coordinating business activities with her teammates.With 10 years of experience in sales, she was also a team leader in one of the country’s most extensive fitness facilities. Doroteja was responsible for business development and ensuring smooth operational day-to-day activities.Outside of the office, you can find Doroteja cheering on her husband playing football and practicing yoga.”',
    },
    {
      name: 'Anja Buneta',
      position: 'Talent Searcher',
      description:
        '“Final year sociology student studying Management and public policy. Because of my interest in HR, I have started working at this position in hopes of gaining experience and knowledges in the field. Motivated, eager to learn and a quick learner.”',
    },
    {
      name: 'Dario Ivanović',
      position: 'Talent Searcher',
      description:
        '“Dario is 25 years old psychology student who works as Talent Searcher and is interested in organizational psychology.”',
    },
    {
      name: 'Lidija Lovrić',
      position: 'Senior Account Manager',
      description:
        '“With a master’s degree in Business & Economics from the University of Zagreb, majoring in International Trade, Lidija had the experience of working for various departments of multiple companies before moving to Germany in 2019. In Germany, she was the Store Supervisor for Primark, an Irish multinational fashion retailer with headquarters in Dublin, Ireland. Working in Germany, she became fluent in both German and English and perfectly fits the role of the Senior Account Manager for the entire DACH region. In addition to her sales skills, she is also skilled in Project Management and Team Management. “',
    },
    {
      name: 'Lidija Lovrić',
      position: 'Senior Account Manager',
      description:
        '“With a master’s degree in Business & Economics from the University of Zagreb, majoring in International Trade, Lidija had the experience of working for various departments of multiple companies before moving to Germany in 2019. In Germany, she was the Store Supervisor for Primark, an Irish multinational fashion retailer with headquarters in Dublin, Ireland. Working in Germany, she became fluent in both German and English and perfectly fits the role of the Senior Account Manager for the entire DACH region. In addition to her sales skills, she is also skilled in Project Management and Team Management. “',
    },
    {
      name: 'Lidija Lovrić',
      position: 'Senior Account Manager',
      description:
        '“With a master’s degree in Business & Economics from the University of Zagreb, majoring in International Trade, Lidija had the experience of working for various departments of multiple companies before moving to Germany in 2019. In Germany, she was the Store Supervisor for Primark, an Irish multinational fashion retailer with headquarters in Dublin, Ireland. Working in Germany, she became fluent in both German and English and perfectly fits the role of the Senior Account Manager for the entire DACH region. In addition to her sales skills, she is also skilled in Project Management and Team Management. “',
    },
    {
      name: 'Lidija Lovrić',
      position: 'Senior Account Manager',
      description:
        '“With a master’s degree in Business & Economics from the University of Zagreb, majoring in International Trade, Lidija had the experience of working for various departments of multiple companies before moving to Germany in 2019. In Germany, she was the Store Supervisor for Primark, an Irish multinational fashion retailer with headquarters in Dublin, Ireland. Working in Germany, she became fluent in both German and English and perfectly fits the role of the Senior Account Manager for the entire DACH region. In addition to her sales skills, she is also skilled in Project Management and Team Management. “',
    },
    {
      name: 'Lidija Lovrić',
      position: 'Senior Account Manager',
      description:
        '“With a master’s degree in Business & Economics from the University of Zagreb, majoring in International Trade, Lidija had the experience of working for various departments of multiple companies before moving to Germany in 2019. In Germany, she was the Store Supervisor for Primark, an Irish multinational fashion retailer with headquarters in Dublin, Ireland. Working in Germany, she became fluent in both German and English and perfectly fits the role of the Senior Account Manager for the entire DACH region. In addition to her sales skills, she is also skilled in Project Management and Team Management. “',
    },
    {
      name: 'Lidija Lovrić',
      position: 'Senior Account Manager',
      description:
        '“With a master’s degree in Business & Economics from the University of Zagreb, majoring in International Trade, Lidija had the experience of working for various departments of multiple companies before moving to Germany in 2019. In Germany, she was the Store Supervisor for Primark, an Irish multinational fashion retailer with headquarters in Dublin, Ireland. Working in Germany, she became fluent in both German and English and perfectly fits the role of the Senior Account Manager for the entire DACH region. In addition to her sales skills, she is also skilled in Project Management and Team Management. “',
    },
    {
      name: 'Lidija Lovrić',
      position: 'Senior Account Manager',
      description:
        '“With a master’s degree in Business & Economics from the University of Zagreb, majoring in International Trade, Lidija had the experience of working for various departments of multiple companies before moving to Germany in 2019. In Germany, she was the Store Supervisor for Primark, an Irish multinational fashion retailer with headquarters in Dublin, Ireland. Working in Germany, she became fluent in both German and English and perfectly fits the role of the Senior Account Manager for the entire DACH region. In addition to her sales skills, she is also skilled in Project Management and Team Management. “',
    },
    {
      name: 'Lidija Lovrić',
      position: 'Senior Account Manager',
      description:
        '“With a master’s degree in Business & Economics from the University of Zagreb, majoring in International Trade, Lidija had the experience of working for various departments of multiple companies before moving to Germany in 2019. In Germany, she was the Store Supervisor for Primark, an Irish multinational fashion retailer with headquarters in Dublin, Ireland. Working in Germany, she became fluent in both German and English and perfectly fits the role of the Senior Account Manager for the entire DACH region. In addition to her sales skills, she is also skilled in Project Management and Team Management. “',
    },
    {
      name: 'Lidija Lovrić',
      position: 'Senior Account Manager',
      description:
        '“With a master’s degree in Business & Economics from the University of Zagreb, majoring in International Trade, Lidija had the experience of working for various departments of multiple companies before moving to Germany in 2019. In Germany, she was the Store Supervisor for Primark, an Irish multinational fashion retailer with headquarters in Dublin, Ireland. Working in Germany, she became fluent in both German and English and perfectly fits the role of the Senior Account Manager for the entire DACH region. In addition to her sales skills, she is also skilled in Project Management and Team Management. “',
    },
    {
      name: 'Lidija Lovrić',
      position: 'Senior Account Manager',
      description:
        '“With a master’s degree in Business & Economics from the University of Zagreb, majoring in International Trade, Lidija had the experience of working for various departments of multiple companies before moving to Germany in 2019. In Germany, she was the Store Supervisor for Primark, an Irish multinational fashion retailer with headquarters in Dublin, Ireland. Working in Germany, she became fluent in both German and English and perfectly fits the role of the Senior Account Manager for the entire DACH region. In addition to her sales skills, she is also skilled in Project Management and Team Management. “',
    },
    {
      name: 'Lidija Lovrić',
      position: 'Senior Account Manager',
      description:
        '“With a master’s degree in Business & Economics from the University of Zagreb, majoring in International Trade, Lidija had the experience of working for various departments of multiple companies before moving to Germany in 2019. In Germany, she was the Store Supervisor for Primark, an Irish multinational fashion retailer with headquarters in Dublin, Ireland. Working in Germany, she became fluent in both German and English and perfectly fits the role of the Senior Account Manager for the entire DACH region. In addition to her sales skills, she is also skilled in Project Management and Team Management. “',
    },
    {
      name: 'Alexis Samohod',
      position: 'HR Generalist',
      description:
        '“Master in Business Administration from Centrum PUCP (Peru) and Eada Business School (Barcelona), with an achieved Magna cum laude recognition and Beta Gamma Sigma (BGS) Member. Ten years of experience in HR and Recruitment for the IT, mining, and construction sectors. Managing high-performance work teams for more than 20 projects across LATAM and Europe.”',
    },
    {
      name: 'Ioana Moldovan',
      position: 'Senior Talent Acquisition Manager',
      description:
        '“Ioana is part of the Recruitment team at Scalable Global Solutions. She has studied Economics at Petru Maior University in Romania and has worked in various industries i.e. Travel, Music, Recruitment with her most extensive expertise being in Human Resources, particularly IT Recruitment. She enjoys working with people and is always eager to find the right people for SGS and our clients. She is looking forward to help create our company into a strong, trustworthy and a very nice environment for people to work in.”',
    },
    {
      name: 'Paulina Kowalczyk',
      position: 'Content Creator and Social Media Coordinator',
      description:
        'Paulina is a vibrant and passionate member of the marketing team at SGS. She brings a diverse professional background to her role, having gained experience in various sectors such as travel, customer service, and marketing. With a keen interest in marketing and social media, Paulina is always on the lookout for new ways to develop her skills in these areas. She enjoys taking courses on marketing, social media, and manual testing to stay up-to-date with the latest trends and best practices. She is creative and innovative mindset is one of her greatest strengths, and she is always full of ideas. Her positive energy and enthusiasm are contagious, and she can often be seen with a smile on her face.',
    },
    {
      name: 'Naho Kawaguchi',
      position: 'Operations Specialist',
      description:
        'Naho is a well-organized, disciplined, and open-minded employee. Her mission is to organize and optimize the company structure and the business process, manage, and execute them as Operations specialist. With her analytical and logical thinking, she always tries to find beneficial and best solutions for the company. She is from Japan, studied Arabic in Middle Eastern countries, worked in both private and public sectors and built her unique career in multi-cultural backgrounds.',
    },
    {
      name: 'Valentina Jazbec',
      position: 'Business Support Manager',
      description:
        'Valentina is an economist who started at SGS as a student and she’s our full-time employee now. She interfaces with clients, managing their needs and demands, and coordinating between departments.She is passionate about organization, teamwork, and new projects.She thrives on challenges and constantly sets goals for herself, always looking for an opportunity to do better and achieve greatness.',
    },
    {
      name: 'Marko Dubroja',
      position: 'Investor Relations Manager',
      description:
        'Marko is an accomplished and agile startup enthusiast, leading the Investment Team. With practical industry experience, ranging from gaming to quality assurance, and a Masters’ degree in finance from VERN University, he has the “out-of-the-box” mentality to achieve his team and company goals. Marko excels at cross-department projects, organises brainstorming sessions and has helped secure critical investments for the company.',
    },
    {
      name: 'Mirta Radić',
      position: 'Channel Account Specialist',
      description:
        'Mirta Radić is a career advisor turned Channel Account Specialist, currently finishing her Master’s in Business Economics and Globalization. With a strong background in communication, teamwork, and problem-solving, she brings valuable expertise to building and managing relationships with key channel partners. Mirta’s dedication, drive, and passion for excellence make her an invaluable member of her team.',
    },
    {
      name: 'Borna Smolčić',
      position: 'Junior Channel Account Manager',
      description:
        'With a background in Sales and Account Management, he brings exceptional communication skills and a steadfast drive to achieve monthly KPIs while remaining aligned with the company’s goals. He also has a background in HR, which has given him a unique perspective on understanding and meeting the needs of both clients and employees. He thrives in environments that encourage continuous learning and adaptability, enabling him to establish and cultivate successful business relationships with clients while effectively promoting and selling products.',
    },
    {
      name: 'Marko Klenović',
      position: 'Channel Account Manager',
      description:
        'Marko has a career that spans for more than 20 years, working with European companies in areas of business development, consulting and market research. He has been working for the French Ministry of Economy, the Economic Office within the French Embassy in Croatia. He spent the other half of his professional life as Head of a bilateral Franco-Croatian Chamber of Commerce and Industry. Perfectly fluent in English and French with basics in German, Italian and Russian, Marko also has a strong background in office, administration, project and event management as well as PR.',
    },
    {
      name: 'Mohammed Ghareeb',
      position: 'Senior Software Developer',
      description:
        'Mohammed is a senior software engineer with more than 5 years of experience in software development. Mohammed worked in many industries like supply chain , ecommerce , point of sale applications.Using many technologies like Python, Odoo ,php , Wordpress etc.',
    },
    {
      name: 'Vedran Barić',
      position: 'Office Assistant',
      description:
        'Vedran studies Finance at the Faculty of Economics and Business in Zagreb. He is goal-oriented, passionate, and dedicated to achieving his objectives. As a team member, he is a valuable asset, known for his collaborative and supportive nature. He is always eager to learn and take on new challenges, demonstrating a strong work ethic and a positive attitude. Overall, he is an ambitious and talented individual. When not in the office, you can find him on a basketball court.',
    },
  ];

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      person.style.transform = 'scale(1)';
      setTimeout(() => {
        persons.forEach(p => (p.style.opacity = '1'));
        backgroung.classList.remove('opacity-0');
        person.classList.remove('top-[15vw]');
        startEvents();
      }, 100);
    }
  });
  const inEvent = (e, index) => {
    // backgroung.setAttribute('src',`assets/images/organization members/bg-${index+1}.png`);
    persons[index].style.transform = 'scale(1.2)';
  };
  const outEvent = index => {
    // backgroung.setAttribute('src',`assets/images/organization members/bg.png`);
    persons[index].style.transform = 'scale(1)';
  };

  const startEvents = () => {
    persons.forEach((p, i) => {
      const mousemoveHandler = e => inEvent(e, i);
      const mouseleaveHandler = () => outEvent(i);

      p.addEventListener('mousemove', mousemoveHandler);
      p.addEventListener('mouseleave', mouseleaveHandler);

      p.addEventListener('click', () => {
        // p.removeEventListener('mousemove', mousemoveHandler);
        // p.removeEventListener('mouseleave', mouseleaveHandler);
        if (i < 11 || i > 21) {
          overlay.style.zIndex = 20;
          $(card).fadeIn();
          $(card)
            .find('img')
            .attr(
              'src',
              `assets/images/organization members/person-${i + 1}.png`
            );
          backgroung.setAttribute(
            'src',
            `assets/images/organization members/bg-${i + 1}.png`
          );

          $(card).find('.name').text(data[i].name);
          $(card).find('.position').text(data[i].position);
          $(card).find('.description').text(data[i].description);
          persons.forEach(person => (person.style.display = 'none'));
          hideSectionHandler();
        }
      });
    });
  };
  function hideSectionHandler() {
    closeBtn &&
      closeBtn.addEventListener('click', () => {
        $(card).fadeOut();
        backgroung.setAttribute(
          'src',
          `assets/images/organization members/bg.png`
        );
        overlay.style.zIndex = -1;
        persons.forEach(person => (person.style.display = 'block'));
        startEvents();
      });
  }
};
