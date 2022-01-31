import Head from "next/head"
export default function MainContainer({ children }) {
    return <>
        <Head>
            <title>My page title</title>
            <meta property="og:title" content="My page title" key="title" />
        </Head>
        <div>
            nav
        </div>
        <div>
            {children}
        </div>

    </>
}