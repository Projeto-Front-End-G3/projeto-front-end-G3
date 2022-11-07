import { useContext } from 'react'
import DefaultHeader from '../../components/DefaultHeader'
import DefaultHeader2 from '../../components/DefaultHeader/DefaultHeader2'
import DefaultMain from '../../components/DefaultMain'
import DefaultMenu from '../../components/DefaultMenu'
import { UserContext } from '../../contexts/UserContext'

const DefaultHome = () => {

  const { screen } = useContext(UserContext)

  return (
    <>
      {screen >= 1024 ? <DefaultHeader2 /> : <DefaultHeader />}
      <DefaultMenu />
      <DefaultMain />
    </>
  )
}

export default DefaultHome