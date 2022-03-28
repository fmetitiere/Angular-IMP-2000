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

  year = new Date().getFullYear();

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
    keyboard: false,
    navigation: false,
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
    /*  {
      title: `INSCRIPCIONES ABIERTAS ${this.year}!`,
      content: 'TRANSFORMANDO EL PRESENTE CONSTRUYENDO EL FUTURO',
      image: 'assets/images/school-front.jpg',
      linkLabel: 'Contáctanos',
      linkUrl: '#contact',
      hasWhatsapp: false,
    }, */
    {
      title: "Instituto Modelo Proyecto 2000",
      content:
        "Incorporado A LA ENSEÑANZA OFICIAL A-1334, DESDE SU FUNDACIÓN EL COLEGIO RECIBE NIÑOS/AS Y ADOLESCENTES CON NECESIDADES EDUCATIVAS ESPECIALES O DIFICULTADES EN EL APRENDIZAJE, DESARROLLANDO PROPUESTAS PEDAGÓGICAS, ADECUADAS A LAS NECESIDADES PARTICULARES DE CADA UNO DE ELLOS.",
      image: "assets/images/school-front.jpg",
    },
  ];

  cards: CardsHome[] = [
    {
      title: "ACTIVIDADES",
      content:
        "Jornada completa. Comprende actividades formativas y recreativas.",
      icon: "uil uil-schedule",
    },
    {
      title: "ACTIVIDADES ESPECIALES",
      content: "Computación, Musicoterapia, Psicomotricidad, Inglés",
      icon: "uil uil-basketball",
    },
    {
      title: "TALLERES",
      content:
        "Taller de Actividades Prácticas, Taller de aprendizaje y Actividades de la vida diaria",
      icon: "uil uil-palette",
    },
    {
      title: "GABINETES",
      content: "Psicología, Foniatría, Orientación para Padres",
      icon: "uil uil-comment-alt-heart",
    },
  ];

  services: CardsHome[] = [
    {
      title: "PERSONAL CON GRAN CALIDAD HUMANA E IDONEIDAD PROFESIONAL",
      content:
        "La escuela cuenta con excelentes profesionales de enseñanza especial, capaces de adaptarse a las dificultades de cada niño y niña a través de prácticas didácticas específicas.",
      icon: "uil uil-user-square",
    },
    {
      title: "CUIDADO Y CONTENCIÓN",
      content:
        "Además de las materias curriculares, nuestros maestros están capacitados para brindar la contención y confianza necesaria para que los alumnos adquieran autonomía y logren una buena integración grupal.",
      icon: "uil uil-heart",
    },
    {
      title: "RESPETO POR LAS DIFERENCIAS Y FORMACIÓN INTEGRAL",
      content:
        "Contamos con una educación integral, inclusiva y de calidad, fomentando una cultura de paz a través del desarrollo de los valores.",
      icon: "uil uil-star",
    },
  ];

  objectives: any[] = [
    {
      content:
        'Implementar un dispositivo que brinde a los alumnos <span class="text-primary fw-bold">la contención, el afecto y el cuidado que necesitan</span>y que les permita desarrollar una actitud de apertura afectiva y cognitiva hacia los objetos de aprendizaje.',
    },
    {
      content:
        'Brindar a los alumnos un <span class="text-primary fw-bold">ámbito controlado</span> en el que puedan descubrir sus capacidades particulares, desarrollarlas y utilizarlas para desenvolverse en el mundo real.',
    },
    {
      content:
        'Que aprendan a utilizar conductas socialmente aceptadas, que les permitan <span class="text-primary fw-bold" >integrarse a la comunidad a la que pertenecen</span >.',
    },
    {
      content:
        'Que <span class="text-primary fw-bold" >desarrollen actitudes de respeto por las diferencias</span >, cooperación, trabajo en equipo y solidaridad.',
    },
    {
      content:
        'Que adquieran comportamientos de <span class="text-primary fw-bold" >cuidado personal y respeto por la vida</span > propia y ajena.',
    },
    {
      content:
        'Que <span class="text-primary fw-bold" >desarrollen una actitud de cuidado</span > hacia el medio ambiente, respetando y valorando las diferentes manifestaciones de la vida.',
    },
    {
      content:
        'Que adopten gradualmente una actitud autónoma, que les permita desenvolverse en el mundo, <span class="text-primary fw-bold" >desplegando sus potencialidades</span >.',
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

  scroll(id) {
    const elmnt = document.getElementById(id);
    elmnt.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
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
