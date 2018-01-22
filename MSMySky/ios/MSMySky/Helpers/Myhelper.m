//
//  Myhelper.m
//  Unity-iPhone
//
//  Created by 黄曼文 on 16/4/27.
//
//

#import "Myhelper.h"

@implementation Myhelper

#pragma mark  是否有汉字,汉字个数,字母个数
//判断是否有汉字
+(BOOL)isChinesecharacter:(NSString *)string{
  if (string.length == 0) {
    return NO;    }
  unichar c = [string characterAtIndex:0];
  if (c >=0x4E00 && c <=0x9FA5)     {
    return YES;//汉字
  }     else     {
    return NO;//英文
  }
}
//计算汉字的个数
+(NSInteger)chineseCountOfString:(NSString *)string{
  int ChineseCount = 0;
  if (string.length == 0) {
    return 0;
  }
  for (int i = 0; i<string.length; i++) {
    unichar c = [string characterAtIndex:i];
    if (c >=0x4E00 && c <=0x9FA5)        {
      ChineseCount++ ;//汉字
    }
  }
  return ChineseCount;
}
//计算字母的个数
+(NSInteger)characterCountOfString:(NSString *)string{
  int characterCount = 0;
  if (string.length == 0) {
    return 0;
  }
  for (int i = 0; i<string.length; i++) {
    unichar c = [string characterAtIndex:i];
    if (c >=0x4E00 && c <=0x9FA5)        {
    }        else        {
      characterCount++;//英文
    }
  }
  return characterCount;
}
//一个汉字长度为1,两个字母长度为1
+(NSUInteger)unicodeLengthOfString:(NSString *)text{
  NSUInteger asciiLength = 0;
  
  for (NSUInteger i = 0; i < text.length; i++) {
    unichar uc = [text characterAtIndex: i];
    asciiLength += isascii(uc) ? 1 : 2;
  }
  NSUInteger unicodeLength = asciiLength / 2;
  if(asciiLength % 2) {
    unicodeLength++;
  }
  
  return unicodeLength;
}

#pragma mark 时间戳转时间
+(NSString *)dateChangeToTime:(NSString *)string{
  NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
  [dateFormatter setDateFormat:@"yyyy-MM-dd HH:mm"];
  NSDate *theday = [NSDate dateWithTimeIntervalSince1970:[string doubleValue]/1000];
  NSString *day = [dateFormatter stringFromDate:theday];
  
  return day;
}

#pragma mark  时间转多少天前等等
+ (NSString *)getUTCFormateDate:(NSString *)newsDate
{
  //    newsDate = @"2013-08-09 17:01";
  NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
  [dateFormatter setDateFormat:@"yyyy-MM-dd HH:mm"];
  //    NSLog(@"newsDate = %@",newsDate);
  
  NSDate *newsDateFormatted = [dateFormatter dateFromString:newsDate];
  NSTimeZone *timeZone = [NSTimeZone timeZoneWithName:@"UTC"];
  [dateFormatter setTimeZone:timeZone];
  
  NSDate* current_date = [[NSDate alloc] init];
  NSTimeInterval time=[current_date timeIntervalSinceDate:newsDateFormatted];//间隔的秒数
  int month    = ((int)time)/(3600*24*30);
  int days     = ((int)time)/(3600*24);
  int hours    = ((int)time)%(3600*24)/3600;
  int minute   = ((int)time)%(3600*24)/60;
  
  //    NSLog(@"time=%f",(double)time);
  
  NSString *dateContent;
  if(month!=0){
    dateContent = [NSString stringWithFormat:@"%i%@",month,@"个月前"];
  }else if(days!=0){
    dateContent = [NSString stringWithFormat:@"%i%@",days,@"天前"];
  }else if(hours!=0){
    dateContent = [NSString stringWithFormat:@"%i%@",hours,@"小时前"];
  }else if(minute > 1){
    dateContent = [NSString stringWithFormat:@"%i%@",minute,@"分钟前"];
  }else{
    dateContent = [NSString stringWithFormat:@"刚刚"];
  }
  
  return dateContent;
}


