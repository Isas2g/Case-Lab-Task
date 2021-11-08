import "./index.scss";
import gif1 from "../../shared/assets/1.gif";
import gif2 from "../../shared/assets/2.gif";
import gif3 from "../../shared/assets/3.gif";
import gif4 from "../../shared/assets/4.gif";

export const Main = () => {

    function getRandomInt(min:number, max:number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const graphImage: { [name: number]: any } = {
        1: gif1,
        2: gif2,
        3: gif3,
        4: gif4,
    }

    return (
        <div className={"d-flex container justify-content-center align-items-end align-content-end"}>
            <div className="d-flex flex-column helloWrapper align-middle mt-auto mb-auto wrapper">
                <div className={"line__1"}><h1>Добро пожаловать на главную страницу</h1></div>
                <div className={"line__2"}><h1>образовательной платформы РЕКОРД Mobile!</h1></div>
            </div>
            <div className={"d-flex"}>
                <img src={graphImage[getRandomInt(1,4)]} alt={"Анимация абстрактная, геометрическая"}/>
            </div>
        </div>
    )
}