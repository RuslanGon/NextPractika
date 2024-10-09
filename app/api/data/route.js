export async function GET(request) {
    const data = {
        name: 'Ruslan',
        age: 37,
        gender: 'male'
    }
return new Response(JSON.stringify(data))
}