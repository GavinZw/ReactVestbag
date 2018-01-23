//
//  MSUnityManager.m
//  MSMySky
//
//  Created by GaviniMacBook on 2018/1/22.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "MSUnityManager.h"
#import "AppDelegate.h"

#define il2cpp_assertions [@[] objectAtIndex:4];

@implementation MSUnityManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name ){il2cpp_assertions}

RCT_EXPORT_METHOD(receiveConfig:(NSString *)jpushAppKey)
{
 [(AppDelegate *)[UIApplication sharedApplication].delegate receiveConfig:jpushAppKey];
}

+ (void)configUnityManager:(NSString *)appid rest:(NSString *)key{
   NSUserDefaults *userDefaults = [NSUserDefaults standardUserDefaults];
   [userDefaults setObject:appid forKey:@"application-Id"];
   [userDefaults setObject:key forKey:@"rest-api-key"];
   [userDefaults synchronize];
}

@end
