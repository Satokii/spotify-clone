import changeVolume from "../functions/changeVolume"

import VolumeOnIcon from "../../../assets/svgs/volume/volume-on.svg"
import VolumeMuteIcon from "../../../assets/svgs/volume/volume-mute.svg"
import { useState } from "react"

function VolumeIcon({ token }) {

    const [mute, setMute] = useState(false)
    const [lastVolume, setLastVolume] = useState(0)

    const handleMuteBehaviour = (e) => {
        if (mute === false) {
            // setMute(true)
            console.log(e.target)
            // changeVolume(token, 0)
        }
        else {
            setMute(false)
        }
    }

    return (
        <div onClick={e => handleMuteBehaviour(e)}>
            {mute ? 
            <img className="volume-mute-icon" src={VolumeMuteIcon} alt="volume mute icon" width={50} />
            : <img className="volume-on-icon" src={VolumeOnIcon} alt="volume on icon" width={50} />
            }
        </div>
    )
}

export default VolumeIcon