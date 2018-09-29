var name;
var rollno;
var email;
var store;
var phoneno;

var career;
var betech;
var college;
var bmks;
var bmks1;
var marks;
var yearof;

var intermpc;
var intercoll;
var iradio;
var iradio1;
var intermark;
var interyear;

var sscselect;
var ssccoll;
var sscbks;
var sscbks1;
var sscmark;
var sscyear;

var sscradio;
var interradio;
var btechradio;
function getDetails() {
  name=document.getElementById('name').value;
  rollno=document.getElementById('rollno').value;
  email=document.getElementById('email').value;
  phoneno=document.getElementById('phoneno').value;
  marks=document.getElementById('marks').value;
bmks=document.getElementById('bmks');
bmks1=document.getElementById('bmks1');
  college=document.getElementById('college').value;
  betech=document.getElementById('betech').value;
  career=document.getElementById('career').value;
    yearof=document.getElementById('yearof').value;
      intermpc=document.getElementById('intermpc').value;
        intercoll=document.getElementById('intercoll').value;
          iradio=document.getElementById('iradio');
            iradio1=document.getElementById('iradio1');
              intermark=document.getElementById('intermark').value;
                interyear=document.getElementById('interyear').value;
                  sscselect=document.getElementById('sscselect').value;
                    ssccoll=document.getElementById('ssccoll').value;
                      sscbks=document.getElementById('sscbks');
                        sscbks1=document.getElementById('sscbks1');
                          sscmark=document.getElementById('sscmark').value;
                            sscyear=document.getElementById('sscyear').value;

  if (bmks.checked) {
    btechradio=bmks.value;
    console.log(btechradio);
  }else{
    btechradio=bmks1.value;
    console.log(btechradio);
  }

if (iradio.checked) {
interradio=iradio.value;
  console.log(interradio);
}else{
  interradio=iradio1.value;
  console.log(interradio);
}
if (sscbks.checked) {
sscradio=sscbks.value;
  console.log(sscradio);
}else{
  sscradio=sscbks1.value;
  console.log(sscradio);
}
console.log(name+" "+rollno+" "+email+" "+phoneno+" "+career);
console.log(betech+" "+college+" "+btechradio+" "+marks+" "+yearof);
console.log(intermpc+" "+intercoll+" "+interradio+" "+intermark+" "+interyear);
console.log(sscselect+" "+ssccoll+" "+sscradio+" "+sscmark+" "+sscyear);
  // console.log(name+" "+rollno+" "+email+" "+phoneno+" "+car+" "+be+" "+yea+" "+marks);
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
    store=dbname.transaction("cse","readwrite").objectStore("cse");
    store.put(
      {
      "name":name,
      "roll":rollno,
      "email":email,
      "phoneno":phoneno,
      "co":career,
      "eduDetails":{
        "btech":[
          betech,
          college,
          btechradio,
          marks,
          yearof
        ],
        "inter":[
          intermpc,
          intercoll,
          interradio,
          intermark,
          interyear
        ],
        "ssc":[
          sscselect,
          ssccoll,
          sscradio,
          sscmark,
          sscyear
        ],
      }
    }
    );
    console.log("success....");
  }
  localStorage.setItem("roll",rollno);
  window.open("resume.html","_self");
}
