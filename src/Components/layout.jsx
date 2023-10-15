import Footer from "../Components/footer"
import Navbar from "../Components/navbar"
const Layout = (props) => {
  return (
    <div className="">
      <Navbar/>
      <div className="min-h-screen bg-gray-400 flex items-center justify-center">
        {props.children}
      <Footer/>
      </div>
    </div>
  )
}

export default Layout