import { compose } from "redux"
import Log from "./Log"
import { connect } from "react-redux"
import { deleteFormAC } from "../../store/reducers/formsReducer"

const LogContainer = (props: any) => {


    return <Log deleteFormAC={props.deleteFormAC} forms={props.forms} />
}

const mapStateToProps = (state: any) => {
    return {
        forms: state.forms.forms
    }
}

export default compose(connect(mapStateToProps, {deleteFormAC}))(LogContainer)