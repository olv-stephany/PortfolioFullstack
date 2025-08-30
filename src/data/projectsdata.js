//vibranium images
import vibraniumHeader from "../images/projects/v-api/vibranium-header.jpg";
import vibraniumImg1 from "../images/projects/v-api/v-api.jpg";
import vibraniumImg2 from "../images/projects/v-api/req-insomnia-vApi.jpeg"
import vibraniumImg3 from "../images/projects/v-api/modelagem-db-vAPI.jpeg"

//icons for links
import github from "../images/icons/github-icon.png";

const projectsdata = [
  {
    id: 1,
    nameProject: "VibraniumCore-API",
    description:
      "O VibraniumCore-API é uma API RESTful desenvolvida para gerenciar investimentos pessoais. Permite o cadastro de usuários, gerenciamento de carteiras, operações de compra e venda de ativos e atualização de preços em tempo real através da integração com a API BRAPI. O projeto foi construído utilizando Node.js,Express.js, JavaScript, PostgreSQL e Prisma ORM, e conta com funcionalidades de autenticação JWT, hash de senhas com Bcrypt e validação de dados, garantindo segurança e confiabilidade nas informações. Este projeto ainda está em desenvolvimento e é utilizado como estudo. Se houver interesse em contribuir, contribuições são bem-vindas.",
    imagesProject: [{ id: 1, url: vibraniumImg1 }, { id: 2, url: vibraniumImg2 }, { id: 3, url: vibraniumImg3 }],
    banner: vibraniumHeader,
    links: [
      {
        id: 1,
        icon: github,
        title: "Ver repositório",
        url: "https://github.com/olv-stephany/VibraniumCore-API",
      },
    ],
  },
];

export default projectsdata;
