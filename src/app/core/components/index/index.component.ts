import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { SwiperOptions } from "swiper";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { OwlOptions } from "ngx-owl-carousel-o";
import { Carousel, CardsHome } from "src/app/modules/data.module";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"],
})

/**
 * Index Component
 */
export class IndexComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  /**
   * Nav Bg Class Add
   */
  navClass = "nav-light";
  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: "horizontal",
    autoplay: false,
    loop: true,
    parallax: true,
    speed: 1500,
    slidesPerView: 1,
    keyboard: true,
    navigation: true,
    pagination: false,
  };

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    navSpeed: 700,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };

  carousel: Carousel[] = [
    {
      title: "INSCRIPCIONES ABIERTAS! CICLO LECTIVO 2022",
      content: "TRANSFORMANDO EL PRESENTE CONSTRUYENDO EL FUTURO",
      image: "assets/images/school-front.jpg",
      linkLabel: "Contáctanos",
      linkUrl: "/contact",
    },
    {
      title: "Instituto Modelo Proyecto 2000",
      content:
        "Incorporado A LA ENSEÑANZA OFICIAL A-1334, DESDE SU FUNDACIÓN EL COLEGIO RECIBE NIÑOS/AS Y ADOLESCENTES CON NECESIDADES EDUCATIVAS ESPECIALES O DIFICULTADES EN EL APRENDIZAJE, DESARROLLANDO PROPUESTAS PEDAGÓGICAS, ADECUADAS A LAS NECESIDADES PARTICULARES DE CADA UNO DE ELLOS.",
      image: "assets/images/school-childrens.jpg",
    },
  ];

  cards: CardsHome[] = [
    {
      title: "ACTIVIDADES",
      content:
        "La jornada de los alumnos comprende actividades formativas y recreativas.",
      icon: "uil uil-schedule",
    },
    {
      title: "ACTIVIDADES ESPECIALES",
      content: "Computación, Musicoterapia, Psicomotricidad, Ingles",
      icon: "uil uil-basketball",
    },
    {
      title: "TALLERES",
      content:
        "Experimentando diferentes técnicas y el contacto con distintos materiales",
      icon: "uil uil-palette",
    },
    {
      title: "GABINETES",
      content:
        "Psicología, Foniatría, Supervisión Pedagóca, Orientación para Padres",
      icon: "uil uil-comment-alt-heart",
    },
  ];

  services: CardsHome[] = [
    {
      title: "PERSONAL CON GRAN CALIDAD HUMANA E IDONEIDAD PROFESIONAL",
      content:
        "La escuela cuenta con excelentes maestros de enseñanza especial, capaces de adaptarse a las dificultades de cada niño a través de prácticas didácticas de la educación infantil.",
      icon: "uil uil-user-square",
    },
    {
      title: "CUIDADO Y CONTENCIÓN",
      content:
        "Además de las materias curriculares, nuestros maestros están capacitados para brindar la contención y confianza necesaria para que el alumno adquiera autonomía y buena integración grupal.",
      icon: "uil uil-heart",
    },
    {
      title: "RESPETO POR LAS DIFERENCIAS Y FORMACIÓN NTEGRAL",
      content:
        "Contamos con una educación integral, inclusiva y de calidad, fomentando una cultura de paz a través del desarrollo de los valores.",
      icon: "uil uil-star",
    },
  ];

  /**
   * Client Testimonial Data
   */
  imageSlider = [
    {
      img: "assets/images/about.jpg",
    },
    {
      img: "assets/images/about-2.jpg",
    },
    {
      img: "assets/images/about-3.jpg",
    },
    {
      img: "assets/images/about-4.jpg",
    },
    {
      img: "assets/images/about-5.jpg",
    },
    {
      img: "assets/images/about-5.jpg",
    },
  ];

  /**
   * Blog Data
   */
  blogData = [
    {
      image: "assets/images/blog/01.jpg",
      title: "Design your apps in your own way",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019",
    },
    {
      image: "assets/images/blog/02.jpg",
      title: "How apps is changing the IT world",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019",
    },
    {
      image: "assets/images/blog/03.jpg",
      title: "Smartest Applications for Business",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019",
    },
  ];

  carouselBg(image: String) {
    return {
      "background-image": "url(" + image + ")",
    };
  }

  ngOnInit(): void {}

  /**
   * Open modal for show the video
   * @param content content of modal
   */
  openWindowCustomClass(content) {
    this.modalService.open(content, {
      windowClass: "dark-modal",
      size: "lg",
      centered: true,
    });
  }
  onstructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  /**
   * Open modal for show the video
   */
  openModal(content) {
    this.modalService.open(content, {
      windowClass: "dark-modal",
      size: "lg",
      centered: true,
    });
  }

  mapView(content) {
    this.modalService.open(content, {
      windowClass: "dark-modal",
      size: "lg",
      centered: true,
    });
  }
}
