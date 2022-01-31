import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { SwiperOptions } from "swiper";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Carousel } from "src/app/modules/data.module";

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
    slidesPerView: 1,
    keyboard: true,
    navigation: true,
    pagination: false,
  };

  carousel: Carousel[] = [
    {
      title: "INSCRIPCIONES ABIERTAS! CICLO LECTIVO 2022",
      content: "TRANSFORMANDO EL PRESENTE CONSTRUYENDO EL FUTURO",
      image: "assets/images/school-front.jpg",
      linkLabel: "Contactanos",
      linkUrl: "/contact",
    },
    {
      title: "Instituto Modelo Proyecto 2000",
      content:
        "Incorporado A LA ENSEÑANZA OFICIAL A-1334, DESDE SU FUNDACIÓN EL COLEGIO RECIBE NIÑOS/AS Y ADOLESCENTES CON NECESIDADES EDUCATIVAS ESPECIALES O DIFICULTADES EN EL APRENDIZAJE, DESARROLLANDO PROPUESTAS PEDAGÓGICAS, ADECUADAS A LAS NECESIDADES PARTICULARES DE CADA UNO DE ELLOS.",
      image: "assets/images/school-childrens.jpg"
    },
  ];

  /**
   * Client Testimonial Data
   */
  testimonialData = [
    {
      profile: "assets/images/client/01.jpg",
      name: "Thomas Israel",
      designation: "C.E.O",
      message: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "`,
    },
    {
      profile: "assets/images/client/02.jpg",
      name: "Barbara McIntosh",
      designation: "M.D",
      message: `" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "`,
    },
    {
      profile: "assets/images/client/03.jpg",
      name: "Carl Oliver",
      designation: "P.A",
      message: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Christa Smith",
      designation: "Manager",
      message: `" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "`,
    },
    {
      profile: "assets/images/client/05.jpg",
      name: "Dean Tolle",
      designation: "Developer",
      message: `" There is now an abundance of readable dummy texts. These are usually used when a text is required. "`,
    },
    {
      profile: "assets/images/client/06.jpg",
      name: "Jill Webb",
      designation: "Designer",
      message: `" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "`,
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
