import { Carousel, Image } from "react-bootstrap";

const Carrusel = () => {
  return (
    <Carousel className="shadow my-5">
      <Carousel.Item interval={2000}>
        <Image
          src="/banner-1.webp"
          width="100%"
          height="480px"
          className="object-fit-cover"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image
          src="/banner-2.jpg"
          width="100%"
          height="480px"
          className="object-fit-cover"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image
          src="/banner-3.webp"
          width="100%"
          height="480px"
          className="object-fit-cover"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
