import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Stack } from "react-bootstrap";

function AutoLayoutExample() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/37337/cat-silhouette-cats-silhouette-cat-s-eyes.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <div
          style={{
            color: "white",

            paddingLeft: "60px",

            width: "80%",
            textAlign: "start",
            paddingRight: "70px",
            height: "50%",
          }}
        >
          <h3>Lorem Ipsum is simply dummy text </h3>
          <p>
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </p>
        </div>
      </div>
     

    </>
  );
}

export default AutoLayoutExample;
