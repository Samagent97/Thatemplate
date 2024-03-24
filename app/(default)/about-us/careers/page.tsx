import { Col, Row, Card } from "antd";
import React from "react";

export default function Careers() {
  return (
    <div className="flex justify-left min-h-screen bg-gray-100">
      <div className="w-full text-black" style={{ marginTop: "70px" }}>
        <section className="gradient-bg grid items-center py-[20px] h-[fit-content] ">
          <div className="cirle-bg">
            <div className="bg object-cover"></div>
          </div>
          <div className="container py-12 max-w-6xl">
            <div className="join-wrap fl-wrap text-white">
              <Row
                className="w-full flex"
                justify="space-between"
                align="middle"
              >
                <Col span={24} md={10} className="flex flex-col space-y-6">
                  <h3 className="text-2xl md:text-4xl font-bold">
                    About Packmyload
                  </h3>
                  <p >
                  Read more about our story and history to learn why we're Africa's Most Trusted Moving Company
                  </p>
                </Col>
                <Col
                  span={24}
                  md={10}
                  className="flex items-center text-start md:text-end justify-center min-h-[160px]"
                ></Col>
              </Row>
            </div>
          </div>
        </section>



        </div>
        </div>
  )
};