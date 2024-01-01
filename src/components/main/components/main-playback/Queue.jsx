import { useEffect } from "react";
import axios from "axios";

import "../../styles/main-playback/queue.css"

function Queue({ token }) {

    return (
        <div className="main-playback--queue-container grid">
            <h3>Queue</h3>
            <p>Up next:</p>
            <div></div>
        </div>
    )
}

export default Queue