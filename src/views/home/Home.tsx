import HeaderMobile from '../../components/shared/header-mobile/header-mobile'
import Main from '../../components/shared/main/main'
import Section1 from './components/section1'
import Section2 from './components/section2'

function Home() {
    return (
        <div>
            <HeaderMobile />
            <Main id="home">
                <Section1 />
                <Section2 />
            </Main>
        </div>
    )
}

export default Home
