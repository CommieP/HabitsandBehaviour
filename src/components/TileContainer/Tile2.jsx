import PropTypes from "prop-types";

export default function Tile2({ title, subTitle, src, url, width, height, headingLevel = 2, actionLabel = "View" }) {
    const Heading = `h${headingLevel}`;
    return <article className="tile">
        <img src={src} alt={title} width={width} height={height} className="tileImage" loading="lazy" decoding="async" />
        <Heading className="tileTitle">{title}</Heading>
        <p className="tileSubTitle">{subTitle}</p>
        {url ? <a className="tileButton" href={url} target="_blank" rel="noopener noreferrer" aria-label={`${actionLabel}: ${title} (opens in a new tab)`}>
            {actionLabel}<span className="srOnly"> (opens in a new tab)</span>
        </a> : <p className="unavailable">Details unavailable</p>}
    </article>;
}

Tile2.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    src: PropTypes.string.isRequired,
    url: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    headingLevel: PropTypes.oneOf([2, 3]),
    actionLabel: PropTypes.string,
};
