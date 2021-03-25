import React from 'react' 
import {Footer} from '../components'

export function FooterContainer() {
  return(
    <Footer>
      <Footer.Title>Questions? Contact us plz</Footer.Title>
      <Footer.Break/>
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#" >FAQ</Footer.Link>
          <Footer.Link href="#" >Jobs</Footer.Link>
          <Footer.Link href="#" >Terms of Use</Footer.Link>
          <Footer.Link href="#" >Contact Us</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#" >Turd Sandwich</Footer.Link>
          <Footer.Link href="#" >Giant Douche</Footer.Link>
          <Footer.Link href="#" >South Park</Footer.Link>
          <Footer.Link href="#" >Folder</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#" >Account</Footer.Link>
          <Footer.Link href="#" >Gift Cards</Footer.Link>
          <Footer.Link href="#" >Privacy</Footer.Link>
          <Footer.Link href="#" >Some Shit</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#" >Media</Footer.Link>
          <Footer.Link href="#" >Cookie Preferences</Footer.Link>
          <Footer.Link href="#" >Legal Notices</Footer.Link>
          <Footer.Link href="#" >Some More Shit</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break/>
      <Footer.Text>Netflix U.K</Footer.Text>
    </Footer>
  )
}