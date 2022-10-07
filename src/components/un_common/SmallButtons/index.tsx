import { useContext } from "react"
import { DataContext } from "../../../hooks/ContextProvider"
import "./SmallButtons.css"
export default function SmallButtons() {

    const { DataIndex, setDataIndex } = useContext(DataContext)
    const links = ["Moon", "Mars", "Europa", "Titan"]

    return (
        <section className="small-buttons-component">
            {links.map((el, index) => {
                return <button key={index} onClick={() => setDataIndex(index)} className={DataIndex === index ? "small-buttons active" : "small-buttons"}>{el}</button>
            })}
        </section>
    )
}
