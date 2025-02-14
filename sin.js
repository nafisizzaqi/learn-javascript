const token = ~~(Math.random() * 123456789); // Generate token dengan benar

const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username) {
    console.log('Processing... token username');
    return new Promise((success, failed) => {
        setTimeout(() => {
            if (username !== "napis_izzaqi") return failed("Sorry, wrong data");
            success({ token });
        }, 1000);
    });
}

function getUser(token) {
    console.log('Processing API key...');
    return new Promise((success, failed) => {
        if (!token) return failed("Sorry, no token. Cannot access.");
        setTimeout(() => {
            success({ apiKey: "xkey123" });
        }, 1500);
    });
}

function getPictures(apiKey) {
    console.log('Processing... pictures');
    return new Promise((success, failed) => {
        if (!apiKey) return failed("No API key. Cannot access.");
        setTimeout(() => {
            success({ pic: pictures });
        }, 2000);
    });
}

async function UserDisplay() {
    try {
        const { token } = await login('napis_izzaqi');
        const { apiKey } = await getUser(token);
        const { pic } = await getPictures(apiKey);

        console.log(`Token Anda adalah: ${token}
API key Anda adalah: ${apiKey}
Request gambar Anda berikut ini: ${pic.join(", ")}`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

UserDisplay();
