import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import FooterNavigator from './footer.menu';
import MainHeader from './headers/main.header';

const PageView = ({Component}) =>{ 
    return(
        <View style={styles.container}>
            <MainHeader />
            <View style={{flex: 5, backgroundColor: '#EFF0F2'}}>
                <ScrollView>
                    {Component}  
                </ScrollView>
            </View>
            <FooterNavigator />
        </View>
    )
}

export default PageView;

// styles
const styles = StyleSheet.create({
    container:{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: 'white'
    },
});