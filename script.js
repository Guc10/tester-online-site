async function getUsers() {
  try {
    const res = await fetch("/api/Users", {
      method: "GET",
      headers: {
        "X-API-KEY": "sigmaSkibidiKfgdhdfgey",
        Accept: "application/json",
      },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Błąd:", err);
  }
}

getUsers();
