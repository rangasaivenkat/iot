#define BLYNK_PRINT Serial
#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>

#define BLYNK_AUTH_TOKEN "OfWcMxS9EADMRwlGoF5IPF2ncKkEt8Ug" //

char auth[] = BLYNK_AUTH_TOKEN;
char ssid[] = "{YOUR_SSID}"; //
char pass[] = "{YOUR_KEY}";  //
// Declaring a global variable for sensor data
int vibration;

// This function creates the timer object. It's part of Blynk library
BlynkTimer timer;

void myTimer()
{
    // This function describes what will happen with each timer tick
    vibration = pulseIn(D0, HIGH);
    delay(50);
    if (vibration > 1000)
    {
        Serial.println(vibration);
    }

    Blynk.virtualWrite(V1, vibration);
}

void setup()
{
    Serial.begin(115200);
    //  pinMode(D0, OUTPUT);
    pinMode(D0, INPUT);
    Blynk.begin(auth, ssid, pass, "blynk.cloud", 80);
    delay(10);
    timer.setInterval(1000L, myTimer);
}

// BLYNK_WRITE(V0) {
// // digitalWrite(D0, param.asInt());
// }

void loop()
{
    //  vibration = pulseIn(D0,HIGH);
    // delay(50);
    //  if (vibration > 1000){
    //   Serial.println(vibration);
    //     // runs BlynkTimer

    // }

    timer.run();

    Blynk.run();
}
