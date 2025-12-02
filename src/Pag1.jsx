import "./est1.css"
import Comp1 from "./comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Pie from "./Pie";
import Enlace from "./enlace";
import Menu from "./menu";
function Pag1() {
    return (
        <div className="padre">
            <div className="cabecera">
                <h1>CENTRO CULTURAL DE DANZA BOLIVIANA</h1>
            </div>
            <div className="menu">
                <Menu></Menu>
            </div>
            <div className="contenido">
                <Comp3 nomC="INFORMATICA" nomM="WEB2"></Comp3>
            </div>
            <div className="contenido2">
                <Comp2></Comp2>
                <Comp1 tit="DANZA" des="DANZAS BOLIVIANAS"></Comp1>
            </div>
            <div className="ads">
                <Enlace></Enlace>
            </div>
            <div className="pie">
                <Pie nomC="Joani Josue Huanca Chiri 2025"></Pie>
            </div>
        </div>
    );
}
export default Pag1;
