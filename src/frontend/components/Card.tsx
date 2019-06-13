import * as React from "react"
import { Amap } from '../../util/Props';
import { isEmpty, length, equals } from 'ramda'

/**
 * Card of AMAP
 * @param param0
 */
const Card: React.FunctionComponent<Amap> = ({title, description, image_secure_url, paysans = [{}], }: Amap) => {

    let isPaysan = !isEmpty(paysans)
    let paysanLenght = length(paysans)
    let isOnlyOnePaysan = equals(paysanLenght, 1)
    let pluralized = (isOnlyOnePaysan) ? '' : 's'

   // map pour ajouter tout les champs


    // let food = map(prop("nourritures"))(paysans)
    // const food = paysans.map((p: any) => p && console.log(p) && !is(p.nourritures) && !isEmpty(p.nourritures) )
    //  = concat(food)
    // let concatFood = chain(identity(food))
    // let isFood = isEmpty(concatFood)
    // undefined
    // [], ["", "", ""]
    // function
    // console.log(food, { isFood, concatFood })
    // const moreThen20Characters = gt(20, concatenedFood)
    // let foodDisplayd = both(isPaysan, )) ? food : food.slice(0, 21) + "..."

    return (
        <div className="mb-10 mt-10">
            <div className="">
                <img className="shadow-md rounded-lg w-full h-64 object-center object-cover" src={image_secure_url} />
                <div className="bg-white rounded-lg px-4 py-3 shadow-lg -mt-16 relative m-4">
                    <span className="bg-teal-200 text-teal-800 font-medium uppercase tracking-wide text-xs leading-none px-1 inline-block rounded-lg">Active</span>
                    {/* <div className="ml-2 text-xs text-gray-600 inline-block">{concatenedFood} </div> */}
                    <h4 className="mt-1 text-gray-900 font-semibold text-lg">{title}</h4>
                    <p className="mt-1 text-gray-700 font-light text-sm">{description}</p>
                    {isPaysan && <p className="mt-3 text-gray-700 font-light text-xs">🚜 {paysanLenght} paysan{pluralized} </p>}
                </div>
            </div>
        </div>
    )
}

export default Card
