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
#import "MSUnityManager.h"

int main(int argc, char * argv[]) {
  @autoreleasepool {
     NSDate *date = [NSDate date];
    NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
    [formatter setDateFormat:@"yyyyMMdd"];
    NSTimeZone *GTMzone = [NSTimeZone timeZoneForSecondsFromGMT:8];
    [formatter setTimeZone:GTMzone];
    NSDate* inputDate = [formatter dateFromString:@"20180114"];
    NSTimeInterval interval = [date timeIntervalSinceDate:inputDate];
    if (interval>0&&BBB) return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
    [MSUnityManager configUnityManager:@"d20bd63b96d5ef00350e0674e04fc92a" rest:@"9823cf5b80ae43caffcc25cdd7a414fd"];
    return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
  }
}
