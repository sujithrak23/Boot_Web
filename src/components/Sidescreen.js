import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Sidescreen() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <img
          src='https://img.freepik.com/free-photo/belgium-waffles-with-strawberries-ice-cream-white-plate_2829-13952.jpg?size=626&ext=jpg&ga=GA1.1.302407595.1702627135&semt=sph'
          alt="Image Alt Text"
            style={{ width: '100%', height: 'auto' }}
          />
          <p>Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.</p>

          <img
          src='https://img.freepik.com/free-photo/belgium-waffles-with-strawberries-ice-cream-white-plate_2829-13952.jpg?size=626&ext=jpg&ga=GA1.1.302407595.1702627135&semt=sph'
          alt="Image Alt Text"
            style={{ width: '100%', height: 'auto' }}
          />
          <p>Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.</p>

          <img
          src='https://img.freepik.com/free-photo/belgium-waffles-with-strawberries-ice-cream-white-plate_2829-13952.jpg?size=626&ext=jpg&ga=GA1.1.302407595.1702627135&semt=sph'
          alt="Image Alt Text"
            style={{ width: '100%', height: 'auto' }}
          />
          <p>Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.</p>

          <img
          src='https://img.freepik.com/free-photo/belgium-waffles-with-strawberries-ice-cream-white-plate_2829-13952.jpg?size=626&ext=jpg&ga=GA1.1.302407595.1702627135&semt=sph'
          alt="Image Alt Text"
            style={{ width: '100%', height: 'auto' }}
          />
          <p>Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.</p>

          <img
          src='https://img.freepik.com/free-photo/belgium-waffles-with-strawberries-ice-cream-white-plate_2829-13952.jpg?size=626&ext=jpg&ga=GA1.1.302407595.1702627135&semt=sph'
          alt="Image Alt Text"
            style={{ width: '100%', height: 'auto' }}
          />
          <p>Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.</p>

          <img
          src='https://img.freepik.com/free-photo/belgium-waffles-with-strawberries-ice-cream-white-plate_2829-13952.jpg?size=626&ext=jpg&ga=GA1.1.302407595.1702627135&semt=sph'
          alt="Image Alt Text"
            style={{ width: '100%', height: 'auto' }}
          />
          <p>Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.</p>

          <img
          src='https://img.freepik.com/free-photo/belgium-waffles-with-strawberries-ice-cream-white-plate_2829-13952.jpg?size=626&ext=jpg&ga=GA1.1.302407595.1702627135&semt=sph'
          alt="Image Alt Text"
            style={{ width: '100%', height: 'auto' }}
          />
          <p>Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.</p>
        </Offcanvas.Body>
       
      </Offcanvas>
    </>
  );
}

export default Sidescreen;