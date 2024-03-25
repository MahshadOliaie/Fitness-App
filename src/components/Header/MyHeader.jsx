import CSS from './index.module.css'

function MyHeader() {
    return (
        <div className={CSS.header}>
            <div className={CSS.image}></div>
            <div className={CSS.date}>
                <div className={CSS.previous}>
                    <img src="/arrow.svg" className={CSS.arrowLeft} />
                </div>
                <div className={CSS.day}>
                    <p className={CSS.today}>TODAY</p>
                    <p className={CSS.month}>MAY 24</p>
                </div>
                <div className={CSS.next}>
                    <img src="/arrow.svg" className={CSS.arrowRight} />
                </div>
            </div>
            <div className={CSS.bar}>
                <img src='/bar.svg' />
            </div>
        </div>
    )
}

export default MyHeader