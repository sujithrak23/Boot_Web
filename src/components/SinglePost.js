
import React from 'react';
import Figure from 'react-bootstrap/Figure';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function SinglePost() {
    const containerStyle = {
        backgroundImage: `url('https://img.freepik.com/free-photo/black-smooth-wooden-textured-background_53876-153465.jpg?size=626&ext=jpg&ga=GA1.1.302407595.1702627135&semt=ais')`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'yellow',
        padding: '20px', 

      };
    
  const figureStyle = {
    border: '3px double chocolate',
    textAlign: 'center',
    margin: '15px',
    color: 'white',

  };
  const cardStyle = {
    border: '20px solid #3498db', 
    backgroundColor:'black',   
    padding: '10px',             
    borderRadius: '88px',        
  };

  return (
    <div className="yourClassName" style={containerStyle}>
      <Row>
        <p><h1>DISHES YOU WANT</h1></p>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={180}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=600'
            />
          <Figure.Caption>
            <h2 className='h2-style'>Panner Cravy</h2>
            <Button variant="dark" href="#atomic-habits">Order</Button>
          </Figure.Caption>
        </Col>

        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600'
            />
          <Figure.Caption>
            <h2 className='h2-style'>Cakes</h2>
            <Button variant="dark" href="#fourth-ring">Order</Button>
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/3642030/pexels-photo-3642030.jpeg?auto=compress&cs=tinysrgb&w=600'
            />
          <Figure.Caption>
            <h2 className='h2-style'>Sweets</h2>
            <Button variant="dark" href="#wings-of-fire">Order</Button>
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style'>Juices</h2>
            <Button variant="dark" href="#you-can">Order</Button>
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=600'
            />
          <Figure.Caption>
            <h2 className='h2-style'>Sandwich</h2>
            <Button variant="dark" href="#the-jungle-book">Order</Button>
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={180}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/4791267/pexels-photo-4791267.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style'>Chocolates</h2>
            <Button variant="dark" href="#atomic-habits">Order</Button>
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/3789885/pexels-photo-3789885.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style' style={{color:'white'}}>Bowls</h2>
            <Button variant="dark" href="#fourth-ring">Order</Button>
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/414262/pexels-photo-414262.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style'>Desserts</h2>
            <Button variant="dark" href="#wings-of-fire">Order</Button>
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style'>Soups</h2>
            <Button variant="dark" href="#you-can">Order</Button>
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/5061254/pexels-photo-5061254.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style'>Icecreams</h2>
            <Button variant="dark" href="#the-jungle-book">Order</Button>
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={180}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style'>French Fries</h2>
            <Button variant="dark" href="#atomic-habits">Order</Button>
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style'>Pizzas</h2>
            <Button variant="dark" href="#fourth-ring">Order</Button>
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/1373915/pexels-photo-1373915.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style'>Noodles</h2>
            <Button variant="dark" href="#wings-of-fire">Order</Button>
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style'>Pancakes</h2>
            <Button variant="dark" href="#you-can">Order</Button>
          </Figure.Caption>
        </Col>

        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/116725/pexels-photo-116725.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style'>Porraige</h2>
            <Button variant="dark" href="#you-can">Order</Button>
          </Figure.Caption>
        </Col>

        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/9345670/pexels-photo-9345670.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h4 className='h2-style'>Chapathies</h4>
            <Button variant="dark" href="#you-can">Order</Button>
          </Figure.Caption>
        </Col>

        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/9646843/pexels-photo-9646843.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style'>Grill</h2>
            <Button variant="dark" href="#you-can">Order</Button>
          </Figure.Caption>
        </Col>

        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/5410410/pexels-photo-5410410.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style'>Briyani</h2>
            <Button variant="dark" href="#you-can">Order</Button>
          </Figure.Caption>
        </Col>
        
        
      </Row>
    </div>
  );
}

export default SinglePost;
