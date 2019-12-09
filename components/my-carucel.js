import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from "reactstrap";

import itemsJson from "../pages/items.json";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      items: itemsJson.items
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("this.props: ", this.props);
    if (this.props.imagesBlock !== prevProps.imagesBlock) {
      this.setState({
        activeIndex: 0,
        items:
          this.props.imagesBlock !== "all"
            ? itemsJson.items.filter(
                item => item.imagesBlock === this.props.imagesBlock
              )
            : itemsJson.items
      });
      console.log("state.items: ", this.state.items);
      this.props.updateDescription(
        itemsJson.items.find(
          item => item.imagesBlock === this.props.selectBlock
        ).description,
        this.props.selectBlock
      );
    }
  }

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.state.items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.state.items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex, items } = this.state;

    const slides = items.map(item => (
      <CarouselItem
        onEnter={() => {
          this.props.updateDescription(item.description, item.selectBlock);
        }}
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.src}
      >
        <img className="d-block w-100" src={item.src} alt={item.altText} />
      </CarouselItem>
    ));

    return (
      <div className="container">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}
