export async function ajax(props){
    let {url,cbSuccess} = props;
    await fetch(url)
     .then(res=> res.ok ?res.json() :Promise.reject(res))
     .then(json => {
        cbSuccess(json)
    })
     .catch(err=>{
        let message = err.statusText || "Ha ocurrido un error con la peticion";
        document.querySelector(".root").innerHTML +=
        `<div class="error">
            <p>Error: ${err.status}: ${message}</p>
        </div>`;
        console.log(err)
     })
}