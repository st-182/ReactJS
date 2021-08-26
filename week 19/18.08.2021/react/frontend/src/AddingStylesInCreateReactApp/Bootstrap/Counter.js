import React, { useRef } from "react";
import { Card, Button, Row, Col, Pagination, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = () => {
  const input = useRef();
  const increase = () => {
    input.current.value = +input.current.value + 1;
  };
  const decrease = () => {
    input.current.value = +input.current.value - 1;
  };
  return (
    <Row>
      <Col xs={1}>
        <Button size={"sm"} onClick={decrease}>
          -
        </Button>
      </Col>
      <Col xs={4} fluid>
        <Form.Control type="text" placeholder="0" ref={input} />
      </Col>
      <Col xs={1}>
        <Button size={"sm"} onClick={increase}>
          +
        </Button>
      </Col>
    </Row>
  );
};

export default Counter;
