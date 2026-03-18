function calculateAge(){
    let day = document.getElementById("day")
    let month = document.getElementById("month")
    let year = document.getElementById("year")

    let dayError = document.getElementById("dayError")
    let monthError = document.getElementById("monthError")
    let yearError = document.getElementById("yearError")

    // Limpa erros anteriores
    dayError.textContent = ""
    monthError.textContent = ""
    yearError.textContent = ""

    day.classList.remove("error-border")
    month.classList.remove("error-border")
    year.classList.remove("error-border")

    let d = parseInt(day.value)
    let m = parseInt(month.value)
    let y = parseInt(year.value)

    let valid = true

    // Validações obrigatórias
    if(day.value === "" ||d< 1 || d > 31){
        dayError.textContent = "Digite um dia válido!"
        day.classList.add("error-border")
        valid = false
    }
    
   

    if(!m || m < 1 || m > 12){
        monthError.textContent = "Digite um mês válido!"
        month.classList.add("error-border")
        valid = false
    }

    if(!y || y <= 0 || y > 2026){
        yearError.textContent = "Digite um ano válido!"
        year.classList.add("error-border")
        valid = false
    }

    if(!valid) return

    // Validação de mês (CORRIGIDO)
    if(m < 1 || m > 12){
        monthError.textContent = "mes inválido"
        month.classList.add("error-border")
        
    }

    // Validação de dias no mês
    let daysInMonth = new Date(y, m, 0).getDate()
    if(d > daysInMonth || d < 1){
        dayError.textContent = "dia inválido"
        day.classList.add("error-border")
       
    }

    // Validação de data futura
    let today = new Date()
    let birthDate = new Date(y, m-1, d)
    
    if(birthDate > today){
        yearError.textContent = "Coloque ano de Nascimento"
        year.classList.add("error-border")
        return
    }

    // Cálculo da idade
    let years = today.getFullYear() - birthDate.getFullYear()
    let months = today.getMonth() - birthDate.getMonth()
    let days = today.getDate() - birthDate.getDate()

    // Ajusta se não fez aniversário ainda
    if(days < 0){
        months--
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate()
    }

    if(months < 0){
        years--
        months += 12
    }
document.getElementById("years").textContent = years
document.getElementById("months").textContent = months
document.getElementById("days").textContent = days

}