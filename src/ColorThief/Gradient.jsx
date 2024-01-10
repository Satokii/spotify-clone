import { usePalette } from "react-palette";

function Gradient({imageUrl}) {

    const { data } = usePalette(imageUrl)
    const imageColour = data.vibrant

    return (
        <></>
    )
}
