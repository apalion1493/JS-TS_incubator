// window.setTimeout(() => {alert(123)} , 300)

export const User = (props: any) => {
    const deleteUser = () => {
      alert('user delete')
    }

    const saveUser = () => {
      alert('save user')
    }

    return (
        <div>
            <span>Alex</span>
            <button onClick={deleteUser}>Delete</button>
            <button onClick={saveUser}>Save</button>
        </div>
    )
}