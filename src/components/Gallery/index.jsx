import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import carousel styles
import "../../components/components.css";
import { GalleryData } from "../../Data/GalleryData"

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Gallery = () => {
    console.log(GalleryData);
    return (
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="gallery-item"
        >
            {GalleryData.map((item, index) => (
                <div key={index}>
                    <div className="gallery-label">
                        <div className="gallery-label-title">
                            {item.title}
                        </div>
                        <div className="gallery-label-body">
                            {item.body}
                        </div>
                    </div>
                    <div className="gallery-image-cont">
                        <img src={item.imgSrc} alt="Item 1" className="gallery-image" />
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Gallery;