#pragma mark 日期转换星座
+ (NSString *)calculateConstellationWithMonth:(NSInteger)month day:(NSInteger)day
{
  NSString *astroString = @"魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
  NSString *astroFormat = @"102123444543";
  NSString *result;
  
  if (month<1 || month>12 || day<1 || day>31){
    return @"";
  }
  if(month==2 && day>29)
  {
    return @"";
  }
  else if(month==4 || month==6 || month==9 || month==11){
    if (day>30) {
      return @"";
    }
  }
  
  result=[NSString stringWithFormat:@"%@",[astroString substringWithRange:NSMakeRange(month*2-(day < [[astroFormat substringWithRange:NSMakeRange((month-1), 1)] intValue] - (-19))*2,2)]];
  
  return [NSString stringWithFormat:@"%@座",result];
}

#pragma mark 画虚线
+ (void)drawDashLine:(UIView *)lineView lineLength:(int)lineLength lineSpacing:(int)lineSpacing lineColor:(UIColor *)lineColor
{
  CAShapeLayer *shapeLayer = [CAShapeLayer layer];
  [shapeLayer setBounds:lineView.bounds];
  [shapeLayer setPosition:CGPointMake(CGRectGetWidth(lineView.frame) / 2, CGRectGetHeight(lineView.frame))];
  [shapeLayer setFillColor:[UIColor clearColor].CGColor];
  //  设置虚线颜色
  [shapeLayer setStrokeColor:lineColor.CGColor];
  //  设置虚线宽度
  [shapeLayer setLineWidth:CGRectGetHeight(lineView.frame)];
  [shapeLayer setLineJoin:kCALineJoinRound];
  //  设置线宽，线间距
  [shapeLayer setLineDashPattern:[NSArray arrayWithObjects:[NSNumber numberWithInt:lineLength], [NSNumber numberWithInt:lineSpacing], nil]];
  //  设置路径
  CGMutablePathRef path = CGPathCreateMutable();
  CGPathMoveToPoint(path, NULL, 0, 0);
  CGPathAddLineToPoint(path, NULL, CGRectGetWidth(lineView.frame), 0);
  [shapeLayer setPath:path];
  CGPathRelease(path);
  //  把绘制好的虚线添加上来
  [lineView.layer addSublayer:shapeLayer];
}

#pragma mark 判断字符串为空.只为空格
+(BOOL)isBlankString:(NSString *)string{
  if (string == nil) {
    return YES;
  }
  if (string == NULL) {
    return YES;
  }
  if ([string isKindOfClass:[NSNull class]]) {
    return YES;
  }
  
  //    if ([[string stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]] length]==0) {
  //        return YES;
  //    }
  return NO;
}

#pragma mark 经纬度转换

+ (NSString *)longitudeAndlatitudeChange:(NSString *)string
{
  if ( [string isKindOfClass:[NSString class]] && string.length > 0 && [string containsString:@"."]) {
    
    //度
    NSRange range = [string rangeOfString:@"."];
    NSString *dergee = [string substringToIndex:range.location];
    
    //分
    NSString *points = [string stringByReplacingOccurrencesOfString:dergee withString:@"0"];
    double point_new = [points doubleValue];
    point_new = point_new*60;
    points = [NSString stringWithFormat:@"%f",point_new];
    NSRange range_point = [points rangeOfString:@"."];
    points = [points substringToIndex:range_point.location];
    
    //秒
    NSString *second = [[NSString stringWithFormat:@"%f",point_new] stringByReplacingOccurrencesOfString:points withString:@"0"];
    double second_new = [second doubleValue];
    second_new = second_new*60;
    second = [NSString stringWithFormat:@"%f",second_new];
    NSRange range_second = [second rangeOfString:@"."];
    second = [second substringToIndex:range_second.location];
    
    return [NSString stringWithFormat:@"%@°%@′%@″",dergee,points,second];
  }
  
  return @" ";
}


#pragma mark 判断是否是手机号码
+(BOOL) isPhone:(NSString *)string{
  NSString *Regex = @"\\b(1)[345678][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]\\b";
  NSPredicate *phoneTest = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", Regex];
  return [phoneTest evaluateWithObject:string];
}


