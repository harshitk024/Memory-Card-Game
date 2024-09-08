const Card = ({data,handleClick}) => {

    console.log(handleClick)
    return (

        <div className = "card" onClick={handleClick}>
            <img src = {data.imageUrl} width={250} height={300}/>
            <p className="name">{data.fullName}</p>
        </div>
    )
}

const Body = ({characters,handleClick}) => {

    const cards = characters.map((c) => <Card key = {c.id} data = {c} handleClick={() => handleClick(c.id)}/>)
    console.log(cards);
    
  
    return(
        <>
         <div className = "body">
             {cards.slice(1,13)}
         </div>
        </>
    )

}

export default Body;