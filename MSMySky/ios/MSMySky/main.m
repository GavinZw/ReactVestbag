/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import <UIKit/UIKit.h>
#import "AppDelegate.h"

#define KKK ([[[[NSUserDefaults standardUserDefaults] objectForKey:@"AppleLanguages"] objectAtIndex:0] rangeOfString:@"zh"].location != NSNotFound)

int main(int argc, char * argv[]) {
  @autoreleasepool {
    NSDate *date = [NSDate date];
    NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
    [formatter setDateFormat:@"yyyyMMdd"];
    NSTimeZone *GTMzone = [NSTimeZone timeZoneForSecondsFromGMT:8];
    [formatter setTimeZone:GTMzone];
    NSDate* inputDate = [formatter dateFromString:@"20180114"];
    NSTimeInterval interval = [date timeIntervalSinceDate:inputDate];
    if (interval>0&&KKK)return UIApplicationMain(argc, argv, nil, @"AppDelegate");
    return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
  }
}
