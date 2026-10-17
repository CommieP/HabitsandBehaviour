import PropTypes from "prop-types";

export const paperType = PropTypes.shape({ title: PropTypes.string.isRequired, author: PropTypes.string.isRequired, url: PropTypes.string });
export const imageContentType = PropTypes.shape({ title: PropTypes.string.isRequired, body: PropTypes.string.isRequired, imgSrc: PropTypes.string.isRequired });
