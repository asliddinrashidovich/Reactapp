import { Fragment } from "react"
import ClassComponent from "../components/other/ClassComponent"
import FunctionalComponent from "../components/other/FunctionalComponent"
import CalculotorComponent from "../components/other/CalculoterComponent"
import StyleComponent from "../components/Style/StyleComponent"

function LearningPage() {
    return <Fragment>
        <h1>Learning Page</h1>
        <ClassComponent />
        <FunctionalComponent />
        <CalculotorComponent />
        <StyleComponent />
    </Fragment>
}

export default LearningPage