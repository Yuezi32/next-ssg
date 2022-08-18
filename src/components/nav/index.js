import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './nav.module.scss'

function Nav() {
    const router = useRouter()
    // 获取当前页面的pathname
    const pathname = router.pathname
    return (
        <div className={styles['M-nav']}>
            <Link href="/">
                <div
                    className={
                        styles['tab'] +
                        (pathname === '/' ? ' ' + styles['current'] : '')
                    }
                >
                    Home
                </div>
            </Link>
            <Link href="/about">
                <div
                    className={
                        styles['tab'] +
                        (pathname === '/about' ? ' ' + styles['current'] : '')
                    }
                >
                    About
                </div>
            </Link>
        </div>
    )
}
export default Nav