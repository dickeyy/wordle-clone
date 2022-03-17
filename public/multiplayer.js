import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
import { getFirestore, Timestamp, doc, setDoc, getDoc, deleteDoc, addDoc, collection, updateDoc, arrayUnion  } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInAnonymously, linkWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import { getDatabase, ref, onValue, set, get, child , push, update} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js"
import { app } from './app.js'

// Initialize Firebase
export const db = getFirestore(app);
export const rdb = getDatabase(app)
export const auth = getAuth(app);
const analytics = getAnalytics(app);

// File name stuff
const filePath = window.location.pathname;
const fileExtension = filePath.split("/").pop();
const pageName = fileExtension.split('.')[0]

// Sign in
const nameElem = document.getElementById('userName')

onAuthStateChanged(auth, (user) => {
    if (user == null) {
        // Automatically signs in anon
        signInAnonymously(auth)
        .then(() => {
            const cUser = auth.currentUser
            const checkUser = getDoc(doc(db, 'users', cUser.uid)).then((uData) => {
                if(uData.exists()) {
                    const username = uData.data()['username']
                    nameElem.innerHTML = username
                } else {
                    nameElem.innerHTML = "Guest"
                    return setDoc(doc(db, 'users', cUser.uid), {
                        username: 'Guest'
                    }). then(() => {
                        console.log('Success')
                    })
                }
            })
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        alert(errorMessage)
        });
    } if (user.isAnonymous && user != null) {

        document.getElementById('gSignInWrapper').style.display = 'block'
        document.getElementById('pencil').style.display = 'none'
        nameElem.innerHTML = "Guest"

    } if (!user.isAnonymous) {

        document.getElementById('pencil').style.display = 'inline'
        document.getElementById('gSignInWrapper').style.display = 'none'

    } if (user != null && !user.isAnonymous) {
        const checkUser = getDoc(doc(db, 'users', user.uid)).then((uData) => {
            if(uData.exists()) {
                const username = uData.data()['username']
                nameElem.innerHTML = username
            } else {
                setDoc(doc(db, 'users', user.uid), {
                    username: 'Guest'
                })
            }
        })
    }
})

// Google sign in
const gProvider = new GoogleAuthProvider()
const googleBtn = document.getElementById('googleBtn') 

googleBtn.onclick = function(e) {
    signInWithPopup(auth, gProvider).then((result) => {
        // Accounts successfully linked.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;

        getDoc(doc(db, 'users', user.uid)).then((uData) => {
            if (uData.exists()) {
                const username = uData.data()['username']
                nameElem.innerHTML = username
            } 
        })
      }).catch((error) => {
        console.log(error.code)
      });
}


// Edit name
const pencil = document.getElementById('pencil')
const nameForm = document.querySelector("#usernameForm")
pencil.onclick = function(e) {
    if (nameForm.style.display === 'none') {
        nameForm.style.display = "block"
    } else {
        nameForm.style.display = "none"
    }
}

nameForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const cUser = auth.currentUser
    const newName = nameForm['username'].value
    
    updateDoc(doc(db, 'users', cUser.uid), {
        username: newName
    }). then(() => {
        nameElem.innerHTML = newName
        nameForm.reset()
        nameForm.style.display = 'none'
    })
})

