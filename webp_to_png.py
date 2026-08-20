# gah dayum i am rusty with python

from PIL import Image
import argparse

def convert_to_webp(file):
    photo = Image.open(file)

    clean_name = file.split('.')[-2]#.split('\\')[-1]

    #print(clean_name)

    photo.save(f'.{clean_name}.png', 'PNG')

    #return photo

parser = argparse.ArgumentParser(description="WEBP to PNG Converter")
parser.add_argument('-f', '--file', help="input path to webp file")
args = parser.parse_args()

convert_to_webp(args.file)