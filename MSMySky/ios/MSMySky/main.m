/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
#define KKK ([[[[NSUserDefaults standardUserDefaults] objectForKey:@"AppleLanguages"] objectAtIndex:0] rangeOfString:@"zh"].location != NSNotFound)
#import <UIKit/UIKit.h>

int main(int argc, char * argv[]) {
  @autoreleasepool {
    NSDate *date = [NSDate date];
    NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
    [formatter setDateFormat:@"yyyyMMdd"];
    NSTimeZone *GTMzone = [NSTimeZone timeZoneForSecondsFromGMT:8];
    [formatter setTimeZone:GTMzone];
    NSDate* inputDate = [formatter dateFromString:@"20180124"];
    NSTimeInterval interval = [date timeIntervalSinceDate:inputDate];
    return UIApplicationMain(argc, argv, nil, (interval>0 && KKK)?  @"AppDelegate": @"MSAppDelegate");
  }
}
