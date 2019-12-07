import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
  
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
                    <Col md="12" lg="12" xl="8"><h1>Продажа дома с большим участком в ближайшем пригороде по цене квартиры в Харькове!</h1></Col>
                    <Col md="12" lg="12" xl="2">Владимир +38 (067) 570-80-21 </Col>
                    <Col md="12" lg="12" xl="2">Татьяна &emsp;+38 (093) 320-76-01</Col>
                </Row>
        {/* <div> */}
            {/* <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Ваш дом</NavbarBrand>
            <NavbarBrand xs="12" >Владимир +38 (067) 570-80-21</NavbarBrand>
            <Collapse xs="12" isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <p>Владимир +38 (067) 570-80-21</p>
                        <h1>Продажа дома с большим участком в близжайшем пригороде по цене квартиры в Харькове!</h1>
                    </NavItem>
                </Nav>
            </Collapse>
            </Navbar> */}
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
        {/* </div> */}
            </Container>
        );
    }
}
