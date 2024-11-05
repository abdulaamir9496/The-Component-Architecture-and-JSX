//This component receives an array as a prop and maps over it to display each item.

import PropTypes from 'prop-types';

const ArrayComponent = ({items}) => {
    return (
    <div>
        <h2>Items in Array:</h2>
        <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    </div>
    )
}

ArrayComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default ArrayComponent
