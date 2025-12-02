import "./est1.css"
function Comp1(props) {
    return (
        <div className="test">
            <div className="cabecera">
                
                <img src="public/i3.jpg" class="d-block w-1" alt="..." />
                <img src="public/i2.jpg" class="d-block w-1" alt="..." />
            </div>
            <div className="menu">
                <h4>TITULO: {props.tit}</h4>
                <h5>DESCRIPCION: {props.des}</h5>
            </div>
        </div>
    );
}
export default Comp1;
