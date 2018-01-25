//
//  PokeSend.h
//  Baccarat
//
//  Created by ly on 17/2/6.
//  Copyright © 2017年 dengsir. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface PokeSend : NSObject

+(NSArray *)createPokeInArray;

@property (nonatomic, copy) BOOL (^result)(void);

@end
