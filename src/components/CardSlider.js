import Carousel from "react-elastic-carousel";
import { useCart } from "react-use-cart";
import data from "./data";
import Card from "./Card";

const CardSlider = (props) => {
    const {addItem} = useCart();
    return (
        <div className="card-slider row">
            <div className="slider">
                <h2 className="mt-4 text-center">Snacks</h2>
                <Carousel>
                    { data.productData.map((item) => {
                        return(
                                <Card 
                                    img={item.img} 
                                    title={item.title} 
                                    price={item.price}
                                    item={item} 
                                    quantity={item.quantity} 
                                    unit={item.unit} 
                                    key={item.id} 
                                    onClick = {(() => addItem(props.id))}
                                />
                            )
                    })}
                </Carousel>
            </div>
        </div>
    );
}
 
export default CardSlider;