import { app } from '../app.js'
import { getDatabase, ref, onValue, set, get, child , push, update} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js"
import { getFirestore, Timestamp, doc, setDoc, getDoc, deleteDoc, addDoc, collection, updateDoc, arrayUnion  } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInAnonymously, linkWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

const p = document.getElementById('p')
var guessNum = 0
var lose = false
var spaceNum = 0
const i_1_1 = document.getElementById('item-1-1')
const i_1_2 = document.getElementById('item-1-2')
const i_1_3 = document.getElementById('item-1-3')
const i_1_4 = document.getElementById('item-1-4')
const i_1_5 = document.getElementById('item-1-5')

const i_2_1 = document.getElementById('item-2-1')
const i_2_2 = document.getElementById('item-2-2')
const i_2_3 = document.getElementById('item-2-3')
const i_2_4 = document.getElementById('item-2-4')
const i_2_5 = document.getElementById('item-2-5')

const i_3_1 = document.getElementById('item-3-1')
const i_3_2 = document.getElementById('item-3-2')
const i_3_3 = document.getElementById('item-3-3')
const i_3_4 = document.getElementById('item-3-4')
const i_3_5 = document.getElementById('item-3-5')

const i_4_1 = document.getElementById('item-4-1')
const i_4_2 = document.getElementById('item-4-2')
const i_4_3 = document.getElementById('item-4-3')
const i_4_4 = document.getElementById('item-4-4')
const i_4_5 = document.getElementById('item-4-5')

const i_5_1 = document.getElementById('item-5-1')
const i_5_2 = document.getElementById('item-5-2')
const i_5_3 = document.getElementById('item-5-3')
const i_5_4 = document.getElementById('item-5-4')
const i_5_5 = document.getElementById('item-5-5')

const i_6_1 = document.getElementById('item-6-1')
const i_6_2 = document.getElementById('item-6-2')
const i_6_3 = document.getElementById('item-6-3')
const i_6_4 = document.getElementById('item-6-4')
const i_6_5 = document.getElementById('item-6-5')

const d_1_1 = document.getElementById('div-1-1')
const d_1_2 = document.getElementById('div-1-2')
const d_1_3 = document.getElementById('div-1-3')
const d_1_4 = document.getElementById('div-1-4')
const d_1_5 = document.getElementById('div-1-5')

const d_2_1 = document.getElementById('div-2-1')
const d_2_2 = document.getElementById('div-2-2')
const d_2_3 = document.getElementById('div-2-3')
const d_2_4 = document.getElementById('div-2-4')
const d_2_5 = document.getElementById('div-2-5')

const d_3_1 = document.getElementById('div-3-1')
const d_3_2 = document.getElementById('div-3-2')
const d_3_3 = document.getElementById('div-3-3')
const d_3_4 = document.getElementById('div-3-4')
const d_3_5 = document.getElementById('div-3-5')

const d_4_1 = document.getElementById('div-4-1')
const d_4_2 = document.getElementById('div-4-2')
const d_4_3 = document.getElementById('div-4-3')
const d_4_4 = document.getElementById('div-4-4')
const d_4_5 = document.getElementById('div-4-5')

const d_5_1 = document.getElementById('div-5-1')
const d_5_2 = document.getElementById('div-5-2')
const d_5_3 = document.getElementById('div-5-3')
const d_5_4 = document.getElementById('div-5-4')
const d_5_5 = document.getElementById('div-5-5')

const d_6_1 = document.getElementById('div-6-1')
const d_6_2 = document.getElementById('div-6-2')
const d_6_3 = document.getElementById('div-6-3')
const d_6_4 = document.getElementById('div-6-4')
const d_6_5 = document.getElementById('div-6-5')

const winModal = document.getElementById('winModal')
const winClose = document.getElementById('win-mod-btn')
const winCloseLeave = document.getElementById('win-mod-btn2')
const winModP = document.getElementById('lose-mod-p3')

const loseModal = document.getElementById('loseModal')
const loseClose = document.getElementById('lose-mod-btn')
const loseReveal = document.getElementById('lose-mod-p2')
const loseCloseLeave = document.getElementById('lose-mod-btn-leave')

const medLoseModal = document.getElementById('loseModal2')
const medLoseClose = document.getElementById('lose2-mod-btn')

const keyA = document.getElementById('k_a')
const keyB = document.getElementById('k_b')
const keyC = document.getElementById('k_c')
const keyD = document.getElementById('k_d')
const keyE = document.getElementById('k_e')
const keyF = document.getElementById('k_f')
const keyG = document.getElementById('k_g')
const keyH = document.getElementById('k_h')
const keyI = document.getElementById('k_i')
const keyJ = document.getElementById('k_j')
const keyK = document.getElementById('k_k')
const keyL = document.getElementById('k_l')
const keyM = document.getElementById('k_m')
const keyN = document.getElementById('k_n')
const keyO = document.getElementById('k_o')
const keyP = document.getElementById('k_p')
const keyQ = document.getElementById('k_q')
const keyR = document.getElementById('k_r')
const keyS = document.getElementById('k_s')
const keyT = document.getElementById('k_t')
const keyU = document.getElementById('k_u')
const keyV = document.getElementById('k_v')
const keyW = document.getElementById('k_w')
const keyX = document.getElementById('k_x')
const keyY = document.getElementById('k_y')
const keyZ = document.getElementById('k_z')
const keyEnt = document.getElementById('k_enter')
const keyBack = document.getElementById('k_back')

