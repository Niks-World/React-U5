
const Greet = ({username , greeting , img})=>{
    return (
        <div>
            <img src={img} />
            <b><i>Hey there , {username} , {greeting}</i></b>
        </div>
    )
}

const App = ()=>{
    let data = [
        {username : "Parveen" , greeting : "good morning" , img : "https://dummyimage.com/200x200/000/fff"} , 
        {username : "Vikram" , greeting : "good night" , img : "https://dummyimage.com/200x200/000/fff"},
        {username : "walter" , greeting : "good morning" , img : "https://dummyimage.com/200x200/000/fff"} , 
        {username : "Bheem" , greeting : "good night" , img : "https://dummyimage.com/200x200/000/fff"} , 
        {username : "Bheem" , greeting : "good night" , img : "https://dummyimage.com/200x200/000/fff"}
    ]
    
    return (
       <div className="container">
        {
            data.map((ele,i)=><Greet username={ele.username} greeting={ele.greeting} img={ele.img} />
            )
        }
       </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)