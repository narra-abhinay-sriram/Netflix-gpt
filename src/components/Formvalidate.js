
const Formvalidate = (email,password) => {

    const emailvalidate=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const passwordvalidate=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)
if(!emailvalidate)
    return "Email is not valid"
if(!passwordvalidate)
    return "password is not valid"
return null
}
export default Formvalidate
