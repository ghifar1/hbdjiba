import { useState } from "react"
import Surprise from "../pages/Surprise";
import WelcomePin from "../pages/WelcomePin";

const PageController = () => {
    const [pageState, setPageState] = useState(1)

    switch (pageState) {
        case 0:
            return <WelcomePin changePage={setPageState} />
        case 1:
            return <Surprise />

        default:
            break;
    }
}

export default PageController