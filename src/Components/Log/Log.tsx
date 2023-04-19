import { Link } from 'react-router-dom'
import './Log.scss'

const Log = (props: any) => {

    const formsElements = props.forms?.map((e: any) => {
        return (
            <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td onClick={() => {navigator.clipboard.writeText(e.formLink); alert("Адрес Скопирован")}} id={e.formLink && 'table-link'}>{e.formLink ? e.formLink : "Not found"}</td>
                <td onClick={() => props.deleteFormAC(e.id)} id='table-delete'>Delete</td>
            </tr>
        )
    })

    return <div className="log">
        <div data-aos="fade-down" data-aos-duration="1000" className="log-header">
            <Link className='header-logo' to="/">SimpleFeedBack</Link>
            <Link className='header-create' to="/generator">Create New Form</Link>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="log-body">
            <h1>Your Forms</h1>
            {props.forms.length != 0 ?
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Form Link</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formsElements}
                    </tbody>
                </table>
                :
                <span className="body-error">You don't have any forms created</span>    
        }

        </div>
    </div>
}

export default Log