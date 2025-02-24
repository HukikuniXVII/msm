#Frontend Drive
https://drive.google.com/drive/folders/1EXr0K10vYVmKGkC2hnSFwZUH1_CVX8zZ?fbclid=IwY2xjawIgTahleHRuA2FlbQIxMAABHfLtzCgh9X9mFvdANbF_jv88xpo16aNXVF8BXbuQt0_G5MswUtcAzzoCLA_aem_cvPDXuZqN-JqSTDfxwRamw

รันครั้งแรกทำตาม 1234

1. #Create python env

python -m venv env
 
#Activate python env

.\env\Scripts\activate

2. #Install Library

pip install -r requirements.txt

- Install nodejs in PC also

3. #When make a change to django 

python manage.py makemigrations
python manage.py migrate

4. #Frontend
cd Frontend
npm install axios react-router-dom jwt-decode html-react-parser
npm install @fontsource/cormorant @fontsource/playfair-display @fontsource/eb-garamond

npm install

### Notes ###
#ProtectedRoute ใช้ Link เฉพาะ Admin

#รันครั้งไม่แรก

#To runserver

cd backend
python manage.py runserver

#Start Reacts
cd frontend
npm run dev 