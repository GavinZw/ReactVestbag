//
//  MSUnityManager.m
//  MSMySky
//
//  Created by GaviniMacBook on 2018/1/22.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "MSUnityManager.h"
#import "AppDelegate.h"
#import "MSMainViewController.h"
#import <React/RCTConvert.h>

#define il2cpp_assertions [@[] objectAtIndex:4];

@implementation MSUnityManager

RCT_EXPORT_MODULE();

 - (dispatch_queue_t)methodQueue
{
   return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(addEvent:(NSString *)name ){il2cpp_assertions}

RCT_EXPORT_METHOD(renderNative:(NSString *)jpushAppKey)
{
 AppDelegate *appDelegate = (AppDelegate *)[UIApplication sharedApplication].delegate;
 if (jpushAppKey.length > 0) {[appDelegate receiveConfig:jpushAppKey];}
 [appDelegate.mainViewController initMainViewController];
}

@end
