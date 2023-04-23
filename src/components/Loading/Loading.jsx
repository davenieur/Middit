import PropTypes from 'prop-types';

export const Loading = ({ searchValue }) => {
    return(
        <h2>Loading...</h2>
    )
} 

Loading.propTypes = {
    searchValue: PropTypes.string.isRequired
}