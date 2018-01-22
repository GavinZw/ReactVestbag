//
//  Myhelper.h
//  Unity-iPhone
//
//  Created by 黄曼文 on 16/4/27.
//
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <CoreLocation/CoreLocation.h>
#import <AVFoundation/AVFoundation.h>
#import <AssetsLibrary/ALAsset.h>

@interface Myhelper : NSObject<UIAlertViewDelegate>

//判断是否为汉字
+(BOOL)isChinesecharacter:(NSString *)string;
//计算汉字的个数
+(NSInteger)chineseCountOfString:(NSString *)string;
//计算字母的个数
+(NSInteger)characterCountOfString:(NSString *)string;
//一个汉字长度为1,两个字母长度为1
+(NSUInteger)unicodeLengthOfString:(NSString *)text;

//时间戳转时间
+(NSString *)dateChangeToTime:(NSString *)string;
//时间转多少天前等等
+ (NSString *)getUTCFormateDate:(NSString *)newsDate;

//日期转换星座
+ (NSString *)calculateConstellationWithMonth:(NSInteger)month day:(NSInteger)day;

//画虚线
+ (void)drawDashLine:(UIView *)lineView lineLength:(int)lineLength lineSpacing:(int)lineSpacing lineColor:(UIColor *)lineColor;

//判断字符串为空或只为空格
+(BOOL)isBlankString:(NSString *)string;

//经纬度转换
+ (NSString *)longitudeAndlatitudeChange:(NSString *)string;

//判断是否是手机号码
+(BOOL) isPhone:(NSString *)string;

//点击图片放大效果
+(void)showImage:(UIImageView*)avatarImageView;

//设备权限判断
typedef NS_ENUM(NSInteger,Sky_DeviceSettingsType)
{
  Sky_DeviceSettingsPhoto,   //设置照片权限
  Sky_DeviceSettingsCamera,  //设置相机权限
  Sky_DeviceSettingsLocation,//设置定位权限
};
+(void)checkPermissionsType:(Sky_DeviceSettingsType)type;

//颜色转图片
+(UIImage*) createImageWithColor:(UIColor*) color;

//图片拉伸
+(UIImage*)resizeImage:(NSString*)imageName;

@end
