import React from 'react'
import {useSelector} from "react-redux"

function GamerPoints() {
    const points1 = useSelector(state => state.memory.gamerPoints1);
    const points2 = useSelector(state => state.memory.gamerPoints2);
    return (
        <div className="points">
            <h3>
                BEYZA={points2}
            </h3>
            <h3>
                METEHAN={points1}
            </h3>
        </div>
    )
}

export default GamerPoints
