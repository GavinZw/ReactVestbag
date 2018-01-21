/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView,
  Dimensions,
  Alert,
  Image,
  Linking,
  TouchableHighlight
} from 'react-native';

var dis = Dimensions.get('window');

var IMGBACKGROUND_COLOR = '#F5FCFF';
var BGWASH = 'rgba(255,255,255,0.8)';
var DISABLED_WASH = 'rgba(255,255,255,0.25)';

var WEBVIEW_REF = 'webview';
var DEFAULT_URL = 'http://www.baidu.com';
var BACKGROUND_URL = 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1516525219&di=8d42d3c262c53f70075da45989d297d6&src=http://img5.duitang.com/uploads/item/201411/09/20141109003726_44KAY.jpeg';

const WEBVIEW_HEIGHT = dis.height;
const TABBAR_HEIGHT = 60;
const TABBAR_ITEM_WIDTH = dis.width/5;


var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';


export default class App extends Component {

  state = {
    url: DEFAULT_URL,
    backButtonEnabled: false,
    forwardButtonEnabled: false,
    loading: true,
    scalesPageToFit: true,
    isShowWap:true,
    isShowTabbar:true,
  };

  componentWillMount(){
    // console.log('***1*********');
    //当前时间
    var nowTime = (new Date());
    console.log(nowTime.valueOf());
    console.log('***2*********');
  }

  _onPressImageView(){
Alert.alert('fadfasdf','fsdafasdfasdf')
  }

  _renderTabbarView(){
    if(this.state.isShowTabbar ){
      return <View  style={styles.tabbar}>  
                <TouchableHighlight onPress={this._onPressImageView}>
                <View style={styles.tabItem}>
                   <Image 
                    style={styles.itemImg}
                    source={{uri: base64Icon}}
                    />
                </View>               
                </TouchableHighlight>

                <TouchableHighlight onPress={this._onPressImageView}>
                <View style={styles.tabItem}>
                   <Image 
                    style={styles.itemImg}
                    source={{uri: base64Icon}}
                    />
                </View>               
                </TouchableHighlight>

                <TouchableHighlight onPress={this._onPressImageView}>
                <View style={styles.tabItem}>
                   <Image 
                    style={styles.itemImg}
                    source={{uri: base64Icon}}
                    />
                </View>               
                </TouchableHighlight>

                <TouchableHighlight onPress={this._onPressImageView}>
                <View style={styles.tabItem}>
                   <Image 
                    style={styles.itemImg}
                    source={{uri: base64Icon}}
                    />
                </View>               
                </TouchableHighlight>

                <TouchableHighlight onPress={this._onPressImageView}>
                <View style={styles.tabItem}>
                   <Image 
                    style={styles.itemImg}
                    source={{uri: base64Icon}}
                    />
                </View>               
                </TouchableHighlight>
                
             </View>
    } 

    return null;
  }

  _renderMapView(){
    let web_h = this.state.isShowTabbar?  (WEBVIEW_HEIGHT - TABBAR_HEIGHT) :WEBVIEW_HEIGHT;

    return <View style={styles.wapContainer}>
               <WebView 
                  ref={WEBVIEW_REF}
                  style={[styles.webView,{height:web_h}]}
                  automaticallyAdjustContentInsets={false}          
                  source={{uri: this.state.url}}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  decelerationRate="normal"
                  renderError={this.renderError}
                  onNavigationStateChange={this.onNavigationStateChange}   
                  startInLoadingState={true}
                  scalesPageToFit={this.state.scalesPageToFit}
              > 
              </WebView>
              {this._renderTabbarView()}
          </View>
  }

  render() {
    return (
      <View  style={styles.container}>
      {
        this.state.isShowWap?
        this._renderMapView()
       :
        <TouchableHighlight onPress={this._onPressImageView}>
          <Image 
            style={styles.imgView}
            source= {{url: BACKGROUND_URL}}
            />
        </TouchableHighlight>
      }
       </View>
    );
  }

  goBack = () => {
    this.refs[WEBVIEW_REF].goBack();
  };

  goForward = () => {
    this.refs[WEBVIEW_REF].goForward();
  };

  reload = () => {
    this.refs[WEBVIEW_REF].reload();
  };

  onShouldStartLoadWithRequest = (event) => {
    // Implement any custom loading logic here, don't forget to return!
    return true;
  };

  renderError = () => {
    Alert.alert(
      '请检查网络',
      '请检查您的网络是否正常,谢谢!',
      [
        {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: '好的', onPress: () => console.log('OK Pressed')},
      ],
    );
  };

  _onPressImageView(){
    Alert.alert(
      '请检查网络',
      '请检查您的网络是否正常,谢谢!',
      [
        {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: '好的', onPress: () => Linking.openURL(DEFAULT_URL)},
      ],
    );
  }

  // ---------------

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  wapContainer:{
    flex: 1,           
    backgroundColor: TABBAR_HEIGHT,    
    width:dis.width
  },
  
  webView:{
    flex: 1,  
    position:'absolute',  
    width:dis.width,
    height:WEBVIEW_HEIGHT,
  },

  tabbar:{
    position:'absolute', 
    flexDirection:'row',
    width:dis.width,
    height:TABBAR_HEIGHT,   
    backgroundColor: IMGBACKGROUND_COLOR, 
    bottom:0
  },

  tabItem:{
    flex:1,
    width:TABBAR_ITEM_WIDTH,
    height:TABBAR_HEIGHT, 
  },

  itemImg:{
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imgView:{
    flex: 1,
    width:dis.width,
    backgroundColor: IMGBACKGROUND_COLOR,
  },

});
