import 'bootstrap/dist/css/bootstrap.min.css';
const Button = ({name}) => {
    return(
        <button type="button" className="btn btn-danger">{name}</button>
    )
}   
export default Button