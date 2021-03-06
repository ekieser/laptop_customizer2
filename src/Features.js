import React from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
function Features(props) {
    const features = Object.keys(props.features)
    .map(key => {
        const options = props.features[key].map((item, index) => {
            const selectedClass = item.name === props.selected[key].name ? 'feature__selected' : '';
            const featureClass = selectedClass;
            const itemHash = slugify(JSON.stringify(item));
            return (
                <div className={featureClass}>
                    <input
                    type="radio"
                    key={index} 
                    className="feature__item"
                    onClick={e => props.handleUpdate(key, item)}
                    />
                <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
                </div>
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
