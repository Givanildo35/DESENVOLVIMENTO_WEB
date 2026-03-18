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

    let d = day.value
    let m = month.value
    let y = year.value

    let valid = true

    // Validações obrigatórias
    if(!d){
        dayError.textContent = "This field is required"
        day.classList.add("error-border")
        valid = false
    }

    if(!m){
        monthError.textContent = "This field is required"
        month.classList.add("error-border")
        valid = false
    }

    if(!y){
        yearError.textContent = "This field is required"
        year.classList.add("error-border")
        valid = false
    }

    if(!valid) return

    // Validação de mês (CORRIGIDO)
    if(m < 1 || m > 12){
        monthError.textContent = "Invalid month"
        month.classList.add("error-border")
        return
    }

    // Validação de dias no mês
    let daysInMonth = new Date(y, m, 0).getDate()
    if(d > daysInMonth || d < 1){
        dayError.textContent = "Invalid day"
        day.classList.add("error-border")
        return
    }

    // Validação de data futura
    let today = new Date()
    let birthDate = new Date(y, m-1, d)
    
    if(birthDate > today){
        yearError.textContent = "Must be in the past"
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

    animateNumber("years", years)
    animateNumber("months", months)
    animateNumber("days", days)
}