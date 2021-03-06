//
//  MSAppDelegate.h
//  MSMySky
//
//  Created by GavinProBook on 2018/1/25.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
// 引入JPush功能所需头文件
#import "JPUSHService.h"
// iOS10注册APNs所需头文件
#ifdef NSFoundationVersionNumber_iOS_9_x_Max
#import <UserNotifications/UserNotifications.h>
#endif

@interface MSAppDelegate : UIResponder <
 UIApplicationDelegate,
 JPUSHRegisterDelegate
>

@property (strong, nonatomic) UIWindow *window;

@end
