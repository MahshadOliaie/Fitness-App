
import CSS from './index.module.css'

function StepBar() {
    const current = location.pathname.replace("/", "")

    return (
        <div className={CSS.container}>
            <div className={CSS.number}>1</div>
            <div className={CSS.line} style={{ background: (current >= 2) ? "#6b7280" : "#d1d5db" }}></div>
            <div className={CSS.number} style={{ background: (current >= 2) ? "#92c5fd" : "#dbe9fe", border: (current >= 2) ? "2px solid #6b7280" : "2px solid #d1d5db" }}>2</div>
            <div className={CSS.line} style={{ background: (current >= 3) ? "#6b7280" : "#d1d5db" }}></div>
            <div className={CSS.number} style={{ background: (current >= 3) ? "#92c5fd" : "#dbe9fe", border: (current >= 3) ? "2px solid #6b7280" : "2px solid #d1d5db" }}>3</div>
            <div className={CSS.line} style={{ background: (current == 4) ? "#6b7280" : "#d1d5db" }}></div>
            <div className={CSS.number} style={{ background: (current >= 4) ? "#92c5fd" : "#dbe9fe", border: (current >= 4) ? "2px solid #6b7280" : "2px solid #d1d5db" }}>4</div>
        </div>
    )
}

export default StepBar