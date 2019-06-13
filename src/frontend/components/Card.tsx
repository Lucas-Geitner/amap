import * as React from "react"
import { AmapCard } from './Props';


/**
 *
 * @param param0
 */
const Card: React.FunctionComponent<AmapCard> = ({title, description, image_secure_url}) => {
    return (
        <div className="mb-10 mt-10">
            <div className="">
                <img className="shadow-md rounded-lg w-full h-64 object-center object-cover" src={image_secure_url} />

                <div className="bg-white rounded-lg px-4 py-3 shadow-lg -mt-16 relative m-4">
                    <span className="bg-teal-200 text-teal-800 font-medium uppercase tracking-wide text-xs leading-none px-1  rounded-lg">Active</span>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
