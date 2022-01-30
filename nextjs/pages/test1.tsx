export default function test1(props) {
    return <div>
        <h1>
            {props.name}
        </h1>
    </div>
}

export async function getStaticProps(context) {
    return {
        props: {
            name: "test1"
        }, // will be passed to the page component as props
    }
}