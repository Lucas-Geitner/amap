import * as React from "react"
import { Props } from './Props';
import Card from './Card'
// Need to create a function to list all the data from it : https://files-qvmwphz4h.now.sh/bence-balla-schottner-1316901-unsplash.jpg


const cardsLists: any = [
    {
        image_secure_url: "https://files-qvmwphz4h.now.sh/bence-balla-schottner-1316901-unsplash.jpg",
        title: "Amap Joinville le pont",
        description: "Amap de joinville",
        id: "qfldskjlkfqsdjllkfjsdlkjflskjl"
    },
    {
        image_secure_url: "https://files-cwup4yth4.now.sh/asoggetti-1250591-unsplash.jpg",
        title: "Amap Ivry",
        description: "Amap d'ivry",
        id: "qfldskjlkfqsdjllkfjsfkdjslkldsdlkjflskjl"
    },
    {
        image_secure_url: "https://files-4o92cnmdx.now.sh/pineapple-supply-co-230315-unsplash.jpg",
        title: "Amap de Saint Maure",
        description: "Amap de Saint Maure",
        id: "qfldskjlkfqsdjllkfjsdlkjflskjl"
    },
    {
        image_secure_url: "https://files-aohg4if1g.now.sh/neha-deshmukh-5769-unsplash.jpg",
        title: "Amap du 11ême ",
        description: "Amap du 11ême",
        id: "qfldskjlkfqsdjllkfqsffsdjsdlkjflskjl"
    }
]


const CardList: React.FunctionComponent<Props> = () => {
    return(
        <div>
            {cardsLists.map((i: any) => (<Card {...i} key={i.id}/>))}
        </div>
    )
}

export default CardList
