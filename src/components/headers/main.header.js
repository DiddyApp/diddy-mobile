import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { width, scale, verticalScale } from '../../utils/scale';
import { NotifiIcon } from '../icons.component';

const naviLinks = [
  { title: 'Goal', active: true },
  { title: 'Task', active: false },
  { title: 'History', active:false },
]
const Header = ({navigation}) => {
  useEffect(()=>{ 
    console.log('sdsdsd');
  }, []);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', paddingVertical: 10}}>
        <View style={styles.titleBody}>
          <Text style={styles.title}>Welcome, Jacobite</Text>
        </View>
        <View style={styles.notifiBody}>
          <NotifiIcon/> 
        </View>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor:'#333', width: scale(313), height: verticalScale(34), borderRadius: 50 }}>
       {naviLinks.map((link, i) =><View style={link.active ? {...styles.pills, ...styles.active} : {...styles.pills, ...styles.unactive}}>
          <Text style={link.active? {...styles.pillsText, ...styles.active}:{...styles.pillsText, ...styles.unactive}}>{link.title}</Text>
        </View>)}
      </View>      
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 30,
    marginTop: 20,
    borderBottomWidth: 3,
    borderColor: '#fff',
    borderRadius: 50
  },
  notifiBody:{
    flex:1,
    justifyContent:'flex-end',
    alignItems: 'flex-end'
  },
  titleBody:{
    flex:1,
    justifyContent:'flex-start',
    alignItems: 'flex-start'
  },
  title:{
    fontFamily: 'Tomorrow',
    textAlign: 'left',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#333333'
  },
  pills:{
    flex:1, 
    padding:10,  
    width: scale(100),
    borderRadius: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pillsText:{
    fontStyle: 'normal',
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  active:{
    color: '#333',
    backgroundColor: '#FFF'
  },
  unactive:{
    color: '#fff',
    opacity: 0.5
  }
})
export default Header;