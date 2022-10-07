import Button from '../../components/common/Button'
import { useLocation } from 'react-router-dom'

import CloseBTN from './_close_btn';


export default function BurgerNAV() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const pathNames = ["", "DESTINATION", "CREW", "TECHNOLOGY"]

    return (
        <ul className="burger-nav-list">
            <CloseBTN />
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