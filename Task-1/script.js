class Calculator {
    constructor(preOperandElement, currOperandElement, currOperatorElement) {
        this.preOperandElement = preOperandElement
        this.currOperandElement = currOperandElement
        this.currOperatorElement = currOperatorElement
        this.preOperand = ''
        this.currOperand = ''
        this.operator = ''
    }

    append(number) {
        if (this.currOperand == '0') {
            this.currOperand = number
        }
        else {
            this.currOperand += number
        }
        this.updateDisplay()
    }

    delete() {
        if (this.currOperand == '')
            return
        this.currOperand = this.currOperand.slice(0, this.currOperand.length - 1)
        this.updateDisplay()
    }

    clear() {
        this.currOperand = ''
        this.preOperand = ''
        this.operator = ''
        this.updateDisplay()
    }

    updateDisplay() {
        this.preOperandElement.innerHTML = this.preOperand
        this.currOperandElement.innerHTML = this.currOperand
        this.currOperatorElement.innerHTML = this.operator
    }

    calculate(operator) {
        if (this.currOperand == '') return

        if (this.preOperand == '') {
            this.preOperand = this.currOperand
            this.currOperand = ''
            this.operator = operator
        }
        else if (this.operator != '') {
            this.preOperand = this.doOperation()
            this.currOperand = ''
            this.operator = operator

        }
        this.updateDisplay()
    }

    doOperation() {
        let x = Number(this.preOperand)
        let y = Number(this.currOperand)
        let res

        if (this.operator == '+') {
            res = x + y
        }
        else if (this.operator == '−') {
            res = x - y;
        }
        else if (this.operator == '×') {
            res = x * y;
        }
        else if (this.operator == '÷') {
            res = x / y
        }

        return res
    }

    enter() {
        if (this.currOperand == '' || this.preOperand == '') return

        this.currOperand = this.doOperation()
        this.preOperand = ''
        this.operator = ''
        this.updateDisplay()
    }
}

const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')

const preOperandElement = document.querySelector('.pre-operand')
const currOperandElement = document.querySelector('.curr-operand')
const currOperatorElement = document.querySelector('.curr-operator')
const deleteElement = document.querySelector('.delete')
const clearElement = document.querySelector('.clear')
const enterElement = document.querySelector('.enter')


const calculator = new Calculator(preOperandElement, currOperandElement, currOperatorElement)

numbers.forEach((val) => {
    val.addEventListener('click', () => {
        calculator.append(val.innerHTML)
    })
})

operators.forEach((val) => {
    val.addEventListener('click', () => {
        console.log(val.innerHTML)
        calculator.calculate(val.innerHTML)
    })
})


deleteElement.addEventListener('click', () => {
    calculator.delete()
})

clearElement.addEventListener('click', () => {
    calculator.clear()
})


enterElement.addEventListener('click', () => {
    calculator.enter()
})
