/**
 * Vercel & Local Build Script: Environment Variable Injector
 * Reads process.env.KAKAO_JS_KEY or .env file and generates git-ignored env-config.js
 */

const fs = require('fs');
const path = require('path');

let kakaoKey = process.env.KAKAO_JS_KEY || '';

const envPath = path.join(__dirname, '../.env');
if (!kakaoKey && fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/KAKAO_JS_KEY=(.+)/);
    if (match) {
        kakaoKey = match[1].trim();
    }
}

const configContent = `// Auto-generated runtime environment configuration (GIT-IGNORED)
window.ENV_KAKAO_JS_KEY = "${kakaoKey}";
`;

fs.writeFileSync(path.join(__dirname, '../env-config.js'), configContent);
console.log('✅ env-config.js generated successfully for Vercel/Local deployment.');
