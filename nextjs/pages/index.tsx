import Link from "next/link";
export default function index(props) {
    return <div>
        <h1>{props.namePage}</h1>
        <div>
            <Link href="/vehicle">
                <a>vehicle</a>
            </Link>
        </div>
        <div>
            <Link href="/Home">
                <a>Home</a>
            </Link>
        </div>
        <div>
            <Link href="/test1">
                <a>test1</a>
            </Link>
        </div>
        <div>
            <Link href="/test2">
                <a>test2</a>
            </Link>
        </div>
        <div>
            <Link href="/test3">
                <a>test3</a>
            </Link>
        </div>
        <div>
            <Link href="/Login">
                <a>Login</a>
            </Link>
        </div>
    </div>
}

index.getInitialProps = async () => {
    const response = await fetch('http://localhost:3000/vehicle/adasd');
    console.log(response.body);

    const props = {
        namePage: "index page"
    }
    return props;
}