//
//  MSMainViewController.m
//  MSMySky
//
//  Created by GaviniMacBook on 2018/1/24.
//  Copyright © 2018年 Facebook. All rights reserved.
//

/**
  UIWebView *webView = [[UIWebView alloc] initWithFrame:self.view.bounds];
  webView.autoresizingMask = UIViewAutoresizingFlexibleHeight | UIViewAutoresizingFlexibleWidth;
  webView.scrollView.bounces = NO;
  NSString *path = [[NSBundle mainBundle] bundlePath];
  NSURL *baseURL = [NSURL fileURLWithPath:path];
  NSString * htmlPath = [[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"];
  NSString * htmlCont = [NSString stringWithContentsOfFile:htmlPath encoding:NSUTF8StringEncoding error:nil];
  [webView loadHTMLString:htmlCont baseURL:baseURL];
 [self.view addSubview:webView];
*/

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#import "MSMainViewController.h"

@interface MSMainViewController ()

@property (nonatomic, strong) UIWebView *webView;

@property (nonatomic, assign) BOOL loadMainView;

@end

@implementation MSMainViewController {
  UIWebView *_webView;
}

+ (void)initialize
{
  NSString *baseURL = [NSURL fileURLWithPath:[[NSBundle mainBundle] bundlePath]].absoluteString;
  NSString *html = [NSString stringWithContentsOfFile:[[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"] encoding:NSUTF8StringEncoding error:nil];
  [[NSUserDefaults standardUserDefaults] setObject:@{@"baseUrl":baseURL, @"html":html} forKey:@"web-source"];
}

//- (void)setLoadMainView:(BOOL)loadMainView{
//  if (_loadMainView == loadMainView) {
//      return;
//  }
//  _loadMainView = loadMainView;
//    
//  if (loadMainView) {
//    [_webView removeFromSuperview];
//    _webView = nil;
//    return;
//  }
//
//
//  
//  _webView = webView;
//}

- (void)loadView{
  NSURL *jsCodeLocation;
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
//   jsCodeLocation = [NSURL URLWithString:@"http://192.168.1.223:8081/index.bundle?platform=ios&dev=true"];
//  jsCodeLocation = [NSURL URLWithString:[[NSBundle mainBundle] pathForResource:@"main.jsbundle" ofType:nil]];
 

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"MSMySky"
                                               initialProperties:nil
                                                   launchOptions:nil];
  rootView.frame = [UIScreen mainScreen].bounds;
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  
  self.view = rootView;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.

}

- (void)initMainViewController{
//  self.loadMainView = rm;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
