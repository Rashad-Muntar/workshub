import * as Yup from 'yup'

export const loginValidation = Yup.object({
    password: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  })
  