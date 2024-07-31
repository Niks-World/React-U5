
const Greet = ({username, greeting , img}) => {
    return (
        <div>
            <img src={img} />
            <b><i>hey there , {username}, {greeting}</i></b>
        </div>
    )
}

// calling it 100 times
const App=() =>{
    let data =[
        {username = "Nik", greeting : "Good Morining" , img :"https://www.bing.com/th?id=OIP.cvWkJCV0vFdxr0m8ZYtwgwHaHw&w=100&h=105&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"},
        {username = "Vikram", greeting : "Good Night", img :"https://www.bing.com/th?id=OIP.cvWkJCV0vFdxr0m8ZYtwgwHaHw&w=100&h=105&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
        {username = "aman", greeting : "Good Evening", img :"https://www.bing.com/th?id=OIP.cvWkJCV0vFdxr0m8ZYtwgwHaHw&w=100&h=105&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
        {username = "Bheem", greeting : "Good Morining" , img :"https://www.bing.com/th?id=OIP.cvWkJCV0vFdxr0m8ZYtwgwHaHw&w=100&h=105&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"},
    ]
    return (

    
    <div className="Container">

   
        data.map((ele,i) => {
           
            <Greet username={Element.username} greeting={Element.greeting} img={Element.img} />
            
        })

        {/* <Greet username={"Nik"} greeting={"Good Morning"} />
        <Greet username={"Vikram"} greeting={"Good Morning"} /> */}

        </div>
    )
}


const root = React.createRoot(document.getElementById('root'))
root.render(<App/>)