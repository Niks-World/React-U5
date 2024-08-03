const Navbar = ({user , greeting})=>{
    // console.log(props)
    return (
        <div>
        <h2 style={{color:"blue" , fontFamily:"sans-sherif" }}>Navbar {user} <i> ! {greeting}</i></h2>
        </div>
    )
}

// color:blue ;

const Content = ({user , greeting})=>{
    // console.log(props)
    return (
        <div>
        <h2>Content {user} <i>! {greeting}</i></h2>
        </div>
    )
}

const Footer = (props)=>{
    // console.log(props)
    return (
        <div>
        <h2>Footer {props.user} <i>! {props.greeting}</i></h2>
        </div>
    )
}

const App = ()=>{
   let user = "Chota Bheem"
   let greeting = "Good Morning"

    return (
        <>
        {/* { Navbar(user) }
        { Content(user)} 
        { Footer(user)} */}
        <Navbar user={user} greeting={greeting}/>
        <Content user={user} greeting={greeting}/>
        <Footer user={user}  greeting={greeting} />
        
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)

// root.render(App())
// attributes can be used to share props (parameters) from parent to child
// this is in terms of key - value pair

// props = {
//     user : user , 
//     greeting : greeting
// }

{/* <i>!</i> */}