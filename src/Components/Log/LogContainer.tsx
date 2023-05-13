import { compose } from "redux"
import Log from "./Log"
import { connect } from "react-redux"
import { deleteFormR } from "../../store/slices/formsSlice"

const LogContainer = (props: any) => {


    return <Log deleteFormR={props.deleteFormR} forms={props.forms} />
}

const mapStateToProps = (state: any) => {
    return {
        forms: state.forms.forms
    }
}

export default compose(connect(mapStateToProps, {deleteFormR}))(LogContainer)