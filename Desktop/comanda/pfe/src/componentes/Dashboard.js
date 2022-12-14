import Carousel from 'react-bootstrap/Carousel';

function Dashboard() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://i.postimg.cc/BvDJn61t/dashboard.png"
          alt="First slide"
        />
              </Carousel.Item>
    </Carousel>
  );
}

export default Dashboard;