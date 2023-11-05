interface Animal {
    live(): void;
}

interface Dog extends Animal {
    bark(): void;
}

type Example1 = Dog extends Animal ? number : string

type Example2 = string extends Animal ? number : string

// this doesn't seem powerful but it is powerful in this case

// normally we had to use overloading of functions

interface IdLabel {
    id:number
}

interface NameLabel {
    name:string
}

type NameOrId<T extends number | string> = T extends number ? IdLabel:NameLabel

const label:NameOrId<string> = {name: "something"}

interface Email {
    message:string
}

// normallly we would do it like this 
// type MessageOf<T extends {message:unknown}> = T["message"]
// type EmailMessageContents = MessageOf<Email>

// but what if we wnated a differnet response if the message didn't exist

type MessageOf<T> = T extends {message:unknown} ? T["message"] : undefined


type EmailMessageContents = MessageOf<Email>

type DogMessageContents = MessageOf<Dog>

// infer Item referred to the type going to be used inside the Array 
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type; // it's the same as doing the following
// type Flatten<T> = T extends any[] ? T[number] : T;

// Extracts out the element type.
type Str = Flatten<string[]>

// Leaves the type alone.
type Num = Flatten<number>