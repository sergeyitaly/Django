import React, {useState, useEffect} from 'react';
import "../scss/main.scss"
import { Button, Container, Form } from "react-bootstrap";
import Axios from "axios";
import { Link, useParams, useNavigate  } from "react-router-dom";

export default function Login () {
       const [formPassword, setFormPassword] = useState()
       const [access, setAccess] = useState(localStorage.getItem('accessToken'))
       const [refresh, setRefresh] = useState(localStorage.getItem('refreshToken'))
       const [formUsername, setFormUsername] = useState()
       const [refreshRequired, setRefreshRequired] = useState(false)
       const [dateJoined, setDateJoined] = useState('')
       const [error, setError] = useState()
       const [loading, setLoading] = useState()
       const { uid, token } = useParams();
       const history = useNavigate ();
       const [formEmail, setFormEmail] = useState()


       useEffect(() => {
        if (access) {
                fetch('/api/user',
                    {headers: {'Content-Type': 'application/json;charset=utf-8',
                      'Authorization': `Bearer ${access}`,},}
                )
         
           .then(response => {
             if (response.ok) {
               return response.json()
             } else {if (response.status === 401) { throw Error('refresh')}
                    throw Error(`Error is here: code ${response.status}`)
                     }
           })
           .then(({data}) => {
            setFormUsername(data.formUsername)
            setDateJoined(data.date_joined)
            setError(null)
             })
             .catch(error => {
             if (error.message === 'refresh') { setRefreshRequired(true)} 
             else {console.log(error)
                setError('Ошибка, подробности в консоли')
                           }
             })
             }
            }, [access])

          useEffect(() => {
                    if (refreshRequired) {
                    fetch(
                        '/api/token/refresh',
                        {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json;charset=utf-8',},
                        body: JSON.stringify({ refresh })
                      }
                    )
                      .then(response => {
                        if (response.ok) {
                          return response.json()
                        } else {
                          throw Error(`Something went wrong: code ${response.status}`)
                        }
                      })
                      .then(({access, refresh}) => {
                        localStorage.setItem('accessToken', access)
                        setAccess(access)
                        localStorage.setItem('refreshToken', refresh)
                        setRefresh(refresh)
                        setError(null)
                      })
                      .catch(error => {
                        console.log(error)
                        setError('Ошибка, подробности в консоли')
                      })
                    }
                  }, [refreshRequired])
       const submitHandler = async (e) => {
                 e.preventDefault();
                setLoading(true);
                localStorage.setItem('username', formUsername);
                console.log(formUsername);
                 fetch(
                     '/api/token/obtain',
                  {
                     method: 'POST',
                     headers: {'Content-Type': 'application/json;charset=utf-8'},
                     body: JSON.stringify({username: formUsername,password: formPassword})
                  }
                 )
            .then(response => {
                     if (response.ok) {
                      return response.json()
                     } else {throw Error(`Maybe here: code ${response.status}`)}
                   })
            .then(({access, refresh}) => {
                          localStorage.setItem('accessToken', access)
                          setAccess(access)
                          localStorage.setItem('refreshToken', refresh)
                          setRefresh(refresh)
                          window.location.replace('http://localhost:3000/login/account');
                          setError(null)  
                            })
           .catch(error => {
             console.log(error)
             setError('Ошибка, подробности в консоли')})
           .finally(setLoading(false))}
      
 
      
  return (

    <Container fluid style={{backgroundColor: "#110B09"}} className="py-5 my-5">
    {!access? 
        <Container className="d-flex justify-content-center py-5 flex-column">
            <div className="d-flex flex-column align-items-center">
                <h2 style={{fontWeight: "bold"}}>Login</h2>
                <p style={{textTransform: "none"}}>Please enter your username and password:</p>
            </div>
            <Form className="d-flex flex-column align-items-center" >
                <Form.Group className="mb-3 form-style" controlId="formBasicEmail">
                    <Form.Control type="username" placeholder="Enter username"  name="username" value={formUsername} onChange={e => setFormUsername(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3 form-style" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" name="password" value={formPassword} onChange={e => setFormPassword(e.target.value)}  />
                </Form.Group>
                    <Button className="common-btn mb-3" style={{width: "350px", height: "50px", borderRadius: "30px", fontSize: "22px"}} onClick={submitHandler} >
                     Login 
                   </Button>
                <Link to="/login/create-account">
                    <Button className="common-btn mb-3" style={{width: "350px", height: "50px", borderRadius: "30px", fontSize: "22px"}} >
                        Create Account
                    </Button>
                </Link>
                  <Link to="/login/account/reset/">
                <Button className="common-btn mb-3" style={{width: "350px", height: "50px", borderRadius: "30px", fontSize: "22px"}} >
                        Password reset
                 </Button>
                 </Link>
            </Form>
        </Container>
        :  null }
    </Container>
  
  )
   }
    