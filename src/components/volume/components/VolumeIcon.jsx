import changeVolume from "../functions/changeVolume"

import VolumeOnIcon from "../../../assets/svgs/volume/volume-on.svg"
import VolumeMuteIcon from "../../../assets/svgs/volume/volume-mute.svg"
import { useState } from "react"

function VolumeIcon({ token, volume }) {

    const [mute, setMute] = useState(false)
    const [savedLastVolume, setSavedLastVolume] = useState(0)

    const handleMuteBehaviour = (e) => {
        if (mute === false) {
            setSavedLastVolume(volume)
            setMute(true)
            changeVolume(token, 0)
        }
        else {
            setMute(false)
            changeVolume(token, savedLastVolume)
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