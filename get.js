var rollnumber=localStorage.getItem("roll");

if (!window.indexedDB){
  console.log("indexed db is not working...");
}
var request=window.indexedDB.open("svitDB",1);
request.onerror=e=>{
  console.log(e);

}
request.onupgradeneeded=e=>{
  var dbname=e.target.result;
  dbname.createObjectStore("cse",{keyPath:"roll"});

  console.log("upgradeed");

}
request.onsuccess=e=>{
  var dbname=e.target.result;
  var store=dbname.transaction("cse","readwrite").objectStore("cse");
  var data=store.get(rollnumber);
  data.onsuccess=e=>{
    var res=e.target.result;
  var main=document.getElementById('mainDiv');
var left=document.createElement("div");
left.classList.add("leftDiv");
var sname=document.createElement("h3");
sname.textContent=res.name;
left.appendChild(sname);
main.appendChild(left);
var hr=document.createElement("hr");
left.appendChild(hr);
var roll=document.createElement("p");
roll.textContent=res.roll;
left.appendChild(roll);
var mail=document.createElement("p");
left.appendChild(mail);
mail.textContent=res.email;
var phone=document.createElement("p");
left.appendChild(phone);
phone.textContent=res.phoneno;

var right=document.createElement("div");
right.classList.add("rightDiv");
var co=document.createElement("h4");
co.textContent=res.career;
left.appendChild(co);
main.appendChild(right);


  }
  console.log("success....");
}
  // store.put(
  //   {
  //   "name":name,
  //   "roll":rollno,
  //   "email":email,
  //   "phoneno":phoneno,
  //   "co":career,
  //   "eduDetails":{
  //     "btech":[
  //       betech,
  //       college,
  //       btechradio,
  //       marks,
  //       yearof
  //     ],
  //     "inter":[
  //       intermpc,
  //       intercoll,
  //       interradio,
  //       intermark,
  //       interyear
  //     ],
  //     "ssc":[
  //       sscselect,
  //       ssccoll,
  //       sscradio,
  //       sscmark,
  //       sscyear
  //     ],
  //   }
  // }
  // );
