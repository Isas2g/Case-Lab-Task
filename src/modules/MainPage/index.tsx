import "./style/style.css"
import image from "./assets/2_original_size.jpg"

export const Main = () => {
    return (
      <div className="main">
        <img src={image} className="main-image"/>
        <div className="container main-wrapper">
            <div className="helloWrapper my-3">
            <h1 className="text-center hello">Добро пожаловать на главную страницу образовательной платформы RecordMobile!</h1>
            </div>        
        </div>
        {/* <img src={image} className="main-image"/> */}
      </div>
    )
}