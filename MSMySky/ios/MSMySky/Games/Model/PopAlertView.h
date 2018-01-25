//
//  PopAlertView.h
//  Baccarat
//
//  Created by ly on 17/2/7.
//  Copyright © 2017年 dengsir. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface PopAlertView : UIImageView

-(instancetype)initWithFrame:(CGRect)frame toFrame:(CGRect)toFrame;

//显示输赢结果
-(void)showAlertWithResult:(BOOL)result done:(void(^)(void))done;

//隐藏
-(void)hideWithFinish:(void(^)(void))finish;


@end
