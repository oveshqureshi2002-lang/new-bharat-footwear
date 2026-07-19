// Centralized environment configuration.
// Loads .env (outside production) and validates required variables once,
// so the rest of the app can read typed config instead of process.env directly.
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const required = [
    'DB_URL',
    'SECRET',
    'CLOUD_NAME',
    'CLOUD_API_KEY',
    'CLOUD_API_SECRET',
    'PAYU_API_KEY',
    'PAYU_SALT',
];

const missing = required.filter((key) => !process.env[key]);
if (missing.length > 0) {
    throw new Error(
        `Missing required environment variable(s): ${missing.join(', ')}. ` +
        `Copy .env.example to .env and fill in the values.`
    );
}

module.exports = {
    nodeEnv: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV === 'production',
    port: process.env.PORT || 8080,
    // Falls back to the current production URL so behavior is unchanged
    // until BASE_URL is explicitly set per environment.
    baseUrl: process.env.BASE_URL || 'http://localhost:8080',

    dbUrl: process.env.DB_URL,
    sessionSecret: process.env.SECRET,
    mapToken: process.env.MAP_TOKEN || '',

    cloudinary: {
        cloudName: process.env.CLOUD_NAME,
        apiKey: process.env.CLOUD_API_KEY,
        apiSecret: process.env.CLOUD_API_SECRET,
    },

    payu: {
        key: process.env.PAYU_API_KEY,
        salt: process.env.PAYU_SALT,
        // 'TEST' or 'LIVE' — defaults to 'TEST' to match prior hardcoded behavior.
        mode: process.env.PAYU_MODE || 'TEST',
    },
};
