export default function Person(){
    const Person = {
        name:"Sem",
        age:20,
    }
    return (
        <pre>{JSON.stringify(Person)}</pre>
    )
}