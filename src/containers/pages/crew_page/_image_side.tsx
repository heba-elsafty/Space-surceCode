import DouglasHurley from '../../../assets/crew/image-douglas-hurley.png'
import MarkShuttleworth from '../../../assets/crew/image-mark-shuttleworth.png'
import VictorGlover from '../../../assets/crew/image-victor-glover.png'
import AnoushehAnsari from '../../../assets/crew/image-anousheh-ansari.png'
import { DataContext } from "../../../hooks/ContextProvider"
import { useContext } from "react"

export default function ImageSide() {
  const { DataIndex } = useContext(DataContext)
  return (
    <section className="image-side">
      <img src={DataIndex === 0 ? DouglasHurley : "" ||
        DataIndex === 1 ? MarkShuttleworth : "" ||
          DataIndex === 2 ? VictorGlover : "" ||
            DataIndex === 3 ? AnoushehAnsari : ""
      }
        alt="crew member" className="crew-member-img" />
    </section>
  )
}
