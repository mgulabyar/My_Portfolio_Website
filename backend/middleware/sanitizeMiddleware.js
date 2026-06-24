const sanitizeData = (obj) => {
    if (obj instanceof Object) {
        for (const key in obj) {
            if (key.startsWith('$') || key.includes('.')) {
                delete obj[key];
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                sanitizeData(obj[key]); 
            }
        }
    }
};

const mongoSanitize = (req, res, next) => {
    if (req.body) sanitizeData(req.body);
    if (req.params) sanitizeData(req.params);
    next();
};
// module.expert = {mongoSanitize}
module.exports = { mongoSanitize };