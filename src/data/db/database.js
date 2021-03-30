import Mock from '../mock';

const database = {
  information: {
    name: 'Nez Mustafa',
    aboutContent:
      'I am a web and app developer creating great clean user experiences for all devices.',
    age: '',
    phone: '',
    nationality: 'British',
    language: 'English',
    email: '',
    address: '',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/nez-mustafa-16b48918/',
      dribbble: '',
      github: 'https://github.com/nezmustafa123',
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/empty.pdf',
  },
  services: [
    {
      title: 'Web Design',
      icon: 'color-pallet',
      details:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.',
    },
    {
      title: 'Web Development',
      icon: 'code',
      details:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.',
    },
    {
      title: 'Mobile Development',
      icon: 'mobile',
      details:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.',
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.',
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company',
      },
    },
    {
      id: 2,
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.',
      author: {
        name: 'Susan Yost',
        designation: 'Client',
      },
    },
    {
      id: 3,
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client',
      },
    },
  ],
  skills: [
    {
      title: 'Wordpress',
      icon: 'wordpress',
      type: 'brand',
    },
    {
      title: 'HTML5',
      icon: 'html5',
      type: 'brand',
    },
    {
      title: 'CSS3',
      icon: 'css3',
      type: 'brand',
    },
    {
      title: 'SASS',
      icon: 'sass',
      type: 'brand',
    },
    {
      title: 'Javascript',
      icon: 'js',
      type: 'brand',
    },
    {
      title: 'D3.js',
      icon: 'd3',
      type: 'notbrand',
    },
    {
      title: 'Node.js',
      icon: 'node-js',
      type: 'brand',
    },
    {
      title: 'React.js',
      icon: 'react',
      type: 'brand',
    },
  ],
  portfolios: [
    {
      id: 1,
      title: 'T-shirt Mockup',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'A beautiful t-shirt mockup.',
      imageUrl: '/images/portfolio-image-1.jpg',
      largeImageUrl: ['/images/portfolio-image-1-lg.jpg'],
      github:'https://github.com/sunny335',
      liveProject: 'https://dribbble.com',
      category: 'website',
    },
    {
      id: 2,
      title: 'Coffee Mug',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'Awesome coffee mug design.',
      imageUrl: '/images/portfolio-image-4.jpg',
      largeImageUrl: [
        '/images/portfolio-image-4-lg.jpg',
        '/images/portfolio-image-4-lg2.jpg',
      ],
      github:'https://github.com/sunny335',
      liveProject: 'https://facebook.com',
      category: 'javascript',
    },
    {
      id: 3,
      title: 'Tea & Coffee Mug',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'Beautiful mug with logo.',
      imageUrl: '/images/portfolio-image-2.jpg',
      github:'https://github.com/sunny335',
      liveProject: 'https://pinterest.com',
      category: 'website',
    },
    {
      id: 4,
      title: 'Pen Holder',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'A pen holder with beautiful design.',
      imageUrl: '/images/portfolio-image-3.jpg',
      largeImageUrl: ['/images/portfolio-image-3-lg.jpg'],
      github:'https://github.com/sunny335',
      liveProject: '#',
      category: 'website',
    },
    {
      id: 5,
      title: 'Mug',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'Mug with awesome style',
      imageUrl: '/images/portfolio-image-5.jpg',
      largeImageUrl: ['/images/portfolio-image-5-lg.jpg'],
      category: 'python',
    },
    {
      id: 6,
      title: 'Pendrive',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'Free pendrive mockup design.',
      imageUrl: '/images/portfolio-image-6.jpg',
      largeImageUrl: ['/images/portfolio-image-6-lg.jpg'],
      category: 'website',
    },
    {
      id: 7,
      title: 'Beautiful Pendrive',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'Pendrive with great design & flexible.',
      imageUrl: '/images/portfolio-image-7.jpg',
      largeImageUrl: ['/images/portfolio-image-7-lg.jpg'],
      github:'https://github.com/sunny335',
      liveProject: 'https://twitter.com',
      category: 'python',
    },
    {
      id: 8,
      title: 'Sticker',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'Clip sticker mockup design.',
      imageUrl: '/images/portfolio-image-8.jpg',
      largeImageUrl: ['/images/portfolio-image-8-lg.jpg'],
      category: 'website',
    },
    {
      id: 9,
      title: 'Packet',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'Beautiful packet & product design.',
      imageUrl: '/images/portfolio-image-9.jpg',
      largeImageUrl: ['/images/portfolio-image-9-lg.jpg'],
      category: 'python',
    },
    {
      id: 10,
      title: 'Pen Holder',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'A pen holder with beautiful design.',
      imageUrl: '/images/portfolio-image-3.jpg',
      largeImageUrl: ['/images/portfolio-image-3-lg.jpg'],
      github:'https://github.com/sunny335',
      liveProject: '#',
      category: 'python',
    },
    {
      id: 11,
      title: 'Coffee Mug',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'Awesome coffee mug design.',
      imageUrl: '/images/portfolio-image-4.jpg',
      largeImageUrl: [
        '/images/portfolio-image-4-lg.jpg',
        '/images/portfolio-image-4-lg2.jpg',
      ],
      github:'https://github.com/sunny335',
      liveProject: 'https://facebook.com',
      category: 'python',
    },
    {
      id: 12,
      title: 'Tea & Coffee Mug',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'Beautiful mug with logo.',
      imageUrl: '/images/portfolio-image-2.jpg',
      github:'https://github.com/sunny335',
      liveProject: 'https://pinterest.com',
      category: 'python',
    },
    {
      id: 13,
      title: 'T-shirt Mockup',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'A beautiful t-shirt mockup.',
      imageUrl: '/images/portfolio-image-1.jpg',
      largeImageUrl: ['/images/portfolio-image-1-lg.jpg'],
      github:'https://github.com/sunny335',
      liveProject: 'https://dribbble.com',
      category: 'python',
    },
    {
      id: 14,
      title: 'Mug',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'Mug with awesome style',
      imageUrl: '/images/portfolio-image-5.jpg',
      largeImageUrl: ['/images/portfolio-image-5-lg.jpg'],
      category: 'python',
    },
    {
      id: 15,
      title: 'Pendrive',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'Free pendrive mockup design.',
      imageUrl: '/images/portfolio-image-6.jpg',
      largeImageUrl: ['/images/portfolio-image-6-lg.jpg'],
      category: 'python',
    },
    {
      id: 16,
      title: 'Beautiful Pendrive',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'Pendrive with great design & flexible.',
      imageUrl: '/images/portfolio-image-7.jpg',
      largeImageUrl: ['/images/portfolio-image-7-lg.jpg'],
      github:'https://github.com/sunny335',
      liveProject: 'https://twitter.com',
      category: 'python',
    },
    {
      id: 17,
      title: 'Sticker',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'Clip sticker mockup design.',
      imageUrl: '/images/portfolio-image-8.jpg',
      largeImageUrl: ['/images/portfolio-image-8-lg.jpg'],
      category: 'python',
    },
    {
      id: 18,
      title: 'Packet',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'Beautiful packet & product design.',
      imageUrl: '/images/portfolio-image-9.jpg',
      largeImageUrl: ['/images/portfolio-image-9-lg.jpg'],
      category: 'python',
    },
    {
      id: 19,
      title: 'T-shirt Mockup',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'A beautiful t-shirt mockup.',
      imageUrl: '/images/portfolio-image-1.jpg',
      largeImageUrl: ['/images/portfolio-image-1-lg.jpg'],
      github:'https://github.com/sunny335',
      liveProject: 'https://dribbble.com',
      category: 'python',
    },
    {
      id: 20,
      title: 'Coffee Mug',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'Awesome coffee mug design.',
      imageUrl: '/images/portfolio-image-4.jpg',
      largeImageUrl: [
        '/images/portfolio-image-4-lg.jpg',
        '/images/portfolio-image-4-lg2.jpg',
      ],
      github:'https://github.com/sunny335',
      liveProject: 'https://facebook.com',
      category: 'python',
    },
    {
      id: 21,
      title: 'Tea & Coffee Mug',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'Beautiful mug with logo.',
      imageUrl: '/images/portfolio-image-2.jpg',
      github:'https://github.com/sunny335',
      liveProject: 'https://pinterest.com',
      category: 'python',
    },
    {
      id: 22,
      title: 'Pen Holder',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'A pen holder with beautiful design.',
      imageUrl: '/images/portfolio-image-3.jpg',
      largeImageUrl: ['/images/portfolio-image-3-lg.jpg'],
      github:'https://github.com/sunny335',
      liveProject: '#',
      category: 'Data-Visualization',
    },
    {
      id: 23,
      title: 'Mug',
      technologies: ['CakePHP', 'Javascript', 'Python', 'Java'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
      subtitle: 'Mug with awesome style',
      imageUrl: '/images/portfolio-image-5.jpg',
      largeImageUrl: ['/images/portfolio-image-5-lg.jpg'],
      category: 'javascript',
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: '2018 - Present',
        position: 'Frontend Web Developer',
        company: 'Abc Company',
        details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
      },
      {
        id: 2,
        year: '2016 - 2018',
        position: 'Frontend Web Developer',
        company: 'CBA Company',
        details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
      },
      {
        id: 3,
        year: '2014 - 1016',
        position: 'UI/UX Designer',
        company: 'Example Company',
        details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: '2018 - 2019',
        graduation: 'Master of Science',
        university: 'Abc University',
        details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
      },
      {
        id: 2,
        year: '2016 - 2018',
        graduation: 'Bachelor of Science',
        university: 'Abc University',
        details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
      },
      {
        id: 3,
        year: '2015 - 2016',
        graduation: 'Higher Schoold Graduation',
        university: 'Abc College',
        details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource:
        '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource:
        '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 15,
      title: 'Programmers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
  ],
  contactInfo: {
    phoneNumbers: ['+012-3456-7891', '+012-3456-7892'],
    emailAddress: ['admin.sitename@example.com', 'info.sitename@example.com'],
    address: '121 King Street, Melbourne, Victoria 3000, Australia',
  },
};

Mock.onGet('/api/information').reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet('/api/services').reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet('/api/reviews').reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet('/api/skills').reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet('/api/portfolios').reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet('/api/experience').reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet('/api/blog').reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet('/api/contactinfo').reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
