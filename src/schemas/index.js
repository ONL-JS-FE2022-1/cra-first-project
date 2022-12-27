import * as yup from 'yup';

export const SCHEMA = yup.object({
    firstName: yup.string().min(1).max(30),
    lastName: yup.string().min(1).max(30),
    email: yup.string().required('Email required!!!!111!!').email('Email isn`t valid'),
    pass: 
    yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Pass is not valid!')
})