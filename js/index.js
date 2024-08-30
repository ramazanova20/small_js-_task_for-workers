let arr = [
    {ad: 'Elvin', sex: 'male', salary: 4500},
    {ad: 'Xezer', sex: 'male', salary: 4270},
    {ad: 'Elmir', sex: 'male', salary: 3550},
    {ad: 'İsmixan', sex: 'male', salary: 2700},
    {ad: 'Günel', sex: 'female', salary: 1740},
    {ad: 'Günes', sex: 'female', salary: 2400},
    {ad: 'Fidan', sex: 'female', salary: 820},
    {ad: 'Revan', sex: 'male', salary: 700},
    {ad: 'Kenan', sex: 'male', salary: 2340},
    {ad: 'Azer', sex: 'male', salary: 1400},
    {ad: 'Musa', sex: 'male', salary: 2350},
    {ad: 'Vahid', sex: 'male', salary: 3340},
    {ad: 'David', sex: 'male', salary: 4700},
    {ad: 'Elcan', sex: 'male', salary: 1100},
    {ad: 'Yasemen', sex: 'female', salary: 900},
]

        const a = document.getElementById("a")
        const ntc = document.getElementById("ntc")


        function search() {
            arr
            .map(item => {
                if (item.ad.toLowerCase() === a.value.toLowerCase()) {
                ntc.innerHTML += `
                    <div id='card'>
                    ${item.salary}
                    </div>
                `;
                }
            })
}
        const b = document.getElementById("b")
        const ntc1 = document.getElementById("ntc1")


        function search1() {
            arr
            .map(item => {
                if (item.salary >= b.value) {
                ntc1.innerHTML += `
                    <div id='card'>
                    ${item.ad} - ${item.salary}
                    </div>
                `;
                }
            })
}
        const c = document.getElementById("c")
        const ntc2 = document.getElementById("ntc2")


        function search2() {
            arr
            .map(item => {
                if (item.sex.toLowerCase() === c.value.toLowerCase()) {
                ntc3.innerHTML += `
                    <div id='card'>
                    ${item.ad} - ${item.sex}
                    </div>
                `;
                }
            })
}