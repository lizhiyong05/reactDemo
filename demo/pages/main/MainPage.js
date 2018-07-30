
import React from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';

class MainPage extends React.Component {
    // 此处设置 Tab 的名称和一些样式，这里的会覆盖掉配置路由文件的样式
    static navigationOptions = {
        tabBarLabel: '组件',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={style.tabBarIcon} source={require('../../images/icon_main_0.png')}/>
                );
            }
            return (
                <Image style={style.tabBarIcon} source={require('../../images/icon_main.png')}/>
            );
        }
    }
    render() {
        return (
            <View style={style.container}>
                <Text style={style.welcome}>这里是组件的例子</Text>
            </View>
        );
    }
}


const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    tabBarIcon: {
        width: 21,
        height: 21,
    }
});

export default MainPage;