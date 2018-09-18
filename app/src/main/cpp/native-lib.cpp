#include <jni.h>
#include <string>
#include <cstdlib>
#include <chrono>

/* Just a note, extern means the variable is defined somewhere else so the compiler does not tweak*/


extern "C" JNIEXPORT jstring

JNICALL
Java_com_example_a811955_nkcbusinesscounciltestapp_MainActivity_stringFromJNI(
        JNIEnv *env,
        jobject /* this */) {
    std::string hello = "Welcome to the North Kansas City Business Council Application ";
    return env->NewStringUTF(hello.c_str());
}
