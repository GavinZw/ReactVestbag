//
//  PopAlertView.m
//  Baccarat
//
//  Created by ly on 17/2/7.
//  Copyright © 2017年 dengsir. All rights reserved.
//

#import "PopAlertView.h"
#import "POP.h"
@implementation PopAlertView
{
    CGRect fromRect;
    CGRect toRect;
}

-(instancetype)initWithFrame:(CGRect)frame toFrame:(CGRect)toFrame{
    
    if (self = [super initWithFrame:frame]) {
        
        fromRect  = frame;
        toRect    = toFrame;
        self.contentMode = UIViewContentModeScaleAspectFit;
    }
    return self;
}

//显示输赢结果
-(void)showAlertWithResult:(BOOL)result done:(void (^)(void))done{
    
    self.image = [UIImage imageNamed:result?@"win":@"lose"];
    
    [self addPopAnimationWithView:self bounciness:18 springSpeed:13 fromFrame:fromRect toFrame:toRect];
    
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(1.5 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        
        [self hideWithFinish:^{
            done();
        }];
    });
}

//隐藏
-(void)hideWithFinish:(void (^)(void))finish{
    
    [self addPopAnimationWithView:self bounciness:10 springSpeed:20 fromFrame:toRect toFrame:fromRect];
    
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(0.5 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        finish();
    });
}

//弹窗动作
-(void)addPopAnimationWithView:(UIView *)view bounciness:(NSUInteger)bounciness springSpeed:(NSUInteger)springSpeed fromFrame:(CGRect)from toFrame:(CGRect)to{
    
    POPSpringAnimation *basicAnimation = [POPSpringAnimation animation];
    basicAnimation.property = [POPAnimatableProperty propertyWithName:kPOPViewFrame];
    basicAnimation.fromValue = [NSValue valueWithCGRect:from];
    basicAnimation.toValue=[NSValue valueWithCGRect:to];
    basicAnimation.springBounciness = bounciness;
    basicAnimation.springSpeed      = springSpeed;
    basicAnimation.delegate         = view;
    [view pop_addAnimation:basicAnimation forKey:@"POPAnimation"];
}

@end
