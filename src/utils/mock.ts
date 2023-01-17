export const posts = [
  {
    id: 1,
    author: {
      name: "Dandara Estrela",
      avatarUrl: "https://avatars.githubusercontent.com/u/31369111?v=4",
      role: "Dev Frontend",
    },
    content: [
      { type: "paragraph", content: "Fala galera!" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare <3",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      name: "Diego Fernandes",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      role: "CTO Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Faala dev," },
      {
        type: "paragraph",
        content:
          "Subindo mais conteúdos para o ignite hoje! Não deixem de conferir🚀",
      },
    ],
    publishedAt: new Date("2022-06-03 20:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/6643122?v=4",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content: "Gravando mais aulas para vocês hoje!!",
      },
    ],
    publishedAt: new Date("2022-07-10 20:00:00"),
  },
];
