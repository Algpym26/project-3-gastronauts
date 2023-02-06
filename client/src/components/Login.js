import './styles/login.css';

const Login = () => {

    return (
        <div>
    <header>
    <h1>Welcome to Gastronauts</h1>
    <p>Enter your credentials and you can get started making your reservation!</p>
    </header>
    <form>
    <h2>Email</h2>
    <input 
    placeholder="email@address.com"
    name="email"
    type="email"
    id="email"
    />
    <h2>Password</h2>
    <input
    placeholder="your password"
    name = "password"
    id = "pwd"
    />
    <br/>
    <button type="submit">Login</button>
  </form>
  </div>
    )
}

export default Login;