const loseModWinner = document.getElementById('lose-mod-winner')

export const db = getFirestore(app);
export const rdb = getDatabase(app)
export const auth = getAuth(app);

var params = new URLSearchParams(window.location.search);
const gameCode = params.get('code')

function getWord() {
    const wordList = ['about','above','abuse','actor','acute','admit','adopt','adult','after','again','agent','agree','ahead','alarm','album','alert','alike','alive','allow','alone','along','alter','among','anger','Angle','angry','apart','arena','argue','arise','aside','asset','audio','audit','avoid','award','aware','badly','baker','bases','basic','basis','beach','began','begin','begun','being ','below','bench','billy','birth','black','blame','blind','block','board','bound','brain','brand','bread','break','breed','brief','bring','broad','broke','brown','build','built','buyer','cable','calif','catch','cause','chain','chair','chart','chase','cheap','check','chest','chief','child','china','chose','civil','claim','class','clean','clear','click','clock','close','coach','coast','could','count','court','cover','craft','crash','cream','crime','cross','crowd','crown','curve','cycle','daily','dance','dated','dealt','death','debut','delay','depth','doing','doubt','dozen','draft','drama','drawn','dream','dress','drill','drink','drive','drove','dying','eager','early','earth','eight','elite','empty','enemy','enjoy','enter','entry','equal','event','every','exact','exist','extra','faith','false','fault','fiber','field','fifth','fifty','fight','final','first','fixed','flash','fleet','fluid','focus','force','forth','forty','forum','found','frame','frank','fraud','fresh','front','fruit','fully','funny','giant','given','glass','globe','going','grace','grade','grand','grant','grass','great','green','gross','group','grown','guard','guess','guest','guide','heart','heavy','hence','henry','horse','hotel','house','human','ideal','image','index','inner','input','issue','japan','joint','jones','judge','known','label','large','laser','later','laugh','layer','learn','lease','least','leave','legal','level','lewis','light','limit','links','lives','local','logic','lower','lucky','lunch','lying','magic','major','maker','march','maria','match','maybe','mayor','meant','media','metal','might','minor','minus','mixed','model','money','month','moral','motor','mount','mouse','mouth','movie','music','needs','never','newly','night','noise','north','noted','novel','nurse','ocean','often','order','other','ought','paint','panel','paper','party','peace','peter','phase','phone','photo','piece','pilot','pitch','place','plain','plane','plant','plate','point','pound','power','press','price','pride','prime','print','prior','prize','proud','prove','quick','quiet','quite','radio','raise','range','rapid','ratio','reach','ready','refer','right','rival','river','robin','roger','roman','rough','round','route','royal','rural','scale','scene','scope','score','sense','serve','seven','shall','shape','share','sharp','shelf','shell','shift','shirt','shock','short','shown','sight','since','sixth','sixty','sized','skill','slide','small','smart','smile','smith','smoke','solid','solve','sound','south','space','spare','speak','spend','spent','split','spoke','sport','stage','stake','stand','start','state','steam','stick','still','stock','stone','store','storm','story','strip','stuck','study','style','sugar','suite','super','table','taken','taste','taxes','teach','texas','thank','theft','their','theme','there','these','thick','thing','think','third','those','threw','throw','tight','times','tired','title','today','topic','total','touch','tough','tower','track','trade','train','treat','trend','trial','tried','tries','truck','truly','trust','truth','twice','under','undue','union','unity','until','upset','urban','usage','usual','valid','value','video','virus','visit','vital','voice','waste','watch','water','where','which','while','white','whole','whose','woman','women','world','worse','worst','worth','would','wound','write','wrong','wrote','yield','young','youth']
    const wordNum = Math.round(Math.random() * wordList.length)
    const word = wordList[wordNum]

    return word
}

// check that the player is signed in
onAuthStateChanged(auth, (user) => {
    if (user == null) {
        alert('You are not signed in')
        window.location.replace('../multiplayer.html')
    } 
})

// Check if player is in the game they are trying to access
const pRef = ref(rdb, 'games/' + gameCode + '/playerUids')
get(pRef).then((pData) => {
    const pUids = pData.val()
    if (pUids.indexOf(auth.currentUser.uid) === -1) {
        window.location.replace('../multiplayer.html')
        alert('You are not in this game, please try again')
    } 
})

// Check if player has lost
const lRef = ref(rdb, 'games/' + gameCode + '/loserUids')
get(lRef).then((lData) => {
    const lUids = lData.val()
    if (lUids == null) {
        return
    } else {
        if (lUids.indexOf(auth.currentUser.uid) === -1) {
            medLoseModal.style.display = 'block'
        }
    }
})

