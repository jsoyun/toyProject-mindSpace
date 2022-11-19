import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';



const App = () => {

  const header = ['heading 1', 'heading 2', 'heading 3','heading 4']
    const data = [
        ['일','월', '화', '수','목','금','토'],
        ['gfg4', 'gfg5', 'gfg6'],
        ['gfg7', 'gfg8', 'gfg9']
  
    ]


  return (
    <ScrollView>
      <Text>jpeg가 안되네~!~!~</Text>
      <Text>Some more text</Text>
      <View style={{backgroundColor:'#0067a3',flexDirection: 'row'}}>
        
        <View style={{flex: 1}}>
        <Image source={require('../mindSpace/assets/images/지성셀카1.jpg')}  style={{width:200, height:200, borderRadius:100,  borderWidth: 2, borderColor: 'red', } } />

          </View>
          <View style={{flex: 1}}>
          <Image source={require('../mindSpace/assets/images/지성말풍선.jpg')}  style={{width:200, height:200,borderRadius:100, borderWidth: 2, borderColor: 'red',}} />

          </View>

  
      </View>
      <View>
<Image source={require('../mindSpace/assets/images/지성셀카2.jpg')}  style={{width:200, height:200,borderRadius:100}} />
        <Image source={require('../mindSpace/assets/images/지성셀카3.jpg')}  style={{width:200, height:200,borderRadius:100}} />

      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}

        placeholder='리덕스로 저장해야쥐~~'
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
    
        }}
        placeholder='그다음에 디비 써야쥐'
      />
         <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder='뭐할고야??'
      />

<View style={{ marginTop: 200 ,borderWidth: 2, borderColor: 'red'}}>
            <Text style={{ fontSize: 18,}}>
                GeeksforGeeks React Native Table</Text>
            <Table borderStyle={{ borderWidth: 2, 
                borderColor: '#c8e1ff' }}>
         
             <Row data={header} style={{borderWidth: 2, borderColor: 'red'}} />

                <Rows data={data} />

           
            </Table>
        </View>
        



    </ScrollView>
  );
}

export default App;