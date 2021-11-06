import { observer } from "mobx-react-lite";
import store from "../../../../Search/Users/store";


const Companies = observer(():JSX.Element => {

    return(
        <>
            {store.companies ? store.companies.map( (company, index) => <option key={index}>{company}</option>): ""}
        </>
    )
})

export default Companies;