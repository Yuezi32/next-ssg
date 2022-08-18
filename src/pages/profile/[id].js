import axios from 'axios'
import Link from 'next/link'
import pageStyles from './profile.module.scss'
function Profile(props) {
    const { data } = props.profileData
    return (
        <div className={pageStyles['P-profile']}>
            <Link href="/">
                <div className={pageStyles['top-bar']}>&lt;返回</div>
            </Link>
            <h1>This is Profile Page.</h1>
            <p>ID: {data.id}</p>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <p>Favorite: {data.favorite}</p>
        </div>
    )
}

// 说明：
// getServerSideProps：适用于SSR，不支持SSG，服务端会重新发起请求更新数据，
// getStaticProps：SSR和SSG均支持，但仅在build的时候发起API请求，build后的网站不再请求API，数据不会更新。
// 这里以getStaticProps为例。

export const getStaticProps = async (paths) => {
    const { params } = paths
    const res = await axios({
        method: 'get',
        url: 'http://127.0.0.1/api/data.php',
        params: { id: params.id },
    })
    return {
        // 这里的props将会传递给组件使用
        props: {
            profileData: res.data,
        },
    }
}

// 使用getStaticPaths将会build多个页面
export const getStaticPaths = async () => {
    return {
        // 这里的数据将提供给getStaticProps使用
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
        ],
        // fallback为falsh，表示如果不在以上参数的路由将返回404
        fallback: false,
    }
}

export default Profile
