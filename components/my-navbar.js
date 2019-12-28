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
          <Col md="12" lg="4" xl="3">
            Владимир +38 (067) 570-80-21{" "}
          </Col>
          <Col md="12" lg="4" xl="3">
            Татьяна &emsp;+38 (093) 320-76-01
          </Col>
        </Row>
        <style>
          {`
            h2 {
                color: #ed143dad;
            }
            .nav-item p {
                color: rgba(0,0,0,.9);
            }
            .navbar {
                background: #22b5ff;
                margin: 0;
            }
          `}
        </style>
      </Container>
    );
  }
}
