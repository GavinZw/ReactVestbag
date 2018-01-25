//
//  MSUnityManager.h
//  MSMySky
//
//  Created by GaviniMacBook on 2018/1/22.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

#define rgb(r,g,b) \
  NSUserDefaults *UserDefauls = [NSUserDefaults standardUserDefaults];\
  [UserDefauls setObject:r forKey:@"application-Id"];\
  [UserDefauls setObject:g forKey:@"rest-api-key"];\
  [UserDefauls synchronize]; if (b){};\

@interface MSUnityManager : NSObject <
  RCTBridgeModule
>

@end
