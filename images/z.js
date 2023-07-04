import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export function dot(){
    const firebaseConfig = {
        apiKey: "AIzaSyDSU2zyK-VcyXmtFBKlXHqJq9OIbPsLEy0",
        authDomain: "meghane-fddc4.firebaseapp.com",
        databaseURL: "https://meghane-fddc4-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "meghane-fddc4",
        storageBucket: "meghane-fddc4.appspot.com",
        messagingSenderId: "712264614065",
        appId: "1:712264614065:web:0fc6ac8b7df498edbd6290",
        measurementId: "G-7C4X9Y1EY0"
    };
        
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    document.getElementById('btnSubmit').addEventListener('click',()=>{
        document.getElementById('msgSend').style.display = 'none';
        const collectionRef = collection(db, "msg");
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let msg = document.getElementById("msg").value;
        if(name!='' && email!='' && msg!=''){
            document.getElementById('msgSend').innerHTML = 'Votre message a été envoyé avec succés !';
            document.getElementById('msgSend').style.backgroundColor = '#48d45d';
            const data = { nom: name, mail: email, msg: msg};
            addDoc(collectionRef, data);
            setTimeout(()=>{
                document.getElementById('msgSend').style.display = 'block';
                document.getElementById('contactForm').reset();
            }, 300)
        }else{
            document.getElementById('msgSend').innerHTML = 'Attention tous les champs ne sont pas remplis !';
            document.getElementById('msgSend').style.backgroundColor = '#d82222';
            setTimeout(()=>{
                document.getElementById('msgSend').style.display = 'block';
            }, 300)
        }
    });
    
}
