import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image7.jpg',
  'image8.jpg',
  'image9.jpg',
  'image10.jpg',
];

const CarouselComponent = () => {
  return (
    <div className="max-w-lg mx-auto">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        transitionTime={1000}
        interval={5000}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={`${image}`}
              alt={`Image ${index + 1}`}
              className="w-full"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
