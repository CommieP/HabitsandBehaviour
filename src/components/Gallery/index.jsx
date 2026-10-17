import CarouselModule from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GalleryData } from "../../Data/GalleryData";
import { AboutData } from "../../Data/AboutData";
import ResponsiveImage from "../ResponsiveImage";

const responsive = { all: { breakpoint: { max: 100000, min: 0 }, items: 1 } };
// This CommonJS package exposes its default differently in Vite's production build.
const Carousel = CarouselModule.default ?? CarouselModule;

export default function Gallery() {
    return <section className="gallery" aria-label="Lab gallery" aria-roledescription="carousel">
        <Carousel swipeable draggable={false} showDots responsive={responsive} infinite
            keyBoardControl={false} customTransition="transform 400ms ease" transitionDuration={400}
            containerClass="carousel-container" dotListClass="custom-dot-list-style" itemClass="gallery-item">
            {GalleryData.map((item, index) => <div className="gallery-slide" key={item.imgSrc}>
                <div className="gallery-image-cont">
                    <ResponsiveImage src={item.imgSrc} alt={AboutData[index].title} className="gallery-image" sizes="100vw" eager={index === 0} />
                </div>
                <div className="gallery-label">
                    <p className="gallery-label-title">{item.title}</p>
                    <p className="gallery-label-body">{item.body}</p>
                </div>
            </div>)}
        </Carousel>
    </section>;
}
