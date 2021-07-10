function getData_now_old(){
    let url='http://140.115.35.136:8044/cgi-bin/getData_now.py'
    async function getData(url) {
        const response = await fetch(url)
        return response.json()
    }
    async function main(url){
        const data = await getData(url)
        return data
    }
    // let textarea=document.getElementById("textBoard")
    // textarea.value=main(url)
    // return main(url)
    console.log(main(url))
}


function getData_now(){
    let url='http://140.115.35.136:8044/cgi-bin/getData_now.py'
    return fetch(url).then(res=>res.json())
}

function createTable_now() {
    getData_now().then(
        function(res) {
            let value=[]
            keyvalue=Object.keys(res)
            keyvalue.forEach(element => {
                value.push(res[element].filter(x=>x).pop())
            });
            
            console.log(keyvalue)
            console.log(res[keyvalue[1]])
            console.log(value)
        }
    )
}