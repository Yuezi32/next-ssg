import Nav from '@/components/nav'
import Image from 'next/image'
import imgLogo from '@/common/images/app.png'
import pageStyles from './index.module.scss'
function Index() {
    return (
        <div className={pageStyles['P-index']}>
            <Nav />
            <h1>This is Index Page.</h1>
            <div className={pageStyles['img-wrap']}>
                <Image src={imgLogo} alt="" />
            </div>
        </div>
    )
}

export default Index
