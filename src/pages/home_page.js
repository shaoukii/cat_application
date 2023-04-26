import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import Data_cat from "../cat_card/cat_data"


function Home_page() {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleCats = Data_cat.slice(0, visibleCount);

  const handleShowMoreClick = () => {
    setVisibleCount(Data_cat.length);
  };
  const [input, setinput] = useState("");
  const handlechange = (e) => {
    e.preventDefault();
    setinput(e.target.value);
  };

  console.log("input", input);

 
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/35888/amazing-beautiful-breathtaking-clouds.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            color: "white",
            paddingTop: "150px",
            paddingLeft: "60px",
            paddingBottom: "200px",
            width: "80%",
            textAlign: "start",
            paddingRight: "70px",
          }}
        >
          <h1>Lorem Ipsum is simply dummy text typesetting industry.</h1>
          <h5
            style={{
              paddingTop: "5px",
              paddingBottom: "10px",
            }}
          >
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has
          </h5>
          <Button variant="outline-secondary"> Get Started </Button>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <h1>Lorem Ipsum</h1>
      </div>

      <div>
        <Container>
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
              <Form.Control
                type="text"
                style={{ width: "100%", textAlign: "center" }}
                placeholder="Search for Breeds"
                onChange={handlechange}
                value={input}
              />
            </Col>
            <Col xs={3}></Col>
          </Row>
        </Container>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            padding: "50px",
            marginTop: "20px",
          }}
        >
          {visibleCats

            .filter((i) => {
              return i.breed.toLocaleLowerCase().includes(input.toLowerCase());
            })

            .map((Data_cat) => (
              <div key={Data_cat.id}>
                <Card
                  style={{
                    width: "25rem",
                    height: "35rem",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={Data_cat.url}
                    alt={Data_cat.breed}
                    style={{ widht: "20rem", height: "20rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{Data_cat.breed}</Card.Title>
                    <Card.Text
                      style={{ textAlign: "start", paddingTop: "5px" }}
                    >
                      {Data_cat.description}
                    </Card.Text>
                  
                    <Link to={`/cats/${Data_cat.id}/CatDetails`   }  >  <Button variant="outline-secondary">
                      More Description{" "}
                    </Button></Link> 
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
      </div>
      {visibleCount < Data_cat.length && (
        <Button variant="outline-secondary" onClick={handleShowMoreClick}>
          More Breeds
        </Button>
      )}
    </>
  );
}
export default Home_page;
