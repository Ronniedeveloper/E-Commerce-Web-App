import { useParams } from "react-router-dom";
import data from "./data";

const CardDetails = () => {
    const { id } = useParams();
    
    return (
        <div>
            { data.productData.map((item) => {
                return(
                    <div>
                        <img src={item.img} alt="" style={{height: "6rem"}} />
                        <h2>{item.title }</h2>
                        <div>
                            <h2>{ item.price}</h2>
                            <p>{ item.desc }</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
 
export default CardDetails;