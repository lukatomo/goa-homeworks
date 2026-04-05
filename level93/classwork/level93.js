//საკლასო დავალება:
//1. შექმენით ფუნქცია,
//  რომელიც პარამეტრად მიიღებს რიცხვს
//  და დააბრუნებს მასზე 10-ს.

const GetPlaceHolder = async () => {
    try{
        const result = await fetch("https://www.json.org/json-en.html")
        const xyz = await result.json()
        console.log(xyz)
    }catch(err){
        console.log(err)
    }
}

GetPlaceHolder()


//საკლასო დავალება:საკლასო დავალება:
//შექმენით file1.js და ამ ფაილში შემოიღეთ სამი ცვლადი, თითოეულში შეინახეთ ნებისმიერი ინფორმაცია. სამივე ცვლადი დააექსპორტეთ
//შექმენით file2.js და ამ ფაილში დააიმპორტეთ file1.js-ის სამივე ცვლადი. შემდეგ უბრალოდ დაბეჭდეთ სამივე ცვლადის მნიშვნელობა.


