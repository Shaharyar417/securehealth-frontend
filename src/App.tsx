import { Box } from "@mui/material"
import TopNav from "./components/navbar"
import Dashboard from "./container/MainDashboard"


function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Top Navigation Bar */}
      <TopNav />

      {/* Main Dashboard Layout */}
      <Dashboard />
    </Box>
  )
}

export default App
