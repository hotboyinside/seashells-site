import "./Button.css"

export default function Button({ linkPath, mod, children }) {
    return (
        <a href={linkPath} className={`btn btn-reset btn-link ${mod ? mod: ''}`}><span className="btn__text">{ children }</span></a>
    )
}