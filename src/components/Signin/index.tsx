import React, { Component } from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap,Text } from './SigninElements'
import { Icon } from '../Sidebar/SidebarElements'

export default class index extends Component {
  render() {
    return (
      
            <Container>
                <FormWrap>
                    <Icon to="/">dolla</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        
      
    )
  }
}
