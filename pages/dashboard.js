import Filters from "@/components/Filters";
import Problems from "@/components/Problems";
import Progress from "@/components/Progress";
import Search from "@/components/Search";
import React from "react";
import { Row, Col } from "react-bootstrap";

const dashboard = () => {
  return (
    <div className="bg-code-black h-screen">
      <Row className="bg-code-black">
        <Col xl={4} className="flex gap-4 justify-center items-center flex-col">
          <Filters />
          <Progress />
        </Col>
        <Col xl={8} className="flex justify-center items-left flex-col">
          <Search />
          <Problems />
        </Col>
      </Row>
    </div>
  );
};

export default dashboard;
