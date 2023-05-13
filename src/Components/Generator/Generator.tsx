import { useState } from 'react'
import './Generator.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";


const Generator = (props: any) => {

    const navigate = useNavigate()

    let [name, setName] = useState(false)
    let [email, setEmail] = useState(false)
    let [phone, setPhone] = useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        data.id = props.formsCount + 1
        data.name = name;
        data.email = email;
        data.phone = phone;
        data.formLink = `${window.location.origin}/form/${data.id}`
        props.addFormR(data)
        navigate(`/form/${data.id}`)
    }

    return <div className="generator">
        <div className="generator-header">
            <Link data-aos="fade-down" data-aos-duration="1000" className="generator-logo" to='/'>SimpleFeedBack</Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div data-aos="fade-up" data-aos-duration="1000" className="generator-body">
                <div className="body-form">
                    <h1>Create New Form</h1>
                    <div className="form-main">
                        <h2>Your Email* <span>(*The email where the results will be sent)</span> :</h2>
                        <div className="main-block">
                            <input {...register("source")} type="email" placeholder='Email for feedback'/>
                        </div>
                        <h2>Form Title:</h2>
                        <div className="main-block">
                            <input {...register("title")} type="text" placeholder='Title for your form'/>
                        </div>
                        <h2>What fields to add?* <span>(*Text area - enabled by default)</span> :</h2>
                        <div className="main-block">
                            <span onClick={() => setName(name ? false : true)} className={name ? "focused" : ""}>Add "Name" Field</span>
                            <span onClick={() => setEmail(email ? false : true)} className={email ? "focused" : ""}>Add "Email" Field</span>
                            <span onClick={() => setPhone(phone ? false : true)} className={phone ? "focused" : ""}>Add "Phone" Field</span>
                        </div>
                        <h2>Define form styles :</h2>
                        <div className="main-block">
                            <div className="block-styles">
                                <h3>Form Background</h3>
                                <select {...register("theme")}>
                                    <option value="dark">Dark</option>
                                    <option value="light">Light</option>
                                </select>
                            </div>
                            <div className="block-styles">
                                <h3>Form Border</h3>
                                <select {...register("border")}>
                                    <option value="red">Red</option>
                                    <option value="blue">Blue</option>
                                    <option value="orange">Orange</option>
                                    <option value="lime">Lime</option>
                                    <option value="cyan">Cyan</option>
                                    <option value="yellow">Yellow</option>
                                </select>
                            </div>
                        </div>
                        <h2>Text on the button :</h2>
                        <div className="main-block">
                            <input {...register("button")} placeholder='Submit button text' defaultValue='Submit' type="text" />
                        </div>
                        <div className="main-block">
                            <input className='block-create' value='Create' type="submit" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
}

export default Generator