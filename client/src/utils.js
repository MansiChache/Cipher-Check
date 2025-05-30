export const SOCKET_URL = "/";

export function FETCH(route = "/api", method = "GET", token = null, body = null) {
    token = localStorage.getItem("token");
    const authHeader = { 
        'Authorization': `Bearer ${token}` };
    const linkHeaders = {
        "GET": { headers: { ...authHeader } },
        "POST": {
            method: "POST",
            headers: {
                ...authHeader,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }
    localStorage.getItem('token');
    return fetch(`${SOCKET_URL}api${route}`, linkHeaders[method]).then(res => res.json());
}