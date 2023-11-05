const buyButton = document.getElementById("buy");

if (buyButton) {
    buyButton.onclick = async () => {
        try {
            const res = await fetch("/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    items: [
                        { id: 1, quantity: 3 },
                        { id: 2, quantity: 1 },
                    ],
                }),
            });
            console.log(res.ok);
            if (res.ok) {
                const { url } /*parsing */ = await res.json();
                // console.log(url);
                window.location = url;
            } else {
                // console.log("json", res.json());
                const myJson = res.json();
                window.location = await Promise.reject(await myJson);
            }
        } catch (e) {
            console.error(e);
        } finally {
            console.log("code executed");
        }
    };
}
