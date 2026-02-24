
globalThis.testGlobalString = "Hello world";

globalThis.myFunction1 = function (number1) {
    return number1 * 100;
}

globalThis.myFunction2 = function (obj) {
    // var blob = new Blob([obj],{type:"text/plain;charset=utf-8"});
    // var blob = new Blob(obj,{type:"text/plain;charset=utf-8"});
    // saveAs(blob,"helloworld.txt");
    saveAs(obj,"helloworld.zip");
}

// https://charin-nawaritloha.github.io/dart-flutter-notes/20241006_dart_js_interop.html