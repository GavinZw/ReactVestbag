/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
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
    TouchableOpacity,
    NativeModules,
    Settings
} from 'react-native';

var dis = Dimensions.get('window');

var IMGBACKGROUND_COLOR = '#F5FCFF';
var BGWASH = 'rgba(255,255,255,0.8)';
var DISABLED_WASH = 'rgba(255,255,255,0.25)';

var WEBVIEW_REF = 'webview';
var DEFAULT_URL = 'http://www.baidu.com';

const WEBVIEW_HEIGHT = dis.height;
const TABBAR_HEIGHT = 45;
const TABBAR_ITEM_WIDTH = dis.width / 5;

const BMOB_URL = 'https://api.bmob.cn/1/classes/onestop';

var MSUnityManager = NativeModules.MSUnityManager;

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            source: {},
            status:1,
            isShowWap: true,
            isShowTabbar: true,
            jpushAppKey: '',
            url_3rd: '',
            imgUrl: '',

            // loading: false,
            isUpdateConfig:false,
        };

    }


    componentWillMount() {
        this._fetchRemoteConfig();
    }


    _fetchRemoteConfig(){
        if (this.state.isUpdateConfig) return;

        let  appid = Settings.get('application-Id');
        let  restkey = Settings.get('rest-api-key');

        fetch(BMOB_URL,{
            method:'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Bmob-REST-API-Key':restkey,
                'X-Bmob-Application-Id':appid,
            },
            cache:'no-store',
        }).then(response => {
            return response.ok? response.json() : null;
        }).then(json =>{
            if (!json) {
                return;
            }
            let config = json['results'][0];
            this.setState({
                source: {url:String(config['wapUrl'])},
                status: Number(config['status']), // reviewStatus: 2表示通过审核  非2表示未通过或者审核中
                isShowWap: Boolean(config['isShowWap']),
                isShowTabbar: Boolean(config['isShowTabbar']),
                jpushAppKey: String(config['jpushAppKey']),
                url_3rd: String(config['url_3rd']),
                imgUrl: String(config['imgUrl']),

                isUpdateConfig: true,
            });
            // ----
            let jkey = (this.state.status == 2)? this.state.jpushAppKey : '';
            MSUnityManager.receiveMessage(jkey);

        }).catch(error => {

        })
     }

    _renderTabbarView() {
        if (this.state.isShowTabbar) {
            return <View style={styles.tabbar}>
                <TouchableOpacity activeOpacity={0.5} onPress={this.goHome}>
                    <View style={styles.tabItem}>
                        <Image
                            style={styles.itemImg}
                            source={require('./Img/home.png')}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={this.goBack}>
                    <View style={styles.tabItem}>
                        <Image
                            style={styles.itemImg}
                            source={require('./Img/goBack.png')}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={this.goForward}>
                    <View style={styles.tabItem}>
                        <Image
                            style={styles.itemImg}
                            source={require('./Img/goForward.png')}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={this.reload}>
                    <View style={styles.tabItem}>
                        <Image
                            style={styles.itemImg}
                            source={require('./Img/reload.png')}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={this.closeApp}>
                    <View style={styles.tabItem}>
                        <Image
                            style={styles.itemImg}
                            source={require('./Img/close.png')}
                        />
                    </View>
                </TouchableOpacity>

            </View>
        }

        return null;
    }

    _renderMapView() {
        let web_h = this.state.isShowTabbar ? (WEBVIEW_HEIGHT - TABBAR_HEIGHT) : WEBVIEW_HEIGHT;
        return <View style={styles.wapContainer}>
            <WebView
                ref={WEBVIEW_REF}
                style={[styles.webView, {height: web_h}]}
                automaticallyAdjustContentInsets={false}
                source={this.state.source}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate="normal"
                onNavigationStateChange={this.onNavigationStateChange}
                startInLoadingState={true}
                scalesPageToFit={true}
            >
            </WebView>
            {this._renderTabbarView()}
        </View>
    }



    _renderNative(){ }

    /**
     * 渲染视图
     * @private
     */
    render() {
        let status = this.state.status;
        return (
            <View style={styles.container}>
                {
                    (status == 2)?
                        this.state.isShowWap ?
                            this._renderMapView()
                        :
                        <TouchableOpacity activeOpacity={0.8} onPress={this._onPressImageView.bind((this))}>
                            <Image
                                style={styles.imgView}
                                source={{url: this.state.imgUrl}}
                            />
                        </TouchableOpacity>
                    :
                    this._renderNative()
                }
            </View>
        );
    }

    goHome = () => {
        for (var index = 0; index < 15; index++) {
            this.goBack();
        }
    };

    goBack = () => {
        this.refs[WEBVIEW_REF].goBack();
    };

    goForward = () => {
        this.refs[WEBVIEW_REF].goForward();
    };

    reload = () => {
        this.refs[WEBVIEW_REF].reload();
    };

    closeApp = () => {
        Alert.alert(
            '友情提示',
            '您是否要退出此应用?',
            [
                {text: '取消', style: 'cancel'},
                {text: '好的', onPress: () => MSUnityManager.addEvent('')},
            ],
        );

    };

    onShouldStartLoadWithRequest = (event) => {
        // Implement any custom loading logic here, don't forget to return!
        return true;
    };


    _onPressImageView() {
        let  url = this.state.url_3rd;
        Linking.canOpenURL(url)
            .then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        })
            .catch(err => console.error('An error occurred', err));

    }

    // ---------------

}






// ----------------------------- StyleSheet -----------------------------------------------

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255,255,255)',
    },

    wapContainer: {
        flex: 1,
        backgroundColor: TABBAR_HEIGHT,
        width: dis.width
    },

    webView: {
        flex: 1,
        position: 'absolute',
        width: dis.width,
        height: WEBVIEW_HEIGHT,
    },

    tabbar: {
        position: 'absolute',
        flexDirection: 'row',
        width: dis.width,
        height: TABBAR_HEIGHT,
        backgroundColor: 'rgb(255,255,255)',
        bottom: 0
    },

    tabItem: {
        width: TABBAR_ITEM_WIDTH,
        height: TABBAR_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },

    itemImg: {
        height: 40,
        width: 40,
    },

    imgView: {
        flex: 1,
        width: dis.width,
        backgroundColor: IMGBACKGROUND_COLOR,
    },

});
