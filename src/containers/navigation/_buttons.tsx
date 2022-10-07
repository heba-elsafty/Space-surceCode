import Button from '../../components/common/Button'
import { useLocation } from 'react-router-dom'

export default function Buttons() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const pathNames = ["", "DESTINATION", "CREW", "TECHNOLOGY"]

    return (
        <ul className='nav-list'>
            {pathNames.map((ele, index) => {
                return <li key={ele} className={splitLocation[1] === ele ? "container active" : "container"}>
                    <p className='page-index'>0{index}</p>
                    <Button btnName={ele === "" ? "HOME" : ele} linkTo={ele === "" ? "/" : `/${ele}`} />
                </li>
            })
            }
        </ul>
    )

}