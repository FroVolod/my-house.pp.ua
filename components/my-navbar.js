import { Container, Row, Col } from "reactstrap";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Container>
        <Row className="navbar">
          <Col md="12" lg="12" xl="12">
            <h1>
              Продам дом с большим участком в ближайшем пригороде по цене квартиры в Харькове! 
            </h1>
          </Col>
          <Col className="phone" md="12" lg="4">
            <a href="tel:+380675708021"><img src={"/static/icons/phone.png"}/></a>
            {/* <a href="tel:+380675708026"><Button color="warning" size="sm" outline><img src={"/static/images/icons/phone.png"}/></Button></a> */}
            Владимир +38 (067) 570-80-21
          </Col>
          <Col className="phone" md="12" lg="4">
            <a href="tel:+380933207601"><img src={"/static/icons/phone.png"}/></a>
            Татьяна &emsp;+38 (093) 320-76-01
          </Col>
        </Row>
        <style>
          {`
            h2 {
                color: #ed143dad;
            }
            img {
              margin-right: 20px;
            }
            .phone {
              padding-right: 10px;
              padding-left: 10px;
              padding-top: 15px;
            }
            .nav-item p {
                color: rgba(0,0,0,.9);
            }
            .navbar {
                background: #22b5ff;
                margin: 0;
                padding-top: 20px;
            }
          `}
        </style>
      </Container>
    );
  }
}
