import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../redux/reducer';

// export default function Login(props) {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const dispatch = useDispatch()


//     return (
//         <div className="login-container">
//             <h2>LOG IN COMPONENT:</h2>
//             <input onChange={e => setEmail(e.target.value)} placeholder="email" type="text" className="username" />
//             <input onChange={e => setPassword(e.target.value)} placeholder="password" type="text" className="password" />
//             <button onClick={login()} className="login">Log In</button>
//         </div>
//     )
// }

// const login = () => {
//     axios.post('/api/auth/login', { username: email, password: password })
//         .then(res => {
//             dispatch(updateUser(useState))
//             props.history.push('/instructors/gateway')
//         })
//         .catch(err => {
//             console.log(err)
//             this.setState({ errorMsg: 'Incorrect username or password!' })
//         })
// }

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (prop, val) => {
        this.setState({ [prop]: val })
    }

    login = () => {
        axios.post('/api/auth/login', this.state)
            .then(res => {
                this.props.updateUser(res.data)
                // console.log(res.data)
                this.props.history.push('/instructors/gateway');
            })
            .catch(err => {
                // console.log(err)
                this.setState({ errorMsg: 'Incorrect username or password!' })
            })
    }

    render() {
        return (
            <div className="login-container">
                <h2>LOG IN COMPONENT:</h2>
                <input onChange={e => this.handleChange('email', e.target.value)} placeholder="email" type="text" className="username" />
                <input onChange={e => this.handleChange('password', e.target.value)} placeholder="password" type="text" className="password" />
                <button onClick={this.login} className="login">Log In</button>
            </div>
        )
    }
}

export default connect(undefined, { updateUser })(Login);