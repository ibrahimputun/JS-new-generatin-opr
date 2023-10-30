console.log("** NEW OPERATORS **")

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

const insan = {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
}

console.log(insan.maas);  //? .notasyonu ile yazdırma
console.log(insan["meslek"]);//? square bracket
console.log(insan["kimlikNo"]);

const mimarAdi = insan.adi
console.log(mimarAdi);

// //? Destructure
let { adi, soyadi, kimlikNo, maas } = insan
console.log(kimlikNo);
kimlikNo = "ABACD"
console.log(kimlikNo, maas, adi, soyadi);

insan.meslek = "Muhendis"
console.log(insan);

//?NESTED

const insanlar = {
    kisi1: {
        kimlikNo: "1234567890",
        adi: "Ahmet",
        soyadi: "Can",
        meslek: "Mimar",
        maas: 30000,
    },
    kisi2: {
        kimlikNo: "44234567890",
        adi: "Canan",
        soyadi: "Can",
        meslek: "Sosyal Gelişim Uzmanı",
        maas: 25000,
    },
}

// console.log("MAAS:", insanlar.kisi1.maas);

// //?Destr.
// //? 1.yontem

// const { kisi1, kisi2 } = insanlar //? Level1 destr.
// console.log(kisi1);

const { kimlikNo: kisi1Kimlik, adi: kisi1Adi, soyadi: kisi1Soyadi } = insanlar.kisi1



const { kimlikNo: kisi2Kimlik, adi: kisi2Adi, soyadi: kisi2Soyadi } = insanlar.kisi2
console.log(kisi2Kimlik);

// //?2. yontem
// const {
//     kisi1: { soyadi, adi },
// } = insanlar //? nested destr.

// console.log(soyadi)



//* Example
const team = [
    {
        name: "Josh",
        surname: "Barry",
        job: "developer",
        age: 30,
    },
    {
        name: "John",
        surname: "Barry",
        job: "tester",
        age: 45,
    },
    {
        name: "Hazel",
        surname: "Nut",
        job: "team lead",
        age: 40,
    },
]
console.log("************")

//? Klasik yontem ile
team.forEach((p) => {
    console.log("NAME:", p.name)
    console.log("SURNAME:", p.surname)
    console.log("JOB:", p["job"])
    console.log("AGE:", p["age"])
})

//? Destr
console.log("**** DEST ****")
team.forEach((person) => {
    const { name, surname, age, job } = person
    console.log("NAME:", name)
    console.log("SURNAME:", surname)
    console.log("JOB:", job)
    console.log("AGE:", age)
    console.log("------------")
})

