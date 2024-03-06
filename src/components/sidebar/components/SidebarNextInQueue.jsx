import "../styles/sidebar-next-in-queue.css"
import noteIcon from "../../../assets/svgs/main-app/queue-note.svg"

function SidebarNextInQueue() {
    return (
        <div className="sidebar--queue-container grid">
            <div className="sidebar--queue-headers grid">
                <p className="sidebar--queue-title">Next in queue</p>
                <p className="sidebar--queue-open-queue">Open queue</p>
            </div>
            <div className="sidebar--queue-track-details-container grid">
                <img className="sidebar--queue-note-icon" src={noteIcon} alt="note icon" />
                <img src="" alt="" />
                <div>
                    <p>track title</p>
                    <p>artist</p>
                </div>
            </div>
        </div>
    )
}

export default SidebarNextInQueue