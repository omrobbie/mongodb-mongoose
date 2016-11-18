mongodb
=======
Belajar menggunakan `mongodb` dan `mongoose`

---

### Instalasi semua dependency dari file konfigurasi npm (package.json) :
```
$ npm install
```
atau inisialisasi file package.json yang baru dengan perintah :
```
$ npm init
```

### Instalasi `mongodb` dengan perintah :
```
$ npm install mongodb --save
```

### Jalankan `mongodb` dengan perintah :
```
$ mongo
```

### Tampilkan database yang ada di `mongodb` dengan perintah :
```
> show dbs
```

### Pilih database dengan perintah :
```
> use database
```

### Tampilkan table dari database dengan perintah :
```
> show collections
```

### Tambahkan data ke database dengan perintah :
```
> db.database.insert({nama:'omrobbie'})
```

### Cari semua data dari database dengan perintah :
```
> db.database.find({})
```

### Cari semua data dari database dengan bentuk yang lebih rapi (untuk penamaan yang panjang) dengan perintah :
```
> db.database.find({}).pretty({})
```

### Cari hanya data pertama dengan perintah :
```
> db.database.findOne({nama:'omrobbie'})
```