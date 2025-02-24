import { useNavigate } from "react-router-dom"

export default function LandingPage() {
    const navigate = useNavigate()
    const handleRoute = () => {
        navigate("/CoreApp")
    }
    return (
        <section className="h-screen w-screen flex flex-col justify-center items-center gap-4">
            <h1 className=" font-extrabold text-4xl">Welcome to Flamingoal</h1>
            <div className="flex flex-row gap-3">
                <button>Sign In</button>
                <button onClick={handleRoute}>Go to app</button>
            </div>
        </section>
    )
}
