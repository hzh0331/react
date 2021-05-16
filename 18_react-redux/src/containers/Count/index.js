import CountUI from '../../components/Count'
import {createIncreaseAction, createDecreaseAction, createIncreaseAsyncAction} from "../../redux/count_action";

import {connect} from "react-redux";

function mapStateToProps(state){
    return {count:state}
}

function mapDispatchToProps(dispatch){
    return {
        increase:number => dispatch(createIncreaseAction(number)),
        decrease:number => dispatch(createDecreaseAction(number)),
        asyncIncrease:(number, time) => dispatch(createIncreaseAsyncAction(number, time))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)