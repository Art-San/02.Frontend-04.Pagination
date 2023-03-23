/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'
// import Qualitie from './Qualitie'
import BookMark from './Bookmark'
// import PropTypes from 'prop-types'
const Сiti = ({
    _id,
    name,
    km,
    standard,
    elongated,
    big,
    threetons,
    fivetons,
    bookmark,
    onToggleBookMark,
    onDelete
}) => {
    // console.log('Km', km)
    // console.log('standard.hour', standard.hour)
    // console.log('standard.priceKm', standard.priceKm)
    console.log(km * 2 * standard.priceKm + standard.hour)
    return (
        <tr>
            <td>{name}</td>
            <td>{km}</td>
            <td>{km * 2 * standard.priceKm + standard.hour}</td>
            <td>{elongated}</td>
            <td>{big}</td>
            <td>{threetons}</td>
            <td>{fivetons}</td>
            <td>
                <BookMark
                    status={bookmark}
                    onClick={() => onToggleBookMark(_id)}
                />
            </td>
            <td>
                <button
                    onClick={() => onDelete(_id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            </td>
        </tr>
    )
}

// Сiti.propTypes = {
//     _id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     qualities: PropTypes.array,
//     profession: PropTypes.object.isRequired,
//     completedMeetings: PropTypes.number.isRequired,
//     rate: PropTypes.number.isRequired,
//     onDelete: PropTypes.func.isRequired,
//     bookmark: PropTypes.bool,
//     onToggleBookMark: PropTypes.func.isRequired
// }

export default Сiti
