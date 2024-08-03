const {createRoot} = ReactDOM
const {useState} = React

const ShowData = ({data}) => {
    console.log(data)
    return (
        <>
            data.map((ele, i) =>{
                return (
                    <div key={i}>
                    <p></p>
                    </div>
                )
            })
        </>
    )
}