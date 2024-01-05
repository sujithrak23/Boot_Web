import React from 'react';
import Figure from 'react-bootstrap/Figure';
 
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';

function CardSlide() {
  const containerStyle = {
    backgroundImage: `url('https://img.freepik.com/free-photo/nice-guidebook-notebook-map_23-2147767294.jpg?size=626&ext=jpg&ga=GA1.1.1194671720.1702461940&semt=ais')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: 'white',
    padding: '20px',
  };

  const figureStyle = {
    border: '2px solid black',
    textAlign: 'center',
    margin: '20px',
  };

  const cardData = [
    {
      id: 1,
      title: 'HARRY POTTER AND HALF-BOLD PRINCE',
      imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81YvqjX4AdL._AC_UY327_FMwebp_QL65_.jpg',
    },
    {
      id: 2,
      title: 'VENOM: LETHAL PROTECTOR',
      imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91z+Zr9FUqL._SY466_.jpg',
    },
    {
      id: 3,
      title: 'HARRY POTTER AND PHILOSOPHER STONE',
      imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Fyh2mrw4L._SY466_.jpg',
    },
    {
      id: 4,
      title: 'STRANGER THINGS: WORLDS TURNED UPSIDE DO',
      imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51WxlwFg8wL._SY445_SX342_.jpg',
    },
    {
      id: 5,
      title: 'PIRATES OF  CARIBBEAN ON STRANGER TIDES',
      imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/810HVE2TufL._SY466_.jpg',
    },
    
  ];
  const additionalCardData = [
    {
      id: 1,
      title: 'HARRY POTTER AND HALF-BOLD PRINCE',
      imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81YvqjX4AdL._AC_UY327_FMwebp_QL65_.jpg',
    },
  ];

  
  return (
    <div className="yourClassName" style={containerStyle}>
      <h1 className='h2-style' style={{ color: 'black' }}>BEST SELLERS</h1>
      <Carousel>
        <Carousel.Item>
          <Container>
            <Row>
              {cardData.map((card) => (
                <Col key={card.id} md={2} lg={2} style={figureStyle}>
                  <Figure.Image
                    width={171}
                    height={180}
                    alt={`Image ${card.id}`}
                    src={card.imageUrl}
                  />
                  <Figure.Caption>
  <h2 className='h2-style' style={{ color: 'black' }}>{card.title}</h2>
  <Button variant="dark" href={`#${card.title}`}>
    READ
  </Button>
</Figure.Caption>
                       </Col >
              ))}
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              {additionalCardData.map((card) => (
                <Col key={card.id} md={2} lg={2} style={figureStyle}>
                  <Figure.Image
                    width={171}
                    height={180}
                    alt={`Image ${card.id}`}
                    src={card.imageUrl}
                  />

               

<Figure.Caption>
  <h2 className='h2-style' style={{ color: 'black' }}>{card.title}</h2>
  <Button variant="dark" href={`#${card.title}`}>
    READ
  </Button>
</Figure.Caption>


                </Col >
              ))}
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CardSlide;