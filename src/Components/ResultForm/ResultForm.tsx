import { useEffect } from 'react';
import './ResultForm.scss'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom'

const ResultForm = (props: any) => {

    let navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        console.log(data)
    }

    const textColor = {color: `${props.form.theme === "dark" ? "#fff" : "#000"}`}
    const buttonColor = {border: `1px solid ${props.form.border}`, background: `${props.form.theme == 'dark' ? "#f9f9f9" : "#0c0c0c"}`, color: `${props.form.theme === "dark" ? "#000" : "#fff"}` }

    return <div className="resultform">
        <form action={`https://formsubmit.co/${props.form.source}`} method="POST" target='_blank'>
            <div className="generator-body">
                <div className="body-form" style={{border: `1px solid ${props.form.border}`, background: `${props.form.theme == 'dark' ? "#0c0c0c" : "#f9f9f9"}`}}>
                    <h1 style={textColor}>{props.form.title ? props.form.title : "Feedback form"}</h1>
                    <div className="form-main">
                        {props.form.name &&
                            <span>
                                <h2 style={textColor}>Your Name :</h2>
                                <div className="main-block">
                                    <input {...register("name")} placeholder='Enter your Name' type="text" />
                                </div>
                            </span>
                        }
                        {props.form.email &&
                            <span>
                                <h2 style={textColor}>Your Email :</h2>
                                <div className="main-block">
                                    <input {...register("email")} placeholder='Enter your Email' type="email" />
                                </div>
                            </span>
                        }
                        {props.form.phone &&
                            <span>
                                <h2 style={textColor}>Your Phone :</h2>
                                <div className="main-block">
                                    <input {...register("phone")} placeholder='Enter your Phone' type="phone" />
                                </div>
                            </span>
                        }
                        <h2 style={textColor}>Your Commentary <span>(max = 2000 sym)</span> :</h2>
                        <div className="main-block">
                            <textarea {...register("message")} maxLength={2000} rows={5} cols={100} ></textarea>
                        </div>
                        <div className="main-block">
                            <input style={buttonColor} className='block-create' value={props.form.button} type="submit" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div className="resultform-info">
            <span>Powered by <Link to="/" style={{ color: `${props.form.border}`, }}>SimpleFeedback</Link></span>
        </div>
    </div>
}

export default ResultForm