// Watch if lobby is closed 
onValue(ref(rdb, 'games/' + gameCode + '/lobbyActive'), (snapshot) => {
    const lobbyActive = snapshot.val();
    if(!lobbyActive) {
        alert('This lobby has been closed')
        window.location.replace('../multiplayer.html')
    }
})

// Watch to redirect
onValue(ref(rdb, 'games/' + gameCode + '/redirectPlayers'), (snapshot) => {
    const redirect = snapshot.val()
    if (redirect) {
        window.location.replace(`waiting.html?code=${gameCode}`)
    }
})

// Watch if game is over
const aRef = ref(rdb, 'games/' + gameCode + '/isActive');
onValue(aRef, (snapshot) => {
    const active = snapshot.val();
    if (!active) {
        const wRef = ref(rdb, `games/${gameCode}/winnerUid`)
        get(wRef).then((snapshot) => {
            const winnerUid = snapshot.val()

            if (winnerUid == 0) {
                medLoseModal.style.display = 'none'
                loseModal.style.display = 'block'
                loseModWinner.innerHTML = `No one guessed the word`

                get(ref(rdb, `games/${gameCode}/ownerUid`)).then((oData) => {
                    const ownerUid = oData.val()

                    if (auth.currentUser.uid == ownerUid) {
                        loseClose.onclick = function(e) {
                            const updates = {}
                            const newWord = getWord()
                            const newLoserUids = []
                            const newWinnerUids = []

                            updates['games/' + gameCode + '/isActive'] = true
                            updates['games/' + gameCode + '/isStarted'] = false
                            updates['games/' + gameCode + '/word'] = newWord
                            updates['games/' + gameCode + '/loserUids'] = newLoserUids
                            updates['games/' + gameCode + '/winnerUids'] = newWinnerUids 
                            updates['games/' + gameCode + '/redirectPlayers'] = true

                            update(ref(rdb), updates)

                            window.location.replace(`waiting.html?code=${gameCode}`)
                        }

                        loseCloseLeave.onclick = function(e) {
                            const updates = {}
                            updates['games/' + gameCode + '/lobbyActive'] = false
                            update(ref(rdb), updates)

                            window.location.replace(`../multiplayer.html`)
                        }
                    } else {
                        loseClose.style.display = 'none'
                        winModP.innerHTML = 'Waiting for the owner to start...'

                        loseCloseLeave.onclick = function(e) {
                            const updates = {}
                            get(ref(rdb, `games/${gameCode}/playerUids`)).then((playerUidsData) => {
                                get(ref(rdb, `games/${gameCode}/playerCount`)).then((playerCountData) => {
                                    var playerUids = playerUidsData.val()
                                    var playerCount = playerCountData.val()

                                    const index = playerUids.indexOf(5);
                                    if (index >= -1) {
                                        playerUids.splice(index, 1); // 2nd parameter means remove one item only
                                        playerCount -= 1

                                        updates['games/' + gameCode + '/playerUids'] = playerUids
                                        updates['games/' + gameCode + '/playerCount'] = playerCount
                                        update(ref(rdb), updates)

                                        window.location.replace('../multiplayer.html')
                                    }
                                })
                            })
                        }
                    }
                })
            } else {
                getDoc(doc(db, 'users', winnerUid)).then((data) => {
                    if (data.exists()) {
                        const winnerUsername = data.data()['username']
                        medLoseModal.style.display = 'none'
                        if (auth.currentUser.uid == winnerUid) {
                            winModal.style.display = 'block'
                            
                            get(ref(rdb, `games/${gameCode}/ownerUid`)).then((oData) => {
                                const ownerUid = oData.val()

                                if (auth.currentUser.uid == ownerUid) {
                                    winClose.onclick = function(e) {
                                        const updates = {}
                                        const newWord = getWord()
                                        const newLoserUids = []
                                        const newWinnerUids = []
            
                                        updates['games/' + gameCode + '/isActive'] = true
                                        updates['games/' + gameCode + '/isStarted'] = false
                                        updates['games/' + gameCode + '/word'] = newWord
                                        updates['games/' + gameCode + '/loserUids'] = newLoserUids
                                        updates['games/' + gameCode + '/winnerUids'] = newWinnerUids 
                                        updates['games/' + gameCode + '/redirectPlayers'] = true
            
                                        update(ref(rdb), updates)
            
                                        window.location.replace(`waiting.html?code=${gameCode}`)
                                    }

                                    winCloseLeave.onclick = function(e) {
                                        const updates = {}
                                        updates['games/' + gameCode + '/lobbyActive'] = false
                                        update(ref(rdb), updates)
            
                                        window.location.replace(`../multiplayer.html`)
                                    }
                                } else {
                                    winClose.style.display = 'none'
                                    winModP.innerHTML = 'Waiting for the owner to start...'

                                    winCloseLeave.onclick = function(e) {
                                        const updates = {}
                                        get(ref(rdb, `games/${gameCode}/playerUids`)).then((playerUidsData) => {
                                            get(ref(rdb, `games/${gameCode}/playerCount`)).then((playerCountData) => {
                                                var playerUids = playerUidsData.val()
                                                var playerCount = playerCountData.val()
    
                                                const index = playerUids.indexOf(5);
                                                if (index >= -1) {
                                                    playerUids.splice(index, 1); // 2nd parameter means remove one item only
                                                    playerCount -= 1
    
                                                    updates['games/' + gameCode + '/playerUids'] = playerUids
                                                    updates['games/' + gameCode + '/playerCount'] = playerCount
                                                    update(ref(rdb), updates)

                                                    window.location.replace('../multiplayer.html')
                                                }
                                            })
                                        })
                                    }
                                }
                            })

                        } else {
                            // the current user lost
                            get(ref(rdb, `games/${gameCode}/ownerUid`)).then((ownerUidData) => {
                                const ownerUid = ownerUidData.val()

                                if(auth.currentUser.uid == ownerUid) {
                                    loseClose.onclick = function(e) {
                                        const updates = {}
                                        const newWord = getWord()
                                        const newLoserUids = []
                                        const newWinnerUids = []
            
                                        updates['games/' + gameCode + '/isActive'] = true
                                        updates['games/' + gameCode + '/isStarted'] = false
                                        updates['games/' + gameCode + '/word'] = newWord
                                        updates['games/' + gameCode + '/loserUids'] = newLoserUids
                                        updates['games/' + gameCode + '/winnerUids'] = newWinnerUids 
                                        updates['games/' + gameCode + '/redirectPlayers'] = true
            
                                        update(ref(rdb), updates)
            
                                        window.location.replace(`waiting.html?code=${gameCode}`)
                                    }
            
                                    loseCloseLeave.onclick = function(e) {
                                        const updates = {}
                                        updates['games/' + gameCode + '/lobbyActive'] = false
                                        update(ref(rdb), updates)
            
                                        window.location.replace(`../multiplayer.html`)
                                    }

                                    loseModal.style.display = 'block'
                                    loseModWinner.innerHTML = `The winner was: ${winnerUsername}`
                                } else {
                                    loseClose.style.display = 'none'
                                    winModP.innerHTML = 'Waiting for the owner to start...'

                                    loseCloseLeave.onclick = function(e) {
                                        const updates = {}
                                        get(ref(rdb, `games/${gameCode}/playerUids`)).then((playerUidsData) => {
                                            get(ref(rdb, `games/${gameCode}/playerCount`)).then((playerCountData) => {
                                                var playerUids = playerUidsData.val()
                                                var playerCount = playerCountData.val()
            
                                                const index = playerUids.indexOf(5);
                                                if (index >= -1) {
                                                    playerUids.splice(index, 1); // 2nd parameter means remove one item only
                                                    playerCount -= 1
            
                                                    updates['games/' + gameCode + '/playerUids'] = playerUids
                                                    updates['games/' + gameCode + '/playerCount'] = playerCount
                                                    update(ref(rdb), updates)
            
                                                    window.location.replace('../multiplayer.html')
                                                }
                                            })
                                        })
                                    }

                                    loseModal.style.display = 'block'
                                    loseClose.style.display = 'none'
                                    loseModWinner.innerHTML = `The winner was: ${winnerUsername}`
                                }
                            })
                        }
                    }
                })
            }
        })
    }
})

