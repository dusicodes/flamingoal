import HpBar from "../components/HpBar";
import List from "../components/List";
export default function CoreApp() {
    return (
        <section>
            <HpBar />
            <div className="flex flex-row justify-between bg">
                <List color={"bg-amber-950"} />
                <List color={"bg-amber-600"} />
                <List color={"bg-amber-200"} />
            </div>


        </section>
    )
}
