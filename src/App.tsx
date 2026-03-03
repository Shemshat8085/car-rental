import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import NotFound from "./pages/notFound"
import Header from "./components/header"
import Footer from "./components/footer"

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative overflow-hidden">
        {/* Arkaplan gradienti */}
        <div className="fixed inset-0 bg-linear-to-br from-dark-bg via-black-100 to-dark-bg -z-10"/>


        {/*Animasyonlu ishik huzmeleri */}
        <div className="fixed top-20 left-20 w-72 h-72 bg-primary-blue/20 rounded-full blur-3xl -z-10 animate-pulse"/>
        <div className="fixed bottom-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse"
        style={{animationDelay:"2s"}}/>

        <Header />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer/>
        
      </div>
    </BrowserRouter>


  )
}


export default App

