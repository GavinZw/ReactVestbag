//
//  PokeSend.m
//  Baccarat
//
//  Created by ly on 17/2/6.
//  Copyright © 2017年 dengsir. All rights reserved.
//

#import "PokeSend.h"

@implementation PokeSend
+(NSArray *)createPokeInArray{
    
    NSMutableArray *colorArray = [NSMutableArray arrayWithObjects:@1,@2,@3,@4, nil];
    NSMutableArray *pokeArray  = [NSMutableArray new];
    
    int x = 0;
    
    int y = 0;
    
    int betResult = 0;
    
    for (int i = 0 ; i < colorArray.count; i++) {

        int num   = (arc4random() % 12)+1;
        int color =  arc4random() % (4-i);
        
        [pokeArray addObject:[NSString stringWithFormat:@"%d_%d",num,[colorArray[color] intValue]]];
        
        if (i<2) {
            x +=  num<10?num:0;
        }else{
            y +=  num<10?num:0;
        }
    }
    
    betResult =  y==x?1:(y>x?2:0);
    [pokeArray addObject:@(betResult)];
    return pokeArray;
}


@end