#pragma mark 点击图片放大效果
static CGRect oldframe;
+(void)showImage:(UIImageView *)avatarImageView{
  
  UIImage *image = avatarImageView.image;
  UIWindow *window = [UIApplication sharedApplication].keyWindow;
  UIView *backgroundView = [[UIView alloc]initWithFrame:CGRectMake(0,0,[UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.height)];
  
  oldframe = [avatarImageView convertRect:avatarImageView.bounds toView:window];
  backgroundView.backgroundColor = [UIColor blackColor];
  backgroundView.alpha = 0;
  UIImageView *imageView = [[UIImageView alloc]initWithFrame:oldframe];
  imageView.image = image;
  imageView.tag = 1;
  [backgroundView addSubview:imageView];
  [window addSubview:backgroundView];
  UITapGestureRecognizer *tap = [[UITapGestureRecognizer alloc]initWithTarget:self action:@selector(hideImage:)];
  [backgroundView addGestureRecognizer: tap];
  
  [UIView  animateWithDuration:0.3 animations:^{
    imageView.frame = CGRectMake(0,([UIScreen mainScreen].bounds.size.height-image.size.height*[UIScreen mainScreen].bounds.size.width/image.size.width)/2,[UIScreen mainScreen].bounds.size.width, image.size.height*[UIScreen mainScreen].bounds.size.width/image.size.width);
    backgroundView.alpha = 1;
  }
    completion:^(BOOL finished) {
  }];
}

+(void)hideImage:(UITapGestureRecognizer*)tap{
  
  UIView *backgroundView=tap.view;
  UIImageView *imageView=(UIImageView*)[tap.view viewWithTag:1];
  [UIView animateWithDuration:0.3 animations:^{
     imageView.frame = oldframe;
     backgroundView.alpha = 0;
  }
     completion:^(BOOL finished) {
     [backgroundView  removeFromSuperview];
  }];
}



#pragma mark 设备权限判断
+(void)checkPermissionsType:(Sky_DeviceSettingsType)type;
{
  if (type == Sky_DeviceSettingsPhoto) {
    
  }
  else if (type == Sky_DeviceSettingsCamera){
    NSString *mediaType = AVMediaTypeVideo;
    AVAuthorizationStatus authStatus = [AVCaptureDevice authorizationStatusForMediaType:mediaType];
    if(authStatus == ALAuthorizationStatusRestricted || authStatus == ALAuthorizationStatusDenied){
      UIAlertView *alertView = [[UIAlertView alloc]
                                initWithTitle:@"无法访问系统相机"
                                message:@"请在iPhone的设置->隐私->相机服务中，开启“我的天”的相机服务。"
                                delegate:self
                                cancelButtonTitle:@"取消"
                                otherButtonTitles: @"设置",nil];
      alertView.tag = 180;
      [alertView show];
    }
  }
  else if (type == Sky_DeviceSettingsLocation){
    
    if ([CLLocationManager authorizationStatus] == kCLAuthorizationStatusDenied){
      UIAlertView *alertView = [[UIAlertView alloc]
                                initWithTitle:@"无法获取定位服务"
                                message:@"请在iPhone的设置->隐私->定位服务中，开启“我的天”的定位服务。"
                                delegate:self
                                cancelButtonTitle:nil
                                otherButtonTitles: @"设置",nil];
      alertView.tag = 190;
      [alertView show];
      
    }
  }
}


+(void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex NS_DEPRECATED_IOS(2_0, 9_0);
{

}

#pragma mark 颜色转图片
+(UIImage*) createImageWithColor:(UIColor*) color
{
  CGRect rect=CGRectMake(0.0f, 0.0f, 1.0f, 1.0f);
  UIGraphicsBeginImageContext(rect.size);
  CGContextRef context = UIGraphicsGetCurrentContext();
  CGContextSetFillColorWithColor(context, [color CGColor]);
  CGContextFillRect(context, rect);
  UIImage *theImage = UIGraphicsGetImageFromCurrentImageContext();
  UIGraphicsEndImageContext();
  return theImage;
}

#pragma mark 图片拉伸
+(UIImage*)resizeImage:(NSString*)imageName
{
  UIImage *image = [UIImage imageNamed:imageName];
//  CGFloat imgeWidth = image.size.width *0.45;
//  CGFloat imgeHeight = image.size.height *0.45;
//  return [image stretchableImageWithLeftCapWidth:imgeWidth topCapHeight:imgeHeight];
  
  CGFloat top = image.size.height * 0.5;
  CGFloat left = image.size.width * 0.5;
  CGFloat bottom = image.size.height * 0.5;
  CGFloat right = image.size.width * 0.5;
  UIEdgeInsets edgeInsets = UIEdgeInsetsMake(top, left, bottom, right);
  return  [image resizableImageWithCapInsets:edgeInsets];
}

@end
