const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const sendMessage = async (formData) => {
    const response = await fetch(`${SERVER_URL}/api/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data;
};

export const getMessages = async () => {
    const response = await fetch(`${SERVER_URL}/api/contact`, {
        cache: "no-store",
    });
    return response.json();
};
