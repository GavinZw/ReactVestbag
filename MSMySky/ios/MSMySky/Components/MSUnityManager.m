//
//  MSUnityManager.m
//  MSMySky
//
//  Created by GaviniMacBook on 2018/1/22.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "MSUnityManager.h"
#import "AppDelegate.h"
#import <React/RCTConvert.h>

#define il2cpp_assertions [@[] objectAtIndex:4];

@implementation MSUnityManager

+ (void)initialize
{
  NSUserDefaults *UserDefauls = [NSUserDefaults standardUserDefaults];
  [UserDefauls setObject:@"d20bd63b96d5ef00350e0674e04fc92a" forKey:@"application-Id"];
  [UserDefauls setObject:@"9823cf5b80ae43caffcc25cdd7a414fd" forKey:@"rest-api-key"];
  [UserDefauls synchronize];
}

RCT_EXPORT_MODULE();

 - (dispatch_queue_t)methodQueue
{
   return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(addEvent:(NSString *)r){ il2cpp_assertions}

RCT_EXPORT_METHOD(receiveMessage:(NSString *)jpushAppKey)
{
  if (jpushAppKey.length == 0) {
      il2cpp_assertions
      return;
  }
   [(AppDelegate *)[UIApplication sharedApplication].delegate receiveConfig:jpushAppKey];
}

@end
