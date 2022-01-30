import Link from "next/link";

export default function Home(props) {
    //console.log(props);
    return (<>
        <h1>{props.namePage}</h1>
        <Link href="/">
            <a>Index</a>
        </Link>
    </>

    )
}

Home.getInitialProps = () => {
    const props = {
        namePage: "Home page"
    }
    return props;
}