import axios from "axios";

// Example validateAddress function (make sure to use your own API key)
export const validateAddress = async (data: any) => {
    try {
        const response = await axios.post(
            "https://api.shipengine.com/v1/addresses/validate",
            {
                address_line1: data.streetAddress,
                city_locality: data.townCity,
                // Add other fields like postal_code, country, etc.
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.SHIPENGINE_API_KEY}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error validating address:", error);
        throw error;
    }
};
