import Disclosures from "./DefaultDisclosures"
import DefaultFooter from "./DefaultFooter"
import DefaultServices from "./DefaultServices"
import { MainContainer } from "./style"

const DefaultMain = () => {

  return (
    <>
      <MainContainer>
        <DefaultServices />
        <Disclosures />
        <DefaultFooter />
      </MainContainer>
    </>
  )
}

export default DefaultMain