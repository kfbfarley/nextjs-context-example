export default function hello(request, response) {
    response.status(200).json({ name: 'Hello Web' })
}
