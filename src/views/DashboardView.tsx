
import ParticipantsAnalytics from "../components/Dashboard/ParticipantsAnalytics"
import InsightCardsContainer from "../components/Dashboard/InsightCardsContainer"
import MultiDataGrid from "../components/Dashboard/MultiDataGrid"

function DashboardView() {
    return (
      <div className="w-full flex flex-col gap-y-14">
        <ParticipantsAnalytics/>
        <InsightCardsContainer/>
        <MultiDataGrid/>
      </div>
    )
  }
  
  export default DashboardView