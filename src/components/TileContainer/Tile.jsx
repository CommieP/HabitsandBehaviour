import PropTypes from "prop-types";

export default function Tile({ title, author, url, headingLevel = 2 }) {
    const Heading = `h${headingLevel}`;
    return (
        <article className="tile">
            <Heading className="tileTitle">{title}</Heading>
            <p className="tileSubTitle">{author}</p>
            {url ? <a className="tileButton" href={url} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} by ${author} (PDF, opens in a new tab)`}>View<span className="srOnly"> PDF (opens in a new tab)</span></a>
                : <p className="unavailable">Document unavailable</p>}
        </article>
    );
}

Tile.propTypes = { title: PropTypes.string.isRequired, author: PropTypes.string.isRequired, url: PropTypes.string, headingLevel: PropTypes.oneOf([2, 3]) };
