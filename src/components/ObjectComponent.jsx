//This component receives an object as a prop and displays its properties.
import PropTypes from 'prop-types';

const ObjectComponent = ({user}) => {
    return (
        <div>
            <h2>User Information:</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Profession: {user.profession}</p>
        </div>
    )
}

ObjectComponent.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        profession: PropTypes.string.isRequired
    })
}

export default ObjectComponent
