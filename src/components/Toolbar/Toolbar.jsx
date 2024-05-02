import { useState } from 'react'
import MealSelector from '../MealSelector/MealSelector'
import CSS from './index.module.css'
import { useNavigate } from 'react-router-dom'


function Toolbar({ setIsFoodListOpen, setSelectedMeal }) {
    const [isMealSelectorOpen, setIsMealSelectorOpen] = useState(false)
    const nav = useNavigate();

    return (
        <div className={CSS.toolbar}>
            <svg className={CSS.profile} onClick={() => nav("/Profile")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill={(location.pathname == "/Profile") ? "black" : ''} d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
            <svg className={CSS.recepi} onClick={() => nav("/Recipes")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill={(location.pathname == "/Recipes") ? "black" : ''} d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" /></svg>
            <div className={CSS.space}></div>
            <svg className={CSS.water} onClick={() => nav("/WaterPage")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill={(location.pathname == "/WaterPage") ? "black" : ''} d="M32 0C23.1 0 14.6 3.7 8.6 10.2S-.6 25.4 .1 34.3L28.9 437.7c3 41.9 37.8 74.3 79.8 74.3H275.3c42 0 76.8-32.4 79.8-74.3L383.9 34.3c.6-8.9-2.4-17.6-8.5-24.1S360.9 0 352 0H32zM73 156.5L66.4 64H317.6L311 156.5l-24.2 12.1c-19.4 9.7-42.2 9.7-61.6 0c-20.9-10.4-45.5-10.4-66.4 0c-19.4 9.7-42.2 9.7-61.6 0L73 156.5z" /></svg>
            <svg className={CSS.dashboard} onClick={() => nav("/")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={(location.pathname == "/") ? "black" : ""} d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-15.9-5.8-30.4-15.3-41.6l76.6-147.4c6.1-11.8 1.5-26.3-10.2-32.4s-26.2-1.5-32.4 10.2L262.1 288.3c-2-.2-4-.3-6.1-.3c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z" /></svg>

            {(location.pathname == "/") &&
                <div className={CSS.addBtnBg}>
                    <div className={CSS.addBtn} onClick={() => setIsMealSelectorOpen(prev => !prev)}>
                        <svg style={isMealSelectorOpen ? { rotate: "-45deg", transition: '200ms' } : {}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                    </div>
                </div>
            }
            {isMealSelectorOpen && <MealSelector setSelectedMeal={setSelectedMeal} setIsFoodListOpen={setIsFoodListOpen} setIsMealSelectorOpen={setIsMealSelectorOpen} />}
        </div>
    )
}

export default Toolbar