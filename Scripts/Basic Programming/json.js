let text = `{
    "Employess":[
        {"name": "Taha", "Age": "15", "city": "Rawalpindi"},
        {"name": "Aliya", "Age": "11", "city": "Rawalpindi"},
        {"name": "Shan", "Age": "17", "city": "Rawalpindi"}
    ]
}`

const obj = JSON.parse(text);

console.log(obj["Employess"][1]["Age"])