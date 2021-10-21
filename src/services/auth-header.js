export default function authHeader() {
    const token = localStorage.getItem('token');

    return { 'x-api-key': token };
}