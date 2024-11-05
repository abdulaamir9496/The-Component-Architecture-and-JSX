// If we want to add more 'props' we can add more props
// There is more efficient way to write 'props' which is known as 'destructuring'
//In 'destructuring' we no need to write 'props' again and again as shown below
//Inside the curly {} braces we write our 'properties name' as shown below

const PropsDestructuring = ({name, username, email, password, confirmPassword}) => {
    return (
        <>
            {/* <h1>Efficient way of using props is Destructuring</h1> */}
            <h1> Login Page using Props Destructuring : 
                {name}
                {username}
                {email}
                {password}
                {confirmPassword}
            </h1>
        </>
    )
}

export default PropsDestructuring


//Above mentioned lines of code is the efficient way of handling the 'props' and reusability of components
