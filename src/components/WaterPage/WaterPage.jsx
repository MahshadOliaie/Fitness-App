import CSS from './index.module.css'

function WaterPage() {
    return (
        <div className={CSS.container}>
            <svg viewBox="0 0 36 36" className={CSS.diagram}>
                <path className={CSS.baseline} strokeDasharray="100" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className={CSS.waterPath} strokeDasharray="40 100" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
        </div>
    )
}

export default WaterPage