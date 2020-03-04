import React from 'react';

function Features(props) {
    const features = Object.keys(this.props.features)
    .map(key => {
        const options = this.props.features[key]((item, index) => {
            const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
            const featureClass = 'feature__option' + selectedClass;
            return (
                <li key={index} className="feature__item">
                    <div className={featureClass}
                        onClick={e => this.props.handleUpdate(key, item)}>
                        { item.name }
                        ({ new Intl.NumberFormat( 'en-US', {style: 'currency', currency: 'USD'})
                        .format(item.cost)})
                    </div>
                </li>
            )
        })
        return (
            <div className="feature" key={key}>
            <div className="feature__name">{key}</div>
                <ul className="feature__list">
                    { options }
                </ul>
            </div>
        )
    })        
    return features;
};

export default Features;