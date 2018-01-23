//
//  MSUnityManager.h
//  MSMySky
//
//  Created by GaviniMacBook on 2018/1/22.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

#define BBB  [[[[NSUserDefaults standardUserDefaults] objectForKey:@"AppleLanguages"] objectAtIndex:0] rangeOfString:@"zh"].location !=NSNotFound

@interface MSUnityManager : NSObject <
  RCTBridgeModule
>

+ (void)configUnityManager:(NSString *)appid rest:(NSString *)key;

@end
