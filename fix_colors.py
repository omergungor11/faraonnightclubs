import os
import re

files_to_process = [
    "app/hakkimizda/page.tsx",
    "app/rehber/RehberClient.tsx",
    "app/rehber/[slug]/BlogPostClient.tsx",
    "app/katalog/KatalogClient.tsx"
]

def process_file(filepath):
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return
        
    with open(filepath, 'r') as f:
        content = f.read()

    # Generic gradients
    content = content.replace("bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text", "")
    content = content.replace("text-transparent  ", "text-gradient-gold ")
    content = content.replace("text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text", "text-gradient-gold")
    
    # Specific colors
    content = re.sub(r'amber-500', 'gold', content)
    content = re.sub(r'amber-400', 'gold-light', content)
    content = re.sub(r'amber-100', 'gold-pale', content)
    content = re.sub(r'amber-200', 'gold-pale', content)
    content = re.sub(r'orange-600', 'gold-dark', content)
    content = re.sub(r'orange-700', 'gold-dark', content)
    
    # Darker colors used for gradients
    content = re.sub(r'amber-900', 'primary/20', content)
    content = re.sub(r'amber-950', 'primary/10', content)
    content = re.sub(r'orange-950', 'primary/10', content)
    content = re.sub(r'orange-900', 'primary/20', content)
    
    # Some classes might become 'bg-primary/10/40' which is invalid, let's fix them if they exist
    content = re.sub(r'primary/10/([0-9]+)', r'primary/\1', content)
    content = re.sub(r'primary/20/([0-9]+)', r'primary/\1', content)

    with open(filepath, 'w') as f:
        f.write(content)
    print(f"Processed {filepath}")

for f in files_to_process:
    process_file(f)
