import Link from "next/link";
export default function Profile(props) {
    //console.log(props);
    return (<>
        <h1>{props.namePage}</h1>
        <Link href="/">
            <a>Index</a>
        </Link>
    </>

    )
}

Profile.getInitialProps = async () => {

    const props = {
        namePage: "Profile page"
    }
    return props;
}