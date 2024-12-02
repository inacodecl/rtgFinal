import consts from "../consts";

export async function getOwnerInfo(id) {
    const response = await fetch(`${consts.BASE_URL}/api/propetario`, { method: 'GET', body: { id } })
        .then(response => response.json()).then(data => { return data; })
        .catch(error => { console.error('Error:', error); });
    return response

}