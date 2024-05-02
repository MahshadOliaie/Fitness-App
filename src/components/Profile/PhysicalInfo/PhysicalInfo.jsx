import CSS from './index.module.css'

function PhysicalInfo() {
    return (
        <>
            <div className={CSS.physicalInfo}>
                <div className={CSS.titleContainer}>
                    <h2 className={CSS.title}>Physical info</h2>
                    <svg className={CSS.editSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" /></svg>
                </div>
                <div className={CSS.info}>
                    <div className={CSS.age}>
                        <p>age</p>
                        <p>22</p>
                    </div>
                    <div className={CSS.weight}>
                        <p>weight</p>
                        <p>68 kg</p>
                    </div>
                    <div className={CSS.height}>
                        <p>height</p>
                        <p>168 cm</p>
                    </div>
                    <div className={CSS.gender}>
                        <p>gender</p>
                        <p>female</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhysicalInfo;