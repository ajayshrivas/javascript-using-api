/*document.getElementById('calculation').addEventListener('click',function(){

    /*let p = 5000;
    let r = 3;
    let t = 2;
    let si = p*r*t/100
    let total = si+p;
    let p = document.getElementById('pricepal_val').value;
    let r = document.getElementById('rat_val').value;
    let t = document.getElementById('time_val').value;
    let si = p*r*t/100
    let total = parseFloat(si)+parseFloat(p);
    document.getElementById('pricepal').innerHTML = p;
    document.getElementById('rat').innerHTML = r;
    document.getElementById('time').innerHTML = t;
    document.getElementById('simple_in').innerHTML = si;
    document.getElementById('total').innerHTML = total;

    document.getElementsByClassName('after_event_show')[0].style ='display:block;';
    var ddd = document.getElementById('prget').style="text-transform: uppercase;";
    console.log(ddd);
}); 
*/

/*const pre = document.querySelectorAll('.simple_is')[0].style='background: red;';
console.log(pre); */

/*const pre = document.querySelector('#prget').style = "color:red;"; 
console.log(pre);
const pres = document.querySelectorAll('p')
console.log(pres[1].style = "color:green;"); 
/*var ddd = document.getElementById('prget').textContent;
console.log(ddd.toUpperCase());*/
//document.getElementsByTagName('p')[0].style = "color:red;"; 

/*const p = document.getElementById('prget');
// 👇️ Dog, Cat, Lizard
const result1 = p.textContent;
console.log(result1);*/ 
/*const pre = document.querySelector('p');
console.log(pre.attributes.getNamedItem("data-name").value); */
/*const attrMap = pre.attributes;
const value = attrMap.getNamedItem("test").value;*/

const queryString = document.URL;
console.log(queryString);
const queryStrings = window.location.search;
console.log(queryStrings);
const urlParams = new URLSearchParams(queryStrings);
const id = urlParams.get('id')
let file = "https://jsonplaceholder.typicode.com/posts/";
console.log("Hello");
let api_data = [];
if(id){
    let datas = fetch (file).then(response => response.json()).then(data =>{
    var rehtml = '';
    var new_id = parseInt(id)-parseInt(1);
    console.log(data[new_id]);

    rehtml +='<li>'+data[new_id].title+"<br> "+data[new_id].body+'</li>';
    document.getElementById('load_list_by_api').innerHTML = rehtml;
    });
}else{

    let datas = fetch (file).then(response => response.json()).then(
	
	data =>{
        var rehtml = '';
        data.forEach(function(value,key){
            rehtml +='<li><a href="'+document.URL+'?id='+value.id+'">'+value.body+'</a></li>';
        }); 
        document.getElementById('load_list_by_api').innerHTML = rehtml;
    }
	
	);
}

/*user = {
    "name": "Geeks for Geeksdddddd",
    "age": "23d"
}
// Options to be given as parameter
// in fetch for making requests
// other then GET
let options = {
    method: 'POST',
    headers: {
        'Content-Type':
            'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
}
// Fake api for making post requests
let fetchRes = fetch("http://dummy.restapiexample.com/api/v1/create",options);
                                
fetchRes.then(res =>
    res.json()).then(d => {
        console.log(d)
    })*/