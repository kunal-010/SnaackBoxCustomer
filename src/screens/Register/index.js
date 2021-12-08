import React, { useContext, useState } from 'react'
import { ToastAndroid } from 'react-native';
import RegisterComponent from '../../components/RegisterComponent';
import register from '../../context/actions/auth/register';
import { GlobalContext } from '../../context/Provider';

const Register = ({navigation}) => {

    const [errors, setErrors] = useState({});
    const [form,setForm] = useState({});

    const {
        authDispatch,
        authState: {isLoggedIn}
    } = useContext(GlobalContext);

    const onSubmit = async () => {
        await register(form)(authDispatch);         
    }

    return (
        <RegisterComponent 
            errors={errors}
            setErrors={setErrors}
            form={form}
            setForm={setForm}
            onSubmit={onSubmit}
        />
    )
}

export default Register;