// create / join game 
if (pageName == 'multiplayer') {
    const createGameBtn = document.getElementById('createGame')
    const joinGameForm = document.querySelector('#joinGameForm')
    
    // Create game
    createGameBtn.onclick = function(e) {
        const gameId = Math.floor(Math.random() * 1000000000)
        const wordList = ['about','above','abuse','actor','acute','admit','adopt','adult','after','again','agent','agree','ahead','alarm','album','alert','alike','alive','allow','alone','along','alter','among','anger','Angle','angry','apart','arena','argue','arise','aside','asset','audio','audit','avoid','award','aware','badly','baker','bases','basic','basis','beach','began','begin','begun','being ','below','bench','billy','birth','black','blame','blind','block','board','bound','brain','brand','bread','break','breed','brief','bring','broad','broke','brown','build','built','buyer','cable','calif','catch','cause','chain','chair','chart','chase','cheap','check','chest','chief','child','china','chose','civil','claim','class','clean','clear','click','clock','close','coach','coast','could','count','court','cover','craft','crash','cream','crime','cross','crowd','crown','curve','cycle','daily','dance','dated','dealt','death','debut','delay','depth','doing','doubt','dozen','draft','drama','drawn','dream','dress','drill','drink','drive','drove','dying','eager','early','earth','eight','elite','empty','enemy','enjoy','enter','entry','equal','event','every','exact','exist','extra','faith','false','fault','fiber','field','fifth','fifty','fight','final','first','fixed','flash','fleet','fluid','focus','force','forth','forty','forum','found','frame','frank','fraud','fresh','front','fruit','fully','funny','giant','given','glass','globe','going','grace','grade','grand','grant','grass','great','green','gross','group','grown','guard','guess','guest','guide','heart','heavy','hence','henry','horse','hotel','house','human','ideal','image','index','inner','input','issue','japan','joint','jones','judge','known','label','large','laser','later','laugh','layer','learn','lease','least','leave','legal','level','lewis','light','limit','links','lives','local','logic','lower','lucky','lunch','lying','magic','major','maker','march','maria','match','maybe','mayor','meant','media','metal','might','minor','minus','mixed','model','money','month','moral','motor','mount','mouse','mouth','movie','music','needs','never','newly','night','noise','north','noted','novel','nurse','ocean','often','order','other','ought','paint','panel','paper','party','peace','peter','phase','phone','photo','piece','pilot','pitch','place','plain','plane','plant','plate','point','pound','power','press','price','pride','prime','print','prior','prize','proud','prove','quick','quiet','quite','radio','raise','range','rapid','ratio','reach','ready','refer','right','rival','river','robin','roger','roman','rough','round','route','royal','rural','scale','scene','scope','score','sense','serve','seven','shall','shape','share','sharp','shelf','shell','shift','shirt','shock','short','shown','sight','since','sixth','sixty','sized','skill','slide','small','smart','smile','smith','smoke','solid','solve','sound','south','space','spare','speak','spend','spent','split','spoke','sport','stage','stake','stand','start','state','steam','stick','still','stock','stone','store','storm','story','strip','stuck','study','style','sugar','suite','super','table','taken','taste','taxes','teach','texas','thank','theft','their','theme','there','these','thick','thing','think','third','those','threw','throw','tight','times','tired','title','today','topic','total','touch','tough','tower','track','trade','train','treat','trend','trial','tried','tries','truck','truly','trust','truth','twice','under','undue','union','unity','until','upset','urban','usage','usual','valid','value','video','virus','visit','vital','voice','waste','watch','water','where','which','while','white','whole','whose','woman','women','world','worse','worst','worth','would','wound','write','wrong','wrote','yield','young','youth']
        const wordNum = Math.round(Math.random() * wordList.length)
        const word = wordList[wordNum]
        const cUser = auth.currentUser

        set(ref(rdb, 'games/' + gameId), {
            isStarted: false,
            isActive: true,
            lobbyActive: true,
            playerCount: 1,
            playerUids: [cUser.uid],
            word: word,
            ownerUid: cUser.uid,
            redirectPlayers: false
        }).then(() => {
            setDoc(doc(db, 'games', `${gameId}`), {
                word: word,
                isActive: true,
                lobbyActive: true,
                ownerUid: cUser.uid
            }).then (() => {
                window.location.replace(`multiplayer/waiting.html?code=${gameId}`)
            })
        })
    }

    // Join game
    joinGameForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const enteredId = joinGameForm['gameCode'].value
        const cUser = auth.currentUser
        
        getDoc(doc(db, 'games', enteredId)).then(docSnap => { // Check if username is taken
            if (!docSnap.exists()) { // If username is taken
                alert('Invalid Game Code');
            } else {
                get(ref(rdb, 'games/' + enteredId + '/isActive')).then((data) => {
                    console.log(data.val())
                    if (data.val() == false) {
                        alert('That game is over')
                    } else {
                        const pRef = ref(rdb, `games/${enteredId}/playerCount`);
                        get(pRef).then((snapshot) => {
                            var playerCountBefore = snapshot.val()
                            playerCountBefore ++ 

                            const uRef = ref(rdb, `games/${enteredId}/playerUids`);
                            get(uRef).then((snapshot) => {
                                var uids = snapshot.val()
                                console.log(uids)
                                uids.push(cUser.uid)

                                const updates = {}
                                updates['games/' + enteredId + '/playerCount'] = playerCountBefore
                                updates['games/' + enteredId + '/playerUids'] = uids

                                return update(ref(rdb), updates)
                            }). then(() => {
                                window.location.replace(`multiplayer/waiting.html?code=${enteredId}`)
                            })
                        })
                    }
                }) 
            }
        })
    })
}

// waiting to start 
if (pageName == 'waiting') {
    var params = new URLSearchParams(window.location.search);
    const gameCode = params.get('code')
    document.getElementById('code').innerHTML = gameCode

    const startBtn = document.getElementById('startGame')

    const oRef = ref(rdb, `games/${gameCode}/ownerUid`)
    get(oRef).then((snapshot) => {
        const ownerUid =  snapshot.val()

        if (auth.currentUser.uid == ownerUid) {
            startBtn.style.display = 'inline'
        }
    })

    get(ref(rdb, `games/${gameCode}/redirectPlayers`)).then((rData) => {
        const redirect = rData.val()

        if (redirect) {
            const updates = {}
            updates['games/' + gameCode + '/redirectPlayers'] = false
            update(ref(rdb), updates)
        }
    })

    const playerCShow = document.getElementById('players')

    const playersRef = ref(rdb, 'games/' + gameCode + '/playerCount');
    onValue(playersRef, (snapshot) => {
        const data = snapshot.val();
        playerCShow.innerHTML = data

        if (data >= 50) {
            playerCShow.innerHTML = `${50} - Player limit reached.`
            playerCShow.style.color = 'red'
        }
        
        const aRef = ref(rdb, 'games/' + gameCode + '/isStarted');
        onValue(aRef, (snapshot) => {
            const data2 = snapshot.val();
            
            if (data2) {
                window.location.replace(`play.html?code=${gameCode}`)
            }
        })
    });

    startBtn.onclick = function (e) {
        const uRef = ref(rdb, `games/${gameCode}/isStarted`)
        get(uRef).then((snapshot) => {
            const updates = {}
            updates['games/' + gameCode + '/isStarted'] = true

            return update(ref(rdb), updates)
        }). then(() => {
            window.location.replace(`play.html?code=${gameCode}`)
        })
    }
}



