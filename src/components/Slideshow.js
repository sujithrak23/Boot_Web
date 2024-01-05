import React from 'react';
import Figure from 'react-bootstrap/Figure';
import { Carousel } from 'react-bootstrap';

const Slideshow = () => {
  // Set a fixed width and height for the images
  const fixedWidth = 1800;
  const fixedHeight = 1000;

  return (
    <Carousel>
      <Carousel.Item>
        <Figure.Image
          width={fixedWidth}
          height={fixedHeight}
          alt="900x900"
          src='https://img.freepik.com/premium-photo/chicken-dhum-biriyani-using-jeera-rice-spices-arranged-earthen-ware_527904-513.jpg?size=626&ext=jpg&ga=GA1.1.302407595.1702627135&semt=ais'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Figure.Image
          width={fixedWidth}
          height={fixedHeight}
          alt="900x900"
          src='https://img.freepik.com/free-photo/belgium-waffles-with-strawberries-ice-cream-white-plate_2829-13952.jpg?size=626&ext=jpg&ga=GA1.1.302407595.1702627135&semt=sph'
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Figure.Image
          width={fixedWidth}
          height={fixedHeight}
          alt="900x900"
          src='https://img.freepik.com/free-photo/closeup-three-different-flavored-tasty-thai-milk-tea-wooden-table-cafe_181624-8596.jpg?size=626&ext=jpg&ga=GA1.1.302407595.1702627135&semt=ais'
        />
        <Carousel.Caption>
          <h3>Third label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
