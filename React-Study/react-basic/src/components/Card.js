import React from 'react';
import propsTypes from 'prop-types';

const Card = ({ title, onClick, children }) => {
    // {title: 'title}
    return (
        <div className="card mb-3 cursor-pointer" onClick={onClick}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>{title}</div>
                    {children && <div>buttons</div>}
                </div>
            </div>
        </div>
    );
};

Card.propsTypes = {
    title: propsTypes.string.isRequired,
    children: propsTypes.element,
    onClick: propsTypes.func,
};

Card.defaultProps = {
    children: null,
    onClick: () => {},
};

export default Card;
