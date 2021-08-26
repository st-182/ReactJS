import React from "react";
import { Card, Button, Row, Col, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./Counter";

const CardBootstrap = () => {
  return (
    <Card style={{ width: "64rem" }}>
      <Row>
        <Col>
          <Card.Img
            variant="top"
            src="https://per4mmedia.com/wp-content/uploads/2021/03/35.jpg"
          />
        </Col>
        <Col>
          <Card.Body>
            <Row>
              <Col xs={9}>
                <Card.Title>Ayrton Senna Lotus 97T Formula 1 Poster</Card.Title>
              </Col>
              <Col>
                {/* bg={"light"} size={"sm"} */}
                <Pagination bg={"primary"}>
                  <Pagination.Prev />

                  <Pagination.Next />
                </Pagination>
              </Col>
            </Row>
            <Card.Text>
              <h1>35.00€</h1>
              <p>Ayrton Senna ,Lotus 97T Poster.</p>
              <p>Posters series of legendary Senna’s F1 cars.</p>
              <p>This is an original print illustrated by me.</p>
              <p>
                All pieces are printed on heavyweight 250 gsm photo paper in a
                lovely matt finish.
              </p>
              <p>One size:</p>
              <p>50x70cm (19.7×27.5inch)</p>
              <p>* Frame not included.</p>
              <p>
                * Please keep in mind there may be a slight variation from
                screen to printed poster art.
              </p>
            </Card.Text>
            <Row>
              <Col>
                <Counter />
              </Col>
              <Col>
                <Button variant="primary">Add to Cart</Button>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CardBootstrap;
