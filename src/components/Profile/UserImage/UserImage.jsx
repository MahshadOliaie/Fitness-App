import CSS from './index.module.css'

function UserImage() {
    return (
        <div className={CSS.imageContainer}>
            <div className={CSS.userImage}>
                <img src="/user.jpg" alt="" />
            </div>
            <h2 className={CSS.name}>Mahshad</h2>
        </div>
    )
}


export default UserImage