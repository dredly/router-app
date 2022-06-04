import { TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    props.onLogin('mluukkai')
    navigate('/')
  }

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <TextField label="username" />
        </div>
        <div>
          <TextField label="password" typ="password" />
        </div>
        <div>
			<Button variant="contained" color="primary" type="submit">
				login
			</Button>
		</div>
      </form>
    </div>
  )
}

export default Login