const uRef = ref(rdb, `games/${gameCode}/isStarted`)
get(uRef).then((snapshot) => {
    const isStarted = snapshot.val()

    if (!isStarted) {
        window.location.replace(`waiting.html?code=${gameCode}`)
    }
}). then(() => {
    const wRef = ref(rdb, `games/${gameCode}/word`)
    get(wRef).then((snapshot) => {
        const word = snapshot.val()

        var letterList = []
        var win = false
        loseReveal.innerHTML = `The word was: ${word}`

        function addLetterToArr(keyName) {
            letterList.push(keyName)
        }

        function addLetter(letter) {
            if (guessNum == 0) {
                if (spaceNum == 0) {
                    i_1_1.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 1) {
                    i_1_2.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 2) {
                    i_1_3.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 3) {
                    i_1_4.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 4) {
                    i_1_5.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                }
            } else if (guessNum == 1) {
                if (spaceNum == 0) {
                    i_2_1.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 1) {
                    i_2_2.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 2) {
                    i_2_3.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 3) {
                    i_2_4.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 4) {
                    i_2_5.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                }
            } else if (guessNum == 2) {
                if (spaceNum == 0) {
                    i_3_1.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 1) {
                    i_3_2.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 2) {
                    i_3_3.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 3) {
                    i_3_4.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 4) {
                    i_3_5.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                }
            } else if (guessNum == 3) {
                if (spaceNum == 0) {
                    i_4_1.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 1) {
                    i_4_2.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 2) {
                    i_4_3.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 3) {
                    i_4_4.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 4) {
                    i_4_5.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                }
            } else if (guessNum == 4) {
                if (spaceNum == 0) {
                    i_5_1.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 1) {
                    i_5_2.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 2) {
                    i_5_3.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 3) {
                    i_5_4.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 4) {
                    i_5_5.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                }
            } else if (guessNum == 5) {
                if (spaceNum == 0) {
                    i_6_1.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 1) {
                    i_6_2.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 2) {
                    i_6_3.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 3) {
                    i_6_4.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                } else if (spaceNum == 4) {
                    i_6_5.innerHTML = letter
                    addLetterToArr(letter)
                    spaceNum ++
                }
            }
        }

        function delLetter() {
            if (guessNum == 0) {
                if (spaceNum == 1) {
                    spaceNum --
                    i_1_1.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 2) {
                    spaceNum --
                    i_1_2.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 3) {
                    spaceNum --
                    i_1_3.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 4) {
                    spaceNum --
                    i_1_4.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 5) {
                    spaceNum --
                    i_1_5.innerHTML = ''
                    letterList.pop()
                }
            } else if (guessNum == 1) {
                if (spaceNum == 1) {
                    spaceNum --
                    i_2_1.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 2) {
                    spaceNum --
                    i_2_2.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 3) {
                    spaceNum --
                    i_2_3.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 4) {
                    spaceNum --
                    i_2_4.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 5) {
                    spaceNum --
                    i_2_5.innerHTML = ''
                    letterList.pop()
                }
            } else if (guessNum == 2) {
                if (spaceNum == 1) {
                    spaceNum --
                    i_3_1.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 2) {
                    spaceNum --
                    i_3_2.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 3) {
                    spaceNum --
                    i_3_3.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 4) {
                    spaceNum --
                    i_3_4.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 5) {
                    spaceNum --
                    i_3_5.innerHTML = ''
                    letterList.pop()
                }
            } else if (guessNum == 3) {
                if (spaceNum == 1) {
                    spaceNum --
                    i_4_1.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 2) {
                    spaceNum --
                    i_4_2.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 3) {
                    spaceNum --
                    i_4_3.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 4) {
                    spaceNum --
                    i_4_4.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 5) {
                    spaceNum --
                    i_4_5.innerHTML = ''
                    letterList.pop()
                }
            } else if (guessNum == 4) {
                if (spaceNum == 1) {
                    spaceNum --
                    i_5_1.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 2) {
                    spaceNum --
                    i_5_2.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 3) {
                    spaceNum --
                    i_5_3.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 4) {
                    spaceNum --
                    i_5_4.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 5) {
                    spaceNum --
                    i_5_5.innerHTML = ''
                    letterList.pop()
                }
            } else if (guessNum == 5) {
                if (spaceNum == 1) {
                    spaceNum --
                    i_6_1.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 2) {
                    spaceNum --
                    i_6_2.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 3) {
                    spaceNum --
                    i_6_3.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 4) {
                    spaceNum --
                    i_6_4.innerHTML = ''
                    letterList.pop()
                } else if (spaceNum == 5) {
                    spaceNum --
                    i_6_5.innerHTML = ''
                    letterList.pop()
                }
            }
        }

        function enterGuess(keyCode) {
            var guess = letterList.join('')
            if (guessNum == 0) {
                if (letterList.length != 5 && guessNum == 0) {
                    alert('Word is not long enough')
                } else {
                    guessNum ++ 
                    spaceNum = 0 
        
                    if (guess == word) {
                        win = true
                        d_1_1.style.backgroundColor = 'green'
                        d_1_2.style.backgroundColor = 'green'
                        d_1_3.style.backgroundColor = 'green'
                        d_1_4.style.backgroundColor = 'green'
                        d_1_5.style.backgroundColor = 'green'
        
                        for (var i = 0; i < letterList.length; i ++) {
                            document.getElementById(`k_${letterList[i]}`).style.backgroundColor = 'green'
                        }
                        
                        winModal.style.display = 'block'

                        const uRef = ref(rdb, `games/${gameCode}/isActive`);
                        get(uRef).then((snapshot) => {
                            var isActive = snapshot.val()

                            const updates = {}
                            updates['games/' + gameCode + '/isActive'] = false
                            updates['games/' + gameCode + '/winnerUid'] = auth.currentUser.uid

                            return update(ref(rdb), updates)
                        })
        
                        document.body.onkeydown = function(e) {
                            if (keyCode == 13) {
                                window.location.replace('../multiplayer.html')
                            }
                        }
        
                        winClose.onclick = function(event) {
                            window.location.replace('../multiplayer.html')
                        }
                    } else {
                        // Check letter matches
                        if (word.includes(guess[0])) {
                            if (word[0] == guess[0]) {
                                d_1_1.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'green'
                            } else {
                                d_1_1.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[1])) {
                            if (word[1] == guess[1]) {
                                d_1_2.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'green'
                            } else {
                                d_1_2.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[2])) {
                            if (word[2] == guess[2]) {
                                d_1_3.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'green'
                            } else {
                                d_1_3.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[3])) {
                            if (word[3] == guess[3]) {
                                d_1_4.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'green'
                            } else {
                                d_1_4.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[4])) {
                            if (word[4] == guess[4]) {
                                d_1_5.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'green'
                            } else {
                                d_1_5.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'orange'
                            }
                        } if (!word.includes(guess[0])) {
                            d_1_1.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[1])) {
                            d_1_2.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[2])) {
                            d_1_3.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[3])) {
                            d_1_4.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[4])) {
                            d_1_5.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'gray'
                        }
                    }
                    letterList = []
                }
            } else if (guessNum == 1) {
                if (letterList.length != 5 && guessNum == 1) {
                    alert('Word is not long enough')
                } else {
                    guessNum ++ 
                    spaceNum = 0 
        
                    var guess = letterList.join('')
        
                    if (guess == word) {
                        win = true
                        d_2_1.style.backgroundColor = 'green'
                        d_2_2.style.backgroundColor = 'green'
                        d_2_3.style.backgroundColor = 'green'
                        d_2_4.style.backgroundColor = 'green'
                        d_2_5.style.backgroundColor = 'green'
        
                        for (var i = 0; i < letterList.length; i ++) {
                            document.getElementById(`k_${letterList[i]}`).style.backgroundColor = 'green'
                        }
        
                        const uRef = ref(rdb, `games/${gameCode}/isActive`);
                        get(uRef).then((snapshot) => {
                            var isActive = snapshot.val()

                            const updates = {}
                            updates['games/' + gameCode + '/isActive'] = false
                            updates['games/' + gameCode + '/winnerUid'] = auth.currentUser.uid

                            return update(ref(rdb), updates)
                        })
                    } else {
                        // Check letter matches
                        if (word.includes(guess[0])) {
                            if (word[0] == guess[0]) {
                                d_2_1.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'green'
                            } else {
                                d_2_1.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[1])) {
                            if (word[1] == guess[1]) {
                                d_2_2.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'green'
                            } else {
                                d_2_2.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[2])) {
                            if (word[2] == guess[2]) {
                                d_2_3.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'green'
                            } else {
                                d_2_3.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[3])) {
                            if (word[3] == guess[3]) {
                                d_2_4.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'green'
                            } else {
                                d_2_4.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[4])) {
                            if (word[4] == guess[4]) {
                                d_2_5.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'green'
                            } else {
                                d_2_5.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'orange'
                            }
                        } if (!word.includes(guess[0])) {
                            d_2_1.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[1])) {
                            d_2_2.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[2])) {
                            d_2_3.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[3])) {
                            d_2_4.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[4])) {
                            d_2_5.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'gray'
                        }
                    }
                    letterList = []
                }
            } else if (guessNum == 2) {
                if (letterList.length != 5 && guessNum == 2) {
                    alert('Word is not long enough')
                } else {
                    guessNum ++ 
                    spaceNum = 0 
        
                    var guess = letterList.join('')
        
                    if (guess == word) {
                        win = true
                        d_3_1.style.backgroundColor = 'green'
                        d_3_2.style.backgroundColor = 'green'
                        d_3_3.style.backgroundColor = 'green'
                        d_3_4.style.backgroundColor = 'green'
                        d_3_5.style.backgroundColor = 'green'
        
                        for (var i = 0; i < letterList.length; i ++) {
                            document.getElementById(`k_${letterList[i]}`).style.backgroundColor = 'green'
                        }
        
                        const uRef = ref(rdb, `games/${gameCode}/isActive`);
                        get(uRef).then((snapshot) => {
                            var isActive = snapshot.val()

                            const updates = {}
                            updates['games/' + gameCode + '/isActive'] = false
                            updates['games/' + gameCode + '/winnerUid'] = auth.currentUser.uid

                            return update(ref(rdb), updates)
                        })
                    } else {
                        // Check letter matches
                        if (word.includes(guess[0])) {
                            if (word[0] == guess[0]) {
                                d_3_1.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'green'
                            } else {
                                d_3_1.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[1])) {
                            if (word[1] == guess[1]) {
                                d_3_2.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'green'
                            } else {
                                d_3_2.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[2])) {
                            if (word[2] == guess[2]) {
                                d_3_3.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'green'
                            } else {
                                d_3_3.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[3])) {
                            if (word[3] == guess[3]) {
                                d_3_4.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'green'
                            } else {
                                d_3_4.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[4])) {
                            if (word[4] == guess[4]) {
                                d_3_5.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'green'
                            } else {
                                d_3_5.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'orange'
                            }
                        } if (!word.includes(guess[0])) {
                            d_3_1.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[1])) {
                            d_3_2.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[2])) {
                            d_3_3.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[3])) {
                            d_3_4.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[4])) {
                            d_3_5.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'gray'
                        }
                    }
                    letterList = []
                }
            } else if (guessNum == 3) {
                if (letterList.length != 5 && guessNum == 3) {
                    alert('Word is not long enough')
                } else {
                    guessNum ++ 
                    spaceNum = 0 
        
                    var guess = letterList.join('')
        
                    if (guess == word) {
                        win = true
                        d_4_1.style.backgroundColor = 'green'
                        d_4_2.style.backgroundColor = 'green'
                        d_4_3.style.backgroundColor = 'green'
                        d_4_4.style.backgroundColor = 'green'
                        d_4_5.style.backgroundColor = 'green'
        
                        for (var i = 0; i < letterList.length; i ++) {
                            document.getElementById(`k_${letterList[i]}`).style.backgroundColor = 'green'
                        }
        
                        const uRef = ref(rdb, `games/${gameCode}/isActive`);
                        get(uRef).then((snapshot) => {
                            var isActive = snapshot.val()

                            const updates = {}
                            updates['games/' + gameCode + '/isActive'] = false
                            updates['games/' + gameCode + '/winnerUid'] = auth.currentUser.uid

                            return update(ref(rdb), updates)
                        })
                    } else {
                        // Check letter matches
                        if (word.includes(guess[0])) {
                            if (word[0] == guess[0]) {
                                d_4_1.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'green'
                            } else {
                                d_4_1.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[1])) {
                            if (word[1] == guess[1]) {
                                d_4_2.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'green'
                            } else {
                                d_4_2.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[2])) {
                            if (word[2] == guess[2]) {
                                d_4_3.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'green'
                            } else {
                                d_4_3.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[3])) {
                            if (word[3] == guess[3]) {
                                d_4_4.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'green'
                            } else {
                                d_4_4.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[4])) {
                            if (word[4] == guess[4]) {
                                d_4_5.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'green'
                            } else {
                                d_4_5.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'orange'
                            }
                        } if (!word.includes(guess[0])) {
                            d_4_1.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[1])) {
                            d_4_2.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[2])) {
                            d_4_3.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[3])) {
                            d_4_4.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[4])) {
                            d_4_5.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'gray'
                        }
                    }
                    letterList = []
                }
            } else if (guessNum == 4) {
                if (letterList.length != 5 && guessNum == 4) {
                    alert('Word is not long enough')
                } else {
                    guessNum ++ 
                    spaceNum = 0 
        
                    var guess = letterList.join('')
        
                    if (guess == word) {
                        win = true
                        d_5_1.style.backgroundColor = 'green'
                        d_5_2.style.backgroundColor = 'green'
                        d_5_3.style.backgroundColor = 'green'
                        d_5_4.style.backgroundColor = 'green'
                        d_5_5.style.backgroundColor = 'green'
        
                        for (var i = 0; i < letterList.length; i ++) {
                            document.getElementById(`k_${letterList[i]}`).style.backgroundColor = 'green'
                        }
        
                        const uRef = ref(rdb, `games/${gameCode}/isActive`);
                        get(uRef).then((snapshot) => {
                            var isActive = snapshot.val()

                            const updates = {}
                            updates['games/' + gameCode + '/isActive'] = false
                            updates['games/' + gameCode + '/winnerUid'] = auth.currentUser.uid

                            return update(ref(rdb), updates)
                        })
                    } else {
                        // Check letter matches
                        if (word.includes(guess[0])) {
                            if (word[0] == guess[0]) {
                                d_5_1.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'green'
                            } else {
                                d_5_1.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[1])) {
                            if (word[1] == guess[1]) {
                                d_5_2.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'green'
                            } else {
                                d_5_2.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[2])) {
                            if (word[2] == guess[2]) {
                                d_5_3.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'green'
                            } else {
                                d_5_3.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[3])) {
                            if (word[3] == guess[3]) {
                                d_5_4.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'green'
                            } else {
                                d_5_4.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[4])) {
                            if (word[4] == guess[4]) {
                                d_5_5.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'green'
                            } else {
                                d_5_5.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'orange'
                            }
                        } if (!word.includes(guess[0])) {
                            d_5_1.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[1])) {
                            d_5_2.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[2])) {
                            d_5_3.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[3])) {
                            d_5_4.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[4])) {
                            d_5_5.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'gray'
                        }
                    }
                    letterList = []
                }
            } else if (guessNum == 5) {
                if (letterList.length != 5 && guessNum == 5) {
                    alert('Word is not long enough')
                } else {
                    guessNum ++ 
                    spaceNum = 0 
        
                    var guess = letterList.join('')
        
                    if (guess == word) {
                        win = true
                        d_6_1.style.backgroundColor = 'green'
                        d_6_2.style.backgroundColor = 'green'
                        d_6_3.style.backgroundColor = 'green'
                        d_6_4.style.backgroundColor = 'green'
                        d_6_5.style.backgroundColor = 'green'
        
                        for (var i = 0; i < letterList.length; i ++) {
                            document.getElementById(`k_${letterList[i]}`).style.backgroundColor = 'green'
                        }
        
                        const uRef = ref(rdb, `games/${gameCode}/isActive`);
                        get(uRef).then((snapshot) => {
                            var isActive = snapshot.val()

                            const updates = {}
                            updates['games/' + gameCode + '/isActive'] = false
                            updates['games/' + gameCode + '/winnerUid'] = auth.currentUser.uid

                            return update(ref(rdb), updates)
                        })
                    } else {
                        console.log(guessNum)
                        // Check letter matches
                        if (word.includes(guess[0])) {
                            if (word[0] == guess[0]) {
                                d_6_1.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'green'
                            } else {
                                d_6_1.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[1])) {
                            if (word[1] == guess[1]) {
                                d_6_2.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'green'
                            } else {
                                d_6_2.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[2])) {
                            if (word[2] == guess[2]) {
                                d_6_3.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'green'
                            } else {
                                d_6_3.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[3])) {
                            if (word[3] == guess[3]) {
                                d_6_4.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'green'
                            } else {
                                d_6_4.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'orange'
                            }
                        } if (word.includes(guess[4])) {
                            if (word[4] == guess[4]) {
                                d_6_5.style.backgroundColor = 'green'
                                document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'green'
                            } else {
                                d_6_5.style.backgroundColor = 'orange'
                                document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'orange'
                            }
                        } if (!word.includes(guess[0])) {
                            d_6_1.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[0]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[1])) {
                            d_6_2.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[1]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[2])) {
                            d_6_3.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[2]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[3])) {
                            d_6_4.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[3]}`).style.backgroundColor = 'gray'
                        } if (!word.includes(guess[4])) {
                            d_6_5.style.backgroundColor = 'gray'
                            document.getElementById(`k_${guess[4]}`).style.backgroundColor = 'gray'
                        }
                    }
                    letterList = []

                    if (guessNum == 6) {
                        if (guess != word) {
                            lose = true
            
                            medLoseModal.style.display = 'block'

                            get(ref(rdb, 'games/' + gameCode + '/loserUids')).then((data) => {
                                var lUids = data.val()

                                get(ref(rdb, 'games/' + gameCode + '/playerCount')).then((pData) => {
                                    var pCount = pData.val()

                                    if (lUids == null) {
                                        lUids = [auth.currentUser.uid]
    
                                        const updates = {}
                                        updates['games/' + gameCode + '/loserUids'] = lUids
    
                                        update(ref(rdb), updates)
                    
                                    } else {
                                        lUids.push(auth.currentUser.uid)
    
                                        const updates = {}
                                        updates['games/' + gameCode + '/loserUids'] = lUids
    
                                        update(ref(rdb), updates)
                                    } if (pCount == lUids.length) {
                                        const updates = {}
                                        updates['games/' + gameCode + '/isActive'] = false
                                        updates['games/' + gameCode + '/winnerUid'] = 0
                                        
                                        update(ref(rdb), updates)
                                    }
                                })
                            })
                        }
                    }
                }
            }
        }

        // Define onscreen buttons
        keyA.onclick = function(e) {
            addLetter('a')
        }

        keyB.onclick = function(e) {
            addLetter('b')
        }

        keyC.onclick = function(e) {
            addLetter('c')
        }

        keyD.onclick = function(e) {
            addLetter('d')
        }

        keyE.onclick = function(e) {
            addLetter('e')
        }

        keyF.onclick = function(e) {
            addLetter('f')
        }

        keyG.onclick = function(e) {
            addLetter('g')
        }

        keyH.onclick = function(e) {
            addLetter('h')
        }

        keyI.onclick = function(e) {
            addLetter('i')
        }

        keyJ.onclick = function(e) {
            addLetter('j')
        }

        keyK.onclick = function(e) {
            addLetter('k')
        }

        keyL.onclick = function(e) {
            addLetter('l')
        }

        keyM.onclick = function(e) {
            addLetter('m')
        }

        keyN.onclick = function(e) {
            addLetter('n')
        }

        keyO.onclick = function(e) {
            addLetter('o')
        }

        keyP.onclick = function(e) {
            addLetter('p')
        }

        keyQ.onclick = function(e) {
            addLetter('q')
        }

        keyR.onclick = function(e) {
            addLetter('r')
        }

        keyS.onclick = function(e) {
            addLetter('s')
        }

        keyT.onclick = function(e) {
            addLetter('t')
        }

        keyU.onclick = function(e) {
            addLetter('u')
        }

        keyV.onclick = function(e) {
            addLetter('v')
        }

        keyW.onclick = function(e) {
            addLetter('w')
        }

        keyX.onclick = function(e) {
            addLetter('x')
        }

        keyY.onclick = function(e) {
            addLetter('y')
        }

        keyZ.onclick = function(e) {
            addLetter('z')
        }

        keyBack.onclick = function(e) {
            delLetter()
        }

        keyEnt.onclick = function(e) {
            var keyCode = null
            enterGuess(keyCode)
        }

        // Define keyboard code buttons
        document.body.onkeydown = function keyPress(e) {
            const keyCode = e.keyCode
            const keyName = e.key
            const validKeys = [81,87,69,82,84,89,85,73,79,80,65,83,68,70,71,72,74,75,76,90,88,67,86,66,78,77,13,8]

            if (validKeys.includes(keyCode)) {
                if (keyCode != 13 && keyCode != 8) {
                    addLetter(keyName)
                } else if (keyCode == 13) {
                    enterGuess(keyCode)
                } else if (keyCode == 8) {
                    delLetter()
                }
            }
        }
            }) 
})