



const Navbar =(props) =>{
    // console.log(user)
    return (
        
// this is for refrencer 
       
        <div>
            <h2>navbar1{props.user} <i> !{props.greeting}</i></h2>
        </div>
    )
}
 //               destructer here 
const Content =({user, greeting}) =>{
    // console.log(user)
    return (
        

       
        <div>
            <h2> content{user} <i>!{greeting}</i></h2>
        </div>
    )
}

const Footer =({user, greeting}) =>{
    // console.log(user)
    return (
        

       
        <div>
            <h2>footer{user}<i>!{greeting}</i></h2>
        </div>
    )
}

// camplie the all function here 
const App =() =>{
    let user = "Chota Bheem"
    let greeting = "Good morning"

    return (
        <>
        
        {/* {Navbar()}  // this is also one way to call 
        {Content()}
        {Footer(user)} */}
        <Navbar user={user} greeting={greeting} />
        <Content user={user} greeting={greeting} />
        <Footer user={user} greeting={greeting} />

        </>
    )
}






const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
// root.render(<Navbar/>)  // not work like this 
// root.render(<Content />)
// root.render(<Footer/>)

// attribute can be used to share props (parameter) from parent to child 
// this is in terms of key - value pair 

// props =(
// user :user
// greeting : greeting
// )