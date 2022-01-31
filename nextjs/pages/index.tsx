import Link from "next/link";
import { useRouter } from "next/router";

export default function Index(props) {
    const router = useRouter();

    return <div>
        <h1 onClick={() => {
            router.push('/Login');
        }}>{props.namePage}</h1>

        <div>
            <Link href="/Translations">
                <a>Translations</a>
            </Link>
        </div>
        <div>
            <Link href="/Profile">
                <a>Profile</a>
            </Link>
        </div>

        <div>
            <Link href="/Login">
                <a>Login</a>
            </Link>
        </div>
    </div>
}

// index.getInitialProps = async () => {
//     const response = await fetch('http://localhost:3000/vehicle/adasd');
//     console.log(response.body);

//     const props = {
//         namePage: "index page"
//     }
//     return props;
// }

Index.getInitialProps = ({ res }) => {


    // res.writeHead(301, {
    //     Location: '/Login'
    // });
    // res.end();
    // if (res) {
    //     res.writeHead(301, {
    //         Location: 'new/url/destination/here'
    //     });
    //     res.end();
    // }

    return {};
};