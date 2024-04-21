import "./Button.css"

export default function Button({ children }) {
    return (
        <button className="btn btn-reset"><span className="btn__text">{ children }</span></button>
    )
}