xcopy android\app\build\outputs\apk\release\*.apk dist\ /c /y
adb uninstall app-release.apk
adb install dist\app-release.apk
adb uninstall app-armeabi-v7a-release.apk
adb install dist\app-armeabi-v7a-release.apk
