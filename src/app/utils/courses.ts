export interface ICourses {
  title: string;
  learnings: string[];
  local: string;
  workload: number,
  certicadeUrl: string;
  relevance: number;
  date: string;
};

export const listCourses: ICourses[] = [
  {
    title: 'Desenvolvimento Web FullStack',
    learnings: [
      'HTML', 'CSS', 'Javascript', 'NodeJs', 'Angular 12', 'MongoDB', 'MySQL', 'Bootstrap 4/5', 'jQuery', 'Bootstrap 4/5', 'jQuery'
    ],
    workload: 740,
    local: "Soulcode Academy",
    certicadeUrl: "https://drive.google.com/file/d/1OUX4_m2ZKkJuhqfNGBpFdh6QnVDfa_y0/view?usp=sharing",
    relevance: 1,
    date: '11/2021'
  },
  {
    title: 'Treinamento Starter Java & Angular',
    learnings: [
      'Java', 'Spring', 'JUnit5', 'TDD', 'MVC', 'REST API', 'Microservices', 'Angular 2+'
    ],
    workload: 516,
    local: "GFT Academy",
    certicadeUrl: "https://drive.google.com/file/d/1lyEcy2XXwjzKBjFBlKoe7wuZZhktiWOt/view?usp=sharing",
    relevance: 2,
    date: '09/2022'
  },
  {
    title: 'GFT Start Java',
    learnings: [
      'Java', 'POO', 'Git/Github', 'Spring', 'Debbugind', 'Collections'
    ],
    workload: 56,
    local: "DIO",
    certicadeUrl: "https://www.dio.me/certificate/D553CBAA/share",
    relevance: 8,
    date: '03/2022'
  },
  {
    title: 'Introdução a Agilidade e Scrum',
    learnings: [
      'Metodologias agéis', 'Scrum'
    ],
    workload: 6,
    local: "GFT Academy",
    certicadeUrl: "https://drive.google.com/file/d/10EoUwSI_b4Pp6nRyxu6cKqhtkn6sZo19/view",
    relevance: 9,
    date: '05/2022'
  },
  {
    title: 'Angular 2+',
    learnings: [
      'Angular 2+', 'RxJS', 'SPAs', 'Deploy', 
    ],
    workload: 28,
    local: "Loiane.training",
    certicadeUrl: "https://loiane.training/certificado/bkcIg2GvnLfy0JHWHseT",
    relevance: 3,
    date: '05/2022'
  },
  {
    title: 'React do Zero a Maestria (c/ hooks, router, API, Projetos)',
    learnings: [
      'React', 'React Hooks', 'React Routes', 'Context API', 'Redux', 'MongoDB', 'SPAs'
    ],
    workload: 30,
    local: "Udemy",
    certicadeUrl: "https://www.udemy.com/certificate/UC-ee45d4a2-3080-497e-8772-7f1d2fa0d70b/",
    relevance: 5,
    date: '12/2022'
  },
  {
    title: 'Java Intermediário',
    learnings: [
      'Java', 'Enums', 'Bibliotecas Math, Data e Locale', 'Threads'
    ],
    workload: 9,
    local: "Loiane.training",
    certicadeUrl: "https://loiane.training/certificado/chHrQsXDuOrbi80UjLfo",
    relevance: 10,
    date: '09/2022'
  },
  {
    title: 'Java Básico',
    learnings: [
      'Java', 'POO', 'Herança', 'Polimorfismo', 'Exceções'
    ],
    workload: 30,
    local: "Loiane.training",
    certicadeUrl: "https://loiane.training/certificado/wY7MRgNrtjKF7BtSk0E0",
    relevance:11,
    date: '06/2022'
  },
  {
    title: 'Gestão de fluxo com Kanban',
    learnings: [
      'Metodologias agéis', 'Kanban'
    ],
    workload: 12,
    local: "GFT Academy",
    certicadeUrl: "https://drive.google.com/file/d/1giXVIdvwjifRFSzKTyaLmpxG5caGpdaU/view",
    relevance: 7,
    date: '08/2022'
  },
  {
    title: 'Microsserviços do 0 com Spring Cloud, Spring Boot e Docker',
    learnings: [
      'Microsserviços', 'Spring', 'Docker', 'Threads', 'Eureka', 'Zipkin', 'Spring Cloud'
    ],
    workload: 14.5,
    local: "Udemy",
    certicadeUrl: "https://www.udemy.com/certificate/UC-8fd8b6a7-1e74-4d7d-9f30-b9d4e99b662c/",
    relevance: 4,
    date: '10/2022'
  },
  {
    title: 'Testes Unitários do Zero com Angular 14 / Jasmine e Karma',
    learnings: [
      'Testes unítarios', 'Jasmine', 'Karma'
    ],
    workload: 5,
    local: "Udemy",
    certicadeUrl: "https://www.udemy.com/certificate/UC-761a569e-a637-487c-b999-48a819cfbf85/",
    relevance: 6,
    date: '12/2022'
  },
];