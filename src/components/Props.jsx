
const Props = (props) => {
    return (
        <>
            <div>
                {/* <h1>Using of Props and Reusable Components</h1> */}
            </div>
            <div>
                <h1>Login Page using props : 
                    {props.name} 
                    {props.username} 
                    {props.email} 
                    {props.password} 
                    {props.confirmPassword}
                </h1>
            </div>
        </>
    )
}

export default Props

// static data: When we don't use 'props' same data will be printed on web page.
// dynamic data: When we use 'props' we have option to pass different data dynamically.
