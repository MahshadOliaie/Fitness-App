import { useContext } from "react"
import AccountInfo from "./AccountInfo/AccountInfo"
import ActivityLevel from "./ActivityLevel/ActivityLevel"
import Goal from "./Goal/Goal"
import PhysicalInfo from "./PhysicalInfo/PhysicalInfo"
import UserImage from "./UserImage/UserImage"
import CSS from './index.module.css'

function Profile() {

    return (
        <>
            <div className={CSS.profileContainer}>
                <UserImage />
                <AccountInfo />
                <PhysicalInfo />
                <ActivityLevel />
                <Goal />
            </div>
        </>
    )
}

export default Profile