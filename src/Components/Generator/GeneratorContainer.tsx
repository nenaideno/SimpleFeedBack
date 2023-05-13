import { connect } from "react-redux"
import {compose} from 'redux'
import Generator from "./Generator"

// thunks
import { addFormR,  } from "../../store/slices/formsSlice"

const GeneratorContainer = (props: any) => {

    const formsCount = props.forms.length
    return <Generator  formsCount={formsCount} addFormR={props.addFormR} />
}

const mapStateToProps = (state: any) => {
    return {
        forms: state.forms.forms
    }
}

export default compose(connect(mapStateToProps, {addFormR}))(GeneratorContainer)