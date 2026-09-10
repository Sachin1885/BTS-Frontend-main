import Form from "../Components/Form"

function LoginAdmin() {
    return(
        <>
        <Form route="/api/token/" method="login" />
        </>
    );
}

export default LoginAdmin;