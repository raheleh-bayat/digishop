import Table from "./table";
import {useSelector} from 'react-redux';

const Productlist= () =>{
    let products = useSelector(state => state.product)
    return(
        <div>
                <p>welcome</p>
                <Table data={products}/>
        </div>
    )
}
export default Productlist ;