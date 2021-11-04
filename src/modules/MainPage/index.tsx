import "./style/style.css"
import image from "./assets/main_page1.jpg"

export const Main = () => {
    return (
      <div className="main">
        <div className="container main-wrapper">
            <div className="helloWrapper my-3">
            <h1 className="text-center hello">Добро пожаловать на главную страницу образовательной платформы RecordMobile!</h1>
            </div>        
        </div>
        <img src={image} className="main-image"/>
      </div>
    )
}