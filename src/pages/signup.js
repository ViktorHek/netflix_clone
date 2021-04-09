import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { FooterContainer } from '../containers/footer'
import HeaderContainer from '../containers/header'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'

const Signup = () => {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid = firstName === '' || password === '' || email === ''

  const handleSignUp = (event) => {
    event.preventDefault()
  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sing Up
            </Form.Submit>
            <Form.Text>
              Do you have an Account?{' '}
              <Form.Link to="/signip">Click Here</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google. come at me braw!
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

export default Signup
