import DashboardMenu from "./components/DashboardMenu"

import "./styles/dashboard.css"

function Dashboard({ setToken }) {

    return (
        <div className="scrollbar-dashboard">
        <main className="dashboard grid">
            <DashboardMenu setToken={setToken} />
            <section className="dashboard--banner grid">Banner</section>
            <section className="dashboard--sub-container grid">Sub-container content</section>
        </main>
        </div>
    )
}

export default Dashboard