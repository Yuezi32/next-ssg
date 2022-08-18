import Nav from '@/components/nav'
import pageStyles from './about.module.scss'
function About() {
    return (
        <div className={pageStyles['P-about']}>
             <Nav />
            <h1>This is About Page.</h1>
        </div>
    )
}

export default About