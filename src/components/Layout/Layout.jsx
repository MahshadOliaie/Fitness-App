import MyHeader from "../Header/MyHeader"
import Toolbar from "../Toolbar/Toolbar"


function Layout({ children, setIsFoodListOpen }) {
    return (
        <>
            <MyHeader />
            {children}
            <Toolbar setIsFoodListOpen={setIsFoodListOpen}/>
        </>
    )
}

export default Layout