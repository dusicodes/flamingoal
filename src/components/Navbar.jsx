import { Link } from "react-router-dom"
import PropTypes from "prop-types";
export default function Navbar({ state }) {
    return (
        <nav className="bg-gray-800 p-4 rounded-4xl w-5xl place-self-center">
            <div className="text-white flex flex-row gap-4 items-center justify-center">
                {
                    state ?
                        <>
                            <Link to="/About" className="text-white">About</Link>
                            <Link to="/" className="text-white">Flamingoal</Link>
                            <Link to="/Contact" className="text-white">Contact</Link>
                        </>
                        :
                        <>
                            <Link to="/homeCoreApp" className="text-white">games</Link>
                            <Link to="/" className="text-white">Home</Link>
                            <Link to="/profile" className="text-white">settings</Link>
                        </>

                }
            </div>
        </nav >
    )
}

Navbar.propTypes = {
    state: PropTypes.bool.isRequired,
};