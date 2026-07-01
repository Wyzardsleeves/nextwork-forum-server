const FIREBASE_API_KEY = "AIzaSyD7g0J6k5Z8z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5";

// check if user is authenticated
export const checkAuth = async (idToken: string) => {
    try {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idToken,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to check authentication");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error checking authentication:", error);
        throw error;
    }
};

// register firebase user
export const registerUser = async (email: string, password: string) => {
    try {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to register user");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

// login firebase user
export const loginUser = async (email: string, password: string) => {
    try {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to login user");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
};

// logout firebase user
export const logoutUser = async (idToken: string) => {
    try {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signOut?key=${FIREBASE_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idToken,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to logout user");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error logging out user:", error);
        throw error;
    }
};

