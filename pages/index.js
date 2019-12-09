import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import ReactGA from 'react-ga';

import MyNavbar from '../components/my-navbar';
import MyCarucel from '../components/my-carucel';
import Head from '../components/head';



class Index extends React.Component {
  state = {
    description: 'Продам 2-х этажный дом (84 кв.м. жилой площади) в экологически чистом районе Харьковской области, с. Большие Проходы, Дергачевский р-н (20 км от Харькова).',
    imagesBlock: 'all',
    selectBlock: 'block_1',
  }

  componentDidMount() {
    ReactGA.initialize('UA-154178991-1');
    ReactGA.pageview('/');
  }

  updateDescription = (description, selectBlock) => {
    console.log('description: ', description, 'imagesBlock: ', selectBlock)
    this.setState({description, selectBlock})
  }

  onClick = (imagesBlock) => {
    console.log('click on teg li: ', imagesBlock)
    this.setState({imagesBlock, selectBlock: imagesBlock !== 'all' ? imagesBlock : 'block_1'})
  }

  render() {
    return (
      <div>
        <Head/>
        <MyNavbar/>
        <Container>
          <Row>
            <Col lg="1" xl="2">
              <div className="optim">
                <p>Не можешь решить, что лучше приобрести: квартиру в городе или дом в ближайшем пригороде за ту же стоимость?</p>
                <p>Какие бонусы при покупке дома:</p>
                <ul>
                  <li>гараж в доме (при покупке квартиры дополнительные затраты на стоянку или покупку гаража)</li>
                  <li>индивидуальное отопление (не нужно ждать отопительного сезона и не всегда качественная услуга)</li>
                  <li>соседи не стучат за стенкой</li>
                  <li>чистый воздух и природа</li>
                  <li>свои овощи и фрукты</li>
                </ul>
              </div>
              <div>
                <b>
                  <a onClick={() => {this.onClick('all')}}>Все фото</a>
                  <ul>
                    <li onClick={() => {this.onClick('block_1')}} className={this.state.selectBlock === 'block_1' ? "activ" : ''}>Виды окрестности</li>
                    <li onClick={() => {this.onClick('block_2')}} className={this.state.selectBlock === 'block_2' ? "activ" : ''}>Участок</li>
                    <li onClick={() => {this.onClick('block_3')}} className={this.state.selectBlock === 'block_3' ? "activ" : ''}>Дом</li>
                    <li onClick={() => {this.onClick('block_4')}} className={this.state.selectBlock === 'block_4' ? "activ" : ''}>1-й этаж</li>
                    <li onClick={() => {this.onClick('block_5')}} className={this.state.selectBlock === 'block_5' ? "activ" : ''}>2-й этаж</li>
                  </ul>
                </b>
              </div>
              <div>
                Посмотреть на карте
              </div>
              
            </Col>
            <Col lg="8" md="12" xl="8">
              <MyCarucel  updateDescription={this.updateDescription}
                          imagesBlock={this.state.imagesBlock}
                          selectBlock={this.state.selectBlock}
              />
            </Col>
            <Col className="description" lg="3" xl="2">
              <p>{this.state.description}</p>
            </Col>

          </Row>
        </Container>

      
        <style>
          {`body {
              background: #ffd532;
            }

            h1 {
              font-size: 1.25rem;
              color: #ffe100;
            }

            ul {
              padding-top: 5px;
            }

            b li, b a {
              cursor: pointer;
            }

            b li:hover, b a:hover {
              color: #ffe;
             } 

            .description {
              margin-top: 5pc;
            }

            .row {
              margin-right: -400px;
              margin-left: -400px;
            }

            .activ {
              color: #22b5ff;
            }
            .optim {
              font-style: italic;
              font-family: cursive;
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
              margin-right: -15px;
              margin-left: -15px;
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
      
    )
  }
}

export default Index
