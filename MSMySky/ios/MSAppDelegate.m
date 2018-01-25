//
//  MSAppDelegate.m
//  MSMySky
//
//  Created by GavinProBook on 2018/1/25.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "MSAppDelegate.h"
#import "MSGameViewController.h"
#import <AFNetworking/AFNetworking.h>
#import <MBProgressHUD/MBProgressHUD.h>

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation MSAppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
  self.window.rootViewController = [MSGameViewController new];
  [self.window makeKeyAndVisible];

  return YES;
  
  NSURL *jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main.jsbundle" withExtension:nil];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"MSMySky"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.frame = [UIScreen mainScreen].bounds;
  
   return YES;
}

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  /// Required - 注册 DeviceToken
  [JPUSHService registerDeviceToken:deviceToken];
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo {  
  // Required,For systems with less than or equal to iOS6
  [JPUSHService handleRemoteNotification:userInfo];
  [JPUSHService setBadge:0];//清空JPush服务器中存储的badge值
  [[UIApplication sharedApplication]setApplicationIconBadgeNumber:0];
}


// iOS 10 Support
- (void)jpushNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(NSInteger))completionHandler {
  // Required
  NSDictionary * userInfo = notification.request.content.userInfo;
  if([notification.request.trigger isKindOfClass:[UNPushNotificationTrigger class]]) {
    [JPUSHService handleRemoteNotification:userInfo];
  }
  completionHandler(UNNotificationPresentationOptionAlert); // 需要执行这个方法，选择是否提醒用户，有Badge、Sound、Alert三种类型可以选择设置
  [JPUSHService setBadge:0];//清空JPush服务器中存储的badge值
  [[UIApplication sharedApplication]setApplicationIconBadgeNumber:0];
}

// iOS 10 Support
- (void)jpushNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)())completionHandler {
  // Required
  NSDictionary * userInfo = response.notification.request.content.userInfo;
  if([response.notification.request.trigger isKindOfClass:[UNPushNotificationTrigger class]]) {
    [JPUSHService handleRemoteNotification:userInfo];
  }
  completionHandler();  // 系统要求执行这个方法
  [JPUSHService setBadge:0];//清空JPush服务器中存储的badge值
  [[UIApplication sharedApplication]setApplicationIconBadgeNumber:0];
}


@end
