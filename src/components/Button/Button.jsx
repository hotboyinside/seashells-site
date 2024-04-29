import "./Button.css"

export default function Button({ children, mod }) {
    return (
        <button className={`btn btn-reset ${mod ? mod: ''}`}><span className="btn__text">{ children }</span></button>
    )
}