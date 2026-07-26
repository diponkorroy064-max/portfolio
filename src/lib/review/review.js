const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const getReviews = async () => {
    const response = await fetch(`${SERVER_URL}/api/reviews`, {
        cache: "no-store",
    });
    return response.json();
};


export const createReview = async (formData) => {
    const response = await fetch(`${SERVER_URL}/api/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "Application/json",
        },
        body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log("data from server api", data);
    return data;
};

