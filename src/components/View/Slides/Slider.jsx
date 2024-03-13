import './base.css'
import React from 'react';
  
  export class Slide extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.handleSlideClick = this.handleSlideClick.bind(this);
      this.imageLoaded = this.imageLoaded.bind(this);
      this.slide = React.createRef();
    }
  
    handleMouseMove(event) {
      const el = this.slide.current;
      const r = el.getBoundingClientRect();
  
      el.style.setProperty(
        "--x",
        event.clientX - (r.left + Math.floor(r.width))
      );
      el.style.setProperty(
        "--y",
        event.clientY - (r.top + Math.floor(r.height))
      );
    }
  
    handleMouseLeave(event) {
      this.slide.current.style.setProperty("--x", 0);
      this.slide.current.style.setProperty("--y", 0);
    }
  
    handleSlideClick(event) {
      this.props.handleSlideClick(this.props.slide.index);
    }
  
    imageLoaded(event) {
      event.target.style.opacity = 1;
    }
  
    render() {
      const { img, title, index, description, url, tags } = this.props.slide;
      const current = this.props.current;
      let classNames = "slide";
  
      if (current === index) classNames += " slide--current";
      else if (current - 1 === index) classNames += " slide--previous";
      else if (current + 1 === index) classNames += " slide--next";
  
      return (
        <li
          ref={this.slide}
          className={classNames}
          onClick={this.handleSlideClick}
          onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleMouseLeave}
        >
          <div className="slide__image-wrapper">
            <img
              className="slide__image"
              alt={title}
              src={img}
              onLoad={this.imageLoaded}
            />
          </div>
          <article className="slide__content">
            <div className="slide__headline menu__item">
                <a className='menu__item-inner' href={url}>{title}</a>
                <p className='slide__desc'>{description}</p>
            </div>
          </article>
        </li>
      );
    }
  }
  
  export class Slider extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { current: 2 };
      this.handlePreviousClick = this.handlePreviousClick.bind(this);
      this.handleNextClick = this.handleNextClick.bind(this);
      this.handleSlideClick = this.handleSlideClick.bind(this);
    }
  
    handlePreviousClick() {
      const previous = this.state.current - 1;
  
      this.setState({
        current: previous < 0 ? this.props.slides.length - 1 : previous
      });
    }
  
    handleNextClick() {
      const next = this.state.current + 1;
  
      this.setState({
        current: next === this.props.slides.length ? 0 : next
      });
    }
  
    handleSlideClick(index) {
      if (this.state.current !== index) {
        this.setState({
          current: index
        });
      }
    }
  
    render() {
      const { current, direction } = this.state;
      const { slides, heading } = this.props;
      const headingId = `slider-heading__${heading
        .replace(/\s+/g, "-")
        .toLowerCase()}`;
      const wrapperTransform = {
        transform: `translateX(-${current * (100 / slides.length)}%)`
      };
  
      return (
        <div className="slider" aria-labelledby={headingId}>
          <ul className="slider__wrapper" style={wrapperTransform}>
            <h3 id={headingId} class="visuallyhidden">
              {heading}
            </h3>
  
            {slides.map((slide) => {
              return (
                <Slide
                  key={slide.index}
                  slide={slide}
                  current={current}
                  handleSlideClick={this.handleSlideClick}
                />
              );
            })}
          </ul>
        </div>
      );
    }
  }

  