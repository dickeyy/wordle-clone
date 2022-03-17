import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, Alert, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.spacer1} />
      <StatusBar barStyle='light-content' hidden = {false} backgroundColor = "#1d1d1d" translucent = {true} />
      <View style={styles.frame}>
        <View style={styles.gridRow} >
          <View style={styles.gridItem}> 
          
          </View>
          <View style={styles.gridItem} />
          <View style={styles.gridItem} />
          <View style={styles.gridItem} />
          <View style={styles.gridItem} />
        </View>
        <View style={styles.gridRow} >
        <View style={styles.gridItem} />
          <View style={styles.gridItem} />
          <View style={styles.gridItem} />
          <View style={styles.gridItem} />
          <View style={styles.gridItem} />
        </View>
        <View style={styles.gridRow} >
        <View style={styles.gridItem} />
          <View style={styles.gridItem} />
          <View style={styles.gridItem} />
          <View style={styles.gridItem} />
          <View style={styles.gridItem} />
        </View>
        <View style={styles.gridRow} >
        <View style={styles.gridItem} />
          <View style={styles.gridItem} />
          <View style={styles.gridItem} />
          <View style={styles.gridItem} />
          <View style={styles.gridItem} />
        </View>
        <View style={styles.gridRow} >
        <View style={styles.gridItem} />
          <View style={styles.gridItem} />
          <View style={styles.gridItem} />
          <View style={styles.gridItem} />
          <View style={styles.gridItem} /> 
        </View>
        <View style={styles.gridRow} >
        <View style={styles.gridItem} />
          <View style={styles.gridItem} />
          <View style={styles.gridItem} />
          <View style={styles.gridItem} />
          <View style={styles.gridItem} /> 
        </View>
      </View>
      <View style={styles.keyboardContainer} >
        <View style={styles.keyboardContainerRow} >
          <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>Q</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>W</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>E</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>R</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>T</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>Y</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>U</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>I</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>O</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>P</Text>
            </View>
          </TouchableHighlight>

        </View>

        <View style={styles.keyboardContainerRow} >

        <TouchableHighlight onPress={btnClick_A}>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>A</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>S</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>D</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>F</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>G</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>H</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>J</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>K</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>L</Text>
            </View>
        </TouchableHighlight>

        </View>

        <View style={styles.keyboardContainerRow} >
          
        <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>Z</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>X</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>C</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>V</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>B</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>N</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight>
            <View style={styles.keyboardBtn}> 
              <Text style={styles.keyboardBtnText}>M</Text>
            </View>
        </TouchableHighlight>

        </View>

        <View style={styles.keyboardContainerRow} >
          
        <TouchableHighlight>
            <View style={styles.keyboardBtnDel}> 
              <Text style={styles.keyboardBtnText}>Delete</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight>
            <View style={styles.keyboardBtnEnt}> 
              <Text style={styles.keyboardBtnText}>Enter</Text>
            </View>
        </TouchableHighlight>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 'auto',
    height: 'auto',
    backgroundColor: '#1d1d1d',
    alignItems: 'center',
    justifyContent:'space-evenly',
  },

  headText: {
    color: '#fff',
    fontSize: 64,
    fontWeight: "700"
  },

  frame: {
    width: 310,
    height: 370,
    borderRadius: 13,
    backgroundColor: "#000000",
  },

  gridRow: {
    height: 50,
    width: 290,
    marginTop: 10,
    marginLeft: 10,
    // backgroundColor: "#fff",
    flexDirection: 'row'
  },

  gridItem: {
    width: 50,
    height: 50,
    backgroundColor: "#000000",
    borderWidth: 2,
    borderColor: "#1d1d1d",
    borderRadius: 13,
    marginRight: 10,
  },

  keyboardContainer: {
    alignItems: 'center',
    justifyContent:'center',
    // backgroundColor: "#FF0000",
  },

  keyboardContainerRow: {
    
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 5,
    flexDirection: 'row',
    // backgroundColor: "#FF0000",
  },

  keyboardBtn: {
    borderColor: "#1d1d1d",
    borderRadius: 4,
    backgroundColor: "#000000",
    marginRight: 3,
    marginLeft: 3,
    height: 60,
    width: 33,
    justifyContent: 'center',
    alignItems:'center'
  },

  keyboardBtnEnt: {
    borderColor: "#1d1d1d",
    borderRadius: 4,
    backgroundColor: "#008500",
    marginTop: 20,
    height: 40,
    width: 80,
    justifyContent: 'center',
    alignItems:'center'
  },
  
  keyboardBtnDel: {
    borderColor: "#1d1d1d",
    borderRadius: 4,
    backgroundColor: "#C60000",
    marginRight: 40,
    marginTop: 20,
    height: 40,
    width: 80,
    justifyContent: 'center',
    alignItems:'center'
  },

  keyboardBtnText: {
    color: "#fff",
    fontSize: 20,
  },

  spacer1: {
    height:-6
  }

});

// Define game functions
// get a word
function getWord() {
  const wordList = ['about','above','abuse','actor','acute','admit','adopt','adult','after','again','agent','agree','ahead','alarm','album','alert','alike','alive','allow','alone','along','alter','among','anger','Angle','angry','apart','arena','argue','arise','aside','asset','audio','audit','avoid','award','aware','badly','baker','bases','basic','basis','beach','began','begin','begun','being ','below','bench','billy','birth','black','blame','blind','block','board','bound','brain','brand','bread','break','breed','brief','bring','broad','broke','brown','build','built','buyer','cable','calif','catch','cause','chain','chair','chart','chase','cheap','check','chest','chief','child','china','chose','civil','claim','class','clean','clear','click','clock','close','coach','coast','could','count','court','cover','craft','crash','cream','crime','cross','crowd','crown','curve','cycle','daily','dance','dated','dealt','death','debut','delay','depth','doing','doubt','dozen','draft','drama','drawn','dream','dress','drill','drink','drive','drove','dying','eager','early','earth','eight','elite','empty','enemy','enjoy','enter','entry','equal','event','every','exact','exist','extra','faith','false','fault','fiber','field','fifth','fifty','fight','final','first','fixed','flash','fleet','fluid','focus','force','forth','forty','forum','found','frame','frank','fraud','fresh','front','fruit','fully','funny','giant','given','glass','globe','going','grace','grade','grand','grant','grass','great','green','gross','group','grown','guard','guess','guest','guide','heart','heavy','hence','henry','horse','hotel','house','human','ideal','image','index','inner','input','issue','japan','joint','jones','judge','known','label','large','laser','later','laugh','layer','learn','lease','least','leave','legal','level','lewis','light','limit','links','lives','local','logic','lower','lucky','lunch','lying','magic','major','maker','march','maria','match','maybe','mayor','meant','media','metal','might','minor','minus','mixed','model','money','month','moral','motor','mount','mouse','mouth','movie','music','needs','never','newly','night','noise','north','noted','novel','nurse','ocean','often','order','other','ought','paint','panel','paper','party','peace','peter','phase','phone','photo','piece','pilot','pitch','place','plain','plane','plant','plate','point','pound','power','press','price','pride','prime','print','prior','prize','proud','prove','quick','quiet','quite','radio','raise','range','rapid','ratio','reach','ready','refer','right','rival','river','robin','roger','roman','rough','round','route','royal','rural','scale','scene','scope','score','sense','serve','seven','shall','shape','share','sharp','shelf','shell','shift','shirt','shock','short','shown','sight','since','sixth','sixty','sized','skill','slide','small','smart','smile','smith','smoke','solid','solve','sound','south','space','spare','speak','spend','spent','split','spoke','sport','stage','stake','stand','start','state','steam','stick','still','stock','stone','store','storm','story','strip','stuck','study','style','sugar','suite','super','table','taken','taste','taxes','teach','texas','thank','theft','their','theme','there','these','thick','thing','think','third','those','threw','throw','tight','times','tired','title','today','topic','total','touch','tough','tower','track','trade','train','treat','trend','trial','tried','tries','truck','truly','trust','truth','twice','under','undue','union','unity','until','upset','urban','usage','usual','valid','value','video','virus','visit','vital','voice','waste','watch','water','where','which','while','white','whole','whose','woman','women','world','worse','worst','worth','would','wound','write','wrong','wrote','yield','young','youth']
  const wordNum = Math.round(Math.random() * wordList.length)
  const word1 = wordList[wordNum]
  const word = word1.toUpperCase()

  return word
}
var word = getWord()
var lose = true
var letterList = []
var win = false

var guessNum = 0
var spaceNum = 0

// Add letter to user guess
function addLetterToArr(letter) {
  letterList.push(letter)
}

// User enters letter
function addLetter(letter) {
  if (guessNum == 0) {
    if (spaceNum == 0) {
    }
  }
}

// Define button clicks
function btnClick_A() {
  addLetter('A')
}

function btnClick_B() {
  console.log('B')
}

function btnClick_C() {
  console.log('C')
}

function btnClick_D() {
  console.log('D')
}

function btnClick_E() {
  console.log('E')
}