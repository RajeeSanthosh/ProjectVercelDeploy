import React from 'react'
import AddBusinessDetails from './components/Business'
import PasswordRecovery from './components/Password'
import AsateraRegistration from './components/Aregistration'
import AsateraBusinessDetails from './components/Abusiness'
import AsateraSignIn from './components/Alogin'
import AsateraSignUp from './components/Asignup'
import RegistrationCompleted from './components/Registeration'

const App = () => {
  return (
    <div>
      <AsateraSignIn />
      <AsateraSignUp />
      <AsateraBusinessDetails/>
      <AsateraRegistration />
      <AddBusinessDetails />
      <PasswordRecovery />
      <RegistrationCompleted />
    </div>
  )
}

export default App
