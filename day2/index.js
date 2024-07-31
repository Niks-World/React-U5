



const Navbar =(user) =>{
    console.log(user)
    return (
        

       
        <div>
            <h2>navbar1{user}</h2>
        </div>
    )
}

const Content =(user) =>{
    console.log(user)
    return (
        

       
        <div>
            <h2> content{user}</h2>
        </div>
    )
}

const Footer =(user) =>{
    console.log(user)
    return (
        

       
        <div>
            <h2>footer{user}</h2>
        </div>
    )
}

// camplie the all function here 
const App =() =>{
    let user = "Chota Bheem"

    return (
        <>
        
        {/* {Navbar()}  // this is also one way to call 
        {Content()}
        {Footer(user)} */}
        <Navbar />
        <Content />
        <Footer />

        </>
    )
}






const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
// root.render(<Navbar/>)  // not work like this 
// root.render(<Content />)
// root.render(<Footer/>)

//