import PropTypes from "prop-types";
import images from "../Data/ImageData.json";

export default function ResponsiveImage({ src, alt, className, sizes, eager = false }) {
    const image = images[src];
    return <img src={image?.src ?? src} srcSet={image?.srcSet} sizes={sizes}
        width={image?.width} height={image?.height} alt={alt} className={className}
        loading={eager ? "eager" : "lazy"} decoding="async" />;
}

ResponsiveImage.propTypes = { src: PropTypes.string.isRequired, alt: PropTypes.string.isRequired, className: PropTypes.string, sizes: PropTypes.string, eager: PropTypes.bool };
