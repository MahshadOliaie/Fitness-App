import { useContext } from 'react'
import CSS from './index.module.css'
import FoodContext from '../../context/FoodContext'

function FoodDetail({ data, boxHeader }) {
    const { setBreakfast, setLunch, setDinner, setSnack } = useContext(FoodContext)

    function deleteFn() {
        debugger
        switch (boxHeader) {
            case "breakfast":
                setBreakfast(prev => prev.filter(item => { return item !== data }))
                break;
            case "lunch":
                setLunch(prev => prev.filter(item => { return item !== data }))
                break;
            case "dinner":
                console.log("dinner")
                setDinner(prev => prev.filter(item => { return item !== data }))
                break;
            case "snack":
                setSnack(prev => prev.filter(item => { return item !== data }))
                break;
            default:
        }
    }


    return (
        <div className={CSS.foodDetail}>
            <h3>{data.name}</h3>
            <div className={CSS.rightBox}>
                <div className={CSS.info}>
                    <p className={CSS.cal}>{Math.round(data.calories)} cal</p>
                    <p className={CSS.amount}>{data.serving_size_g} gr</p>
                </div>
                <div className={CSS.deleteBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={CSS.deleteSvg} onClick={deleteFn} viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                </div>
            </div>
        </div>
    )
}

export default FoodDetail