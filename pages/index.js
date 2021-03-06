import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import ReactGA from "react-ga";

import MyNavbar from "../components/my-navbar";
import MyCarucel from "../components/my-carucel";
import Head from "../components/head";

class Index extends React.Component {
  state = {
    description:
      "Продам дом в Харьковской области в экологически чистом районе, с. Большие Проходы, Дергачевский р-н (20 км от Харькова).\
      Находится 2-х этажный (84 кв.м. жилой площади) дом недалеко от центра села в живописном районе возле леса и озера.\
      Просто шикарное место для отдыха не только семьи, но и огромной компании друзей и родственников.",
    imagesBlock: "all",
    selectBlock: "block_1"
  };

  componentDidMount() {
    ReactGA.initialize("UA-154178991-1");
    ReactGA.pageview("/");
  }

  updateDescription = (description, selectBlock) => {
    console.log("description: ", description, "imagesBlock: ", selectBlock);
    this.setState({ description, selectBlock });
  };

  onClick = imagesBlock => {
    console.log("click on teg li: ", imagesBlock);
    this.setState({
      imagesBlock,
      selectBlock: imagesBlock !== "all" ? imagesBlock : "block_1"
    });
  };

  render() {
    return (
      <div>
        <html lang="ru"></html>
        <Head />
        <MyNavbar />
        <Container>
          <Row>
            <Col md="12" lg="12" xl="4">
              <div className="optim">
                <p>
                  Не можешь решить что лучше - купить дом в пригороде Харькова 
                  или квартиру в городе за ту же стоимость?
                </p>
                <p>Какие бонусы при покупке дома:</p>
                <ul>
                  <li>
                    гараж (отсутствуют дополнительные финансовые затраты 
                    на стоянку автомобиля или покупку гаража для него)
                  </li>
                  <li>
                    индивидуальное газовое отопление (не нужно ждать отопительного 
                    сезона и не всегда качественная услуга)
                  </li>
                  <li>соседи не будут стучать за стенкой</li>
                  <li>чистый воздух дубового леса и прекрасная природа вокруг</li>
                  <li>свои овощи и фрукты</li>
                </ul>
              </div>
              <div>
                <b>
                  <a
                    onClick={() => {
                      this.onClick("all");
                    }}
                  >
                    Все фото
                  </a>
                  <ul>
                    <li
                      onClick={() => {
                        this.onClick("block_1");
                      }}
                      className={
                        this.state.selectBlock === "block_1" ? "activ" : ""
                      }
                    >
                      Планировка
                    </li>
                    <li
                      onClick={() => {
                        this.onClick("block_2");
                      }}
                      className={
                        this.state.selectBlock === "block_2" ? "activ" : ""
                      }
                    >
                      1-й этаж
                    </li>
                    <li
                      onClick={() => {
                        this.onClick("block_3");
                      }}
                      className={
                        this.state.selectBlock === "block_3" ? "activ" : ""
                      }
                    >
                      2-й этаж
                    </li>
                    <li
                      onClick={() => {
                        this.onClick("block_4");
                      }}
                      className={
                        this.state.selectBlock === "block_4" ? "activ" : ""
                      }
                    >
                      Участок
                    </li>
                    <li
                      onClick={() => {
                        this.onClick("block_5");
                      }}
                      className={
                        this.state.selectBlock === "block_5" ? "activ" : ""
                      }
                    >
                      Виды окрестности
                    </li>
                  </ul>
                </b>
              </div>
            </Col>
            <Col md="12" lg="7" xl="6">
              <MyCarucel
                updateDescription={this.updateDescription}
                imagesBlock={this.state.imagesBlock}
                selectBlock={this.state.selectBlock}
              />
            </Col>
            <Col className="description" md="12" lg="5" xl="2">
              <p>{this.state.description}</p>
            </Col>
          </Row>
        </Container>

        <style>
          {`body {
              background: #ffd532;
            }

            h1 {
              font-size: 35px;
              color: #ffe100;
              text-align: center;
            }

            ul {
              padding-top: 5px;
            }

            b li, b a {
              cursor: pointer;
              padding-bottom: 7px;
              padding-left: 10px;
            }

            b li:hover, b a:hover {
              color: #ffe;
             } 

            .description {
              margin-top: 2pc;
            }

            .activ {
              color: #22b5ff;
            }
            .optim {
              font-style: italic;
              font-family: cursive;
            }

/* ----------------------- min-width 1200 px --------------------------------- */
            @media screen and (min-width: 1200px) {
            .container {
                max-width: 1900px;
            }

/* ----------------------- mobile 768 px --------------------------------- */
            @media screen and (max-width: 768px) {
            .container {
              padding-left: 0;
              padding-right: 0;
              max-width: 768px;
            }
            h1 {
              font-size: 18px;
            }
            .navbar {
              font-size: 12px;
            } 
            .row {
              margin-right: 0;
              margin-left: 0;
              margin-top: 15px;
            }
            .description {
              margin-top: 1pc;
            }
            a {
              padding-left: 10px;
            }
            p {
              font-size: 14px;
              padding: 0 15px;
            }
            }

          `}
        </style>
      </div>
    );
  }
}

export default Index;
