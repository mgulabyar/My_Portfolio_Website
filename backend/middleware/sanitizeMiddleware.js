// Recursive helper function to strip MongoDB operators ($ and .)
const sanitizeData = (obj) => {
    if (obj instanceof Object) {
        for (const key in obj) {
            // Agar key '$' se shuru ho ya usme '.' ho, to use delete kar dein (NoSQL Injection Block)
            if (key.startsWith('$') || key.includes('.')) {
                delete obj[key];
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                sanitizeData(obj[key]); // Nested objects ke liye recursively call karein
            }
        }
    }
};

const mongoSanitize = (req, res, next) => {
    if (req.body) sanitizeData(req.body);
    if (req.params) sanitizeData(req.params);
    // Note: req.query Node 24/Express 5 me immutable getter hai, isliye server crash se bachne ke liye hum query bypass karte hain.
    next();
};

module.exports = { mongoSanitize };