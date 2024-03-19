<link href="https://fonts.cdnfonts.com/css/nats" rel="stylesheet"></link>

import Sidebar from './Components/Sidebar/Sidebar'
import Navbar from './Components/Navbar/Navbar'

const RootLayout = ({ children }) => {
  return (
    <div className="flex h-screen" style={{fontFamily: 'NATS'}}>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className=" flex-1 ">
          {children}
        </main>
      </div>
    </div>
  )
}

export default RootLayout
