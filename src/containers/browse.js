import React, { useState, useContext, useEffect } from 'react'
import { SelectProfileContainer } from './profiles'
import { FirebaseContext } from '../context/firebase'
import { Loading, Header } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const { firebase } = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}

  useEffect(() => {
    // console.log('profile', profile)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName])

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()} >Sign Out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Joaquin Phoenix is what we call a "new school rapper" with iconic
            lines we all know and love like "I don't crack, never. I don't give,
            never". Now he's back on the stage, ready to take he's rightful
            place among the greats. Watch out SpaceGhostPurrp, there is a new
            king on the way.
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}
