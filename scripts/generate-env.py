import os
import re

kakao_key = os.environ.get('KAKAO_JS_KEY', '')

env_path = os.path.join(os.path.dirname(__file__), '../.env')
if not kakao_key and os.path.exists(env_path):
    with open(env_path, 'r', encoding='utf-8') as f:
        content = f.read()
        match = re.search(r'KAKAO_JS_KEY=(.+)', content)
        if match:
            kakao_key = match.group(1).strip()

config_content = f'// Auto-generated runtime environment configuration (GIT-IGNORED)\nwindow.ENV_KAKAO_JS_KEY = "{kakao_key}";\n'

output_path = os.path.join(os.path.dirname(__file__), '../env-config.js')
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(config_content)

print("[SUCCESS] env-config.js generated successfully via Python.")
