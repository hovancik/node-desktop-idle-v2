#include "../idle.h"
#import <CoreFoundation/CoreFoundation.h>
#import <AppKit/AppKit.h>

double getTime() {
  return CGEventSourceSecondsSinceLastEventType(kCGEventSourceStateHIDSystemState, kCGAnyInputEventType);
}

void start() {
  return;
}

void stop() {
  return;
}