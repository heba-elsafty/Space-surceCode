import { Link } from "react-router-dom";
import './Button.css'

type StatusProps = {
    btnName: string,
    linkTo: string
}

export default function Button(props: StatusProps) {
    return (
        <Link className={'Button'}
            to={props.linkTo}>{props.btnName}</Link>
    )
}
