import CSS from './index.module.css'

function Food({data}) {
    return (
        <>
            <div className={CSS.food}>
                <div className={CSS.name}>{data.name}</div>
                <div className={CSS.rightBox}>
                    <div className={CSS.info}>
                        <p className={CSS.cals}>{Math.round(data.calories)} cals</p>
                        <p className={CSS.serving}>{Math.round(data.serving_size_g)} gr</p>
                    </div>

                    <div className={CSS.selectBox}></div>
                </div>

            </div>
        </>
    )
}

export default Food