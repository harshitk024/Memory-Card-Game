import Header from "./components/Header";
import Body from "./components/Body";
import {useState,useEffect} from "react"


import "./App.css"


const shuffle = (array) => {
  console.log("shuffling");
  
  const elements = [...array]
  let currentIndex = elements.length;


  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [elements[currentIndex], elements[randomIndex]] = [
      elements[randomIndex],
      elements[currentIndex],
    ];
  }

  return elements

}

const App = () => {

  const [characters,setCharacters] = useState([])
  const [score,setScore] = useState(0)
  const [bestScore,setBestScore] = useState(0)
  const [selectedCards,setSelectedCards] = useState([])

  useEffect(()=>{
    fetch("https://thronesapi.com/api/v2/Characters")
         .then(response => response.json())
         .then((data) => {
           setCharacters(data)
          })
  },[])

  const handleClick = (card) => {

    console.log("clicked");
    
    if(selectedCards.find((id) => id == card) === undefined){
       setScore(score + 1)
       setSelectedCards(selectedCards.concat(card))
    } else {
      
       if (bestScore < score) {
         setBestScore(score);
       }

       setScore(0)
       setSelectedCards([])
    }


     
     
    const shuffled = shuffle(characters)
    setCharacters(shuffled)


  }
  

  return (
    <div className ="main">
      <Header score = {score} bestScore = {bestScore}/>
      <Body characters = {characters}  handleClick = {handleClick}/>
    </div>
  );
};

export default App;
