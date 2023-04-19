import { compose } from "redux"
import ResultForm from "./ResultForm"
import { connect } from "react-redux"
import { useParams } from 'react-router-dom';
import { useEffect } from "react";

const ResultFormContainer = (props: any) => {
    let id = useParams().id
    let form = props.forms.filter((e: any) => e.id == id)[0]

    return <ResultForm form={form}/>
}

const mapStateToProps = (state: any) => {
    return {
        forms: state.forms.forms
    }
}

export default compose(connect(mapStateToProps, {}))(ResultFormContainer)