function DOM() {
    let num1 = 12;
    let num2 = 15;
    return <h2>Just an Element, Sum is {num1 + num2}</h2>
}
ReactDOM.render(<DOM/>, document.getElementById('root'))
console.log("Heyyy, This was build using react 😲😲")