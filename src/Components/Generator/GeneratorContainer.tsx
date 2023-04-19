import { connect } from "react-redux"
import {compose} from 'redux'
import Generator from "./Generator"

// thunks
import { addFormAC,  } from "../../store/reducers/formsReducer"

const GeneratorContainer = (props: any) => {

    const formsCount = props.forms.length
    return <Generator  formsCount={formsCount} addFormAC={props.addFormAC} />
}

const mapStateToProps = (state: any) => {
    return {
        forms: state.forms.forms
    }
}

export default compose(connect(mapStateToProps, {addFormAC}))(GeneratorContainer)