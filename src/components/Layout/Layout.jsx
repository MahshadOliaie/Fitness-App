import MyHeader from "../Header/MyHeader"
import Toolbar from "../Toolbar/Toolbar"


function Layout({ children, setIsFoodListOpen, setSelectedMeal }) {
    return (
        <>
            <MyHeader />
            {children}
            <Toolbar setIsFoodListOpen={setIsFoodListOpen} setSelectedMeal={setSelectedMeal} />
        </>
    )
}

export default Layout