import PropTypes from "prop-types"

export default function List({ color }) {
    return (
        <div className={`h-[800px] w-full p-4 ${color}`} > List</div>
    )
}
List.propTypes = {
    color: PropTypes.string.isRequired
}
