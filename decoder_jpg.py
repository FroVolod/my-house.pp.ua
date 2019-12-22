import os
from PIL import Image


os.chdir(f'./static/images/block_1')
for i in range(1, 6):
    os.chdir(f'../block_{i}')
    for infile in os.listdir('.'):
        filename, ext = os.path.splitext(infile)
        if ext in ['.jpg', '.JPG']:        
            im = Image.open(infile).convert("RGB")
            im.save(filename + ".webp", "WEBP")
            print(f'infile: {infile}')
