import "../styles/index.scss"
import * as React from "react"
import { Props } from "../../util/Props";
import CardList from "../components/CardList"

const Home: React.FunctionComponent<Props> = (props) => {
  return (
  <React.Fragment>
      <h3 className="text-gray-900 text-xl"> Ile de France</h3>
      <p className="text-gray-600 pb-3"> Toutes les 349 AMAP d'ile de France</p>
      <CardList {...props} />
    </React.Fragment>
  )
}

export default Home;
