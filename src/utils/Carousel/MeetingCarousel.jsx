import Slider from 'react-slick';
import 'utils/Carousel/slick.css';
import 'utils/Carousel/slick-theme.css';

const Carousel = ({ children }) => {
  // 옵션
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
