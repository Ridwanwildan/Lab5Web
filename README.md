# Latihan Javascript

* Nama          : Hizbullah Ridwan
* NIM           : 312110055
* Kelas         : TI.21.B.1
* Mata Kuliah   : Pemrograman Web

Dalam latihan javascript ini, saya menggunakan [Google Chrome](https://www.google.com/intl/id_id/chrome/) sebagai web browser dan [visual studio code](https://code.visualstudio.com/) sebagai teks editornya.       

## Javascript Dasar

Buat file HTML baru kemudian isi seperti ini :          

```bash
<!DOCTYPE html>
<html>
    <head>
        <title>Mengenal Javascript</title>
    </head>
    <body>
        <h1>Pengenalan Javascript</h1>
        <h3>Contoh document.write dan console.log</h3>
        <script>
            document.write("Hello World");
            console.log("Hello World");
        </script>
    </body>
</html>
```         

![Gambar 1](Screenshoots/Capture1.PNG)       

## Alert

Alert berfungsi untuk menampilkan pesan pada saat file tersebut dibuka.            


```bash
<!DOCTYPE html>
<html>
    <head>
        <title>Alert Box</title>
    </head>
    <body>
        <script language = "javascript">
            window.alert("Ini merupakan pesan untuk anda");
        </script>
    </body>
</html>
```         

![Gambar 2](Screenshoots/Capture2.PNG)       

## Pemakaian Method Dalam Objek

Untuk pemakaian method dalam objek, contohnya adalah seperti ini :         

```bash
<!DOCTYPE html>
<html>
    <head>
        <title>Skrip javascript</title>
    </head>
    <body>
        Percobaan memakai javascript :<br>
        <script language = "javascript">
            document.write("Selamat mencoba javaascript<br>");
            document.write("Semoga Sukses");
        </script>
    </body>
</html>
```         

![Gambar 3](Screenshoots/Capture3.PNG)        

## pemakaian Prompt

Prompt digunakan untuk melakukan input didalam website melalui javascript. Isi form nama       
kemudian klik oke maka hasilnya akan terlihat seperti ini :           

```bash
<!DOCTYPE html>
<html>
    <head>
        <title>pemasukan Data</title>
    </head>
    <body>
        Percobaan memakai javascript :<br>
        <script language = "javascript">
            var nama = prompt("Siapa nama anda?","Masukkan nama anda");
            document.write("hai "+nama);
        </script>
    </body>
</html>
```         

![Gambar 4](Screenshoots/Capture4.PNG)        

![Gambar 5](Screenshoots/Capture5.PNG)        

## Fungsi

Untuk menggunakan fungsi pada javascript, caranya adalah masukkan fungsi kedalam tag `<script>`          
Kemudian salah satu cara untuk memanggilnya yaitu dengan menggunakan atribut `onload` pada tag `<body>`.          

```bash
<!DOCTYPE html>
<html>
    <head>
        <title>Contoh Program Javascript</title>
    </head>
    <script language = "javascript">
        function pesan() {
            alert ("memanggil javascript lewat body onload")
        }
    </script>
    <body onload=pesan()>
    </body>
</html>
```         

![Gambar 6](Screenshoots/Capture6.PNG)        

## Operasi Dasar Aritmatika

```bash
<!DOCTYPE html>
<html>
    <head>
        <title>Contoh Program Javascript</title>
    </head>
    <script language = "javascript">
        function test (val1,val2) {
            document.write("<br>"+"perkalian : val1*val2"+"<br>")
            document.write(val1*val2)
            document.write("<br>"+"pembagian : val1/val2"+"<br>")
            document.write(val1/val2)
            document.write("<br>"+"penjumlahan : val1+val2"+"<br>")
            document.write(val1+val2)
            document.write("<br>"+"pengurangan : val1-val2"+"<br>")
            document.write(val1-val2)
            document.write("<br>"+"modulus : val1%val2"+"<br>")
            document.write(val1%val2)
        }
    </script>
    <body>
        <input type="button" name="button1" value="arithmetic" onclick=test(9,4)>
    </body>
</html>
```         