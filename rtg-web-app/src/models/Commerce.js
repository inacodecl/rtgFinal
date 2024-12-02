import consts from "../consts";

export async function getCommerceList() {
    const response = await fetch(`${consts.BASE_URL}/api/comercios`, { method: 'GET', headers: { 'x-api-key': consts.API_KEY } })
        .then(response => response.json()).then(data => { return data; })
        .catch(error => { console.error('Error:', error); });
    return response
}