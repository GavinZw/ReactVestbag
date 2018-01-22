//
//  AppDelegate+Service.h
//  MSMySky
//
//  Created by GaviniMacBook on 2018/1/22.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "AppDelegate.h"

#import <JPush/JPUSHService.h>
// iOS10注册APNs所需头文件
#ifdef NSFoundationVersionNumber_iOS_9_x_Max
#import <UserNotifications/UserNotifications.h>
#endif

@interface AppDelegate (Service) <
  JPUSHRegisterDelegate
>

- (void)ms13fun_registerServer:(NSString *)jpushAppKey;
- (void)ms13fun_resetApplicationIconBadgeNumber;

- (void)jpushNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(NSInteger))completionHandler;
- (void)jpushNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)(void))completionHandler;

@end
