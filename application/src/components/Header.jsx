const PointsCard = ({score,bestScore}) => {
    return (
        <div className="scorecard">
        <div>Best Score : {bestScore}</div>
        <div>Score : {score}</div>
        </div>
    )
}

const Header = ({score,bestScore}) => {
  
    return(
        <>
         <div className="header">
            <div id = "title">
            <h1 >GOT Memory Game</h1>
            <p>Earn points by clicking an image but Don't Click the image more than once</p>
            </div>
            <PointsCard score = {score} bestScore = {bestScore}/>
         </div>
        </>
    )

}

export default Header;