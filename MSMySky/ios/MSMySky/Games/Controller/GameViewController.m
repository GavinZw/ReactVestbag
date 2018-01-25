//
//  GameViewController.m
//  Baccarat_Standalone
//
//  Created by RD-Gzh on 17/2/27.
//  Copyright © 2017年 dengsir. All rights reserved.
//

#import "GameViewController.h"

@interface GameViewController ()

@end

@implementation GameViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    UIWebView *webView = [[UIWebView alloc] initWithFrame:self.view.bounds];
    webView.autoresizingMask = UIViewAutoresizingFlexibleHeight | UIViewAutoresizingFlexibleWidth;
    webView.scrollView.bounces = NO;
    NSString *path = [[NSBundle mainBundle] bundlePath];
    NSURL *baseURL = [NSURL fileURLWithPath:path];
    NSString * htmlPath = [[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"];
    NSString * htmlCont = [NSString stringWithContentsOfFile:htmlPath encoding:NSUTF8StringEncoding error:nil];
  
  NSDictionary *source = @{@"html":[NSURL fileURLWithPath:[[NSBundle mainBundle] bundlePath]],
                           @"baseUrl":[NSString stringWithContentsOfFile:[[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"] encoding:NSUTF8StringEncoding error:nil]
                         };
  
    [webView loadHTMLString:htmlCont baseURL:baseURL];
    [self.view addSubview:webView];
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
