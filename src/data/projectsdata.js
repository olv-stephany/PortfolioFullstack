//vibranium images
import vibraniumHeader from "../images/projects/vibranium-header.jpg";
import vibraniumImg1 from "../images/projects/v-api.jpg";

//icons for links
import github from "../images/icons/github-icon.png";

const projectsdata = [
  {
    id: 1,
    nameProject: "VibraniumCore-API",
    description:
      "A RESTful API for managing personal investments. It enables user registration, portfolio management, buy and sell operations, and real-time price updates through integration with the BRAPI API.",
    imagesProject: [{ id: 1, url: vibraniumImg1 }, { id: 2, url: vibraniumImg1 }, { id: 3, url: vibraniumImg1 }, { id: 4, url: vibraniumImg1 }],
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
