export default function Home({user}){
    return (
        <>
            {
                user.username ?
                <h1>Welcome, {user.username}</h1> :
                <h1>You are not logged in </h1>
            }
        </>
    )
}