import React from 'react';
import Features from './Features';

function Content(props) {
    return(
        <section className="entry__form">
            <h3>Customize your laptop</h3>
            <Features
                features={props.features}
                handleUpdate={props.handleUpdate}
                selected={props.selected}
            ></Features>
        </section>
    )
}

export default Content;