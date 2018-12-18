Functional
- Login with email, password
- Create / Edit staff profile
- Dashboard บอกยอด staff ทั้งหมด  และยอด staff ที่สมัครใหม่วันนี้
Technology
- front web : ReactJS
- service : Express
- database Meangodb
------------------
Meangodb Schema
```
name: String,
email: {type:String,lowercase: true, unique: true, index: true},
password: String,
phone:Number,
gender:String,
crateDate:Date,
updateDate:Date
  ```
  --------------- 
รันคำสั่งเพื่อทำการติดตั้ง node_modules 
```
cd backend 
npm install
cd ..
cd staff
npm start
```
รันคำสั่งเพื่อเริ่มการทำงานของ api server
```
cd backend 
node server.js
```

รันคำสั่งเพื่อเริ่มการทำงานของ react

```
cd staff 
npm start
```