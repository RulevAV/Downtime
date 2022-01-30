
export default function test2(props) {
    return <div>
        <h1>
            {props.name}
        </h1>
    </div>
}

export async function getServerSideProps({ params }) {
    const response = await fetch(`asdsdsafasdf/user/${params.id}`);
    return {
        props: {
            name: "test2"
        }, // will be passed to the page component as props
    }
}