---
title: "🛰️ back to real GPS"
description: "El GPS sin google no usa wifis agenos para posicionar"
---

## 🛰️ Cómo funciona el GPS en Android

- El GPS puro usa **satélites** para triangulación de posición, funciona en exteriores.
- Android suele usar **servicios de localización de Google** (Google Location Services, Google Play Services) que complementan la señal GPS con:
  - WiFi cercanos
  - Torres de telefonía móvil
  - Bluetooth

Esto mejora la precisión y el tiempo de fix (la rapidez en obtener la posición), especialmente en interiores o en zonas urbanas.

---

## ❌ Problema al usar Android sin Google (por ejemplo, LineageOS sin GApps)

- Sin Google Play Services, la **localización por WiFi y redes** no funciona.
- El GPS puro solo funciona con línea directa satelital, por eso el GPS suele fallar o tardar mucho en interiores.
- Esto es normal y esperado.

---

## 🧪 Prueba real

- La app **GPSTest** funciona bien porque usa solo GPS puro y muestra la señal satelital.
- Apps basadas en Google o que requieren servicios Google pueden fallar o no obtener ubicación precisa.
- Para que el GPS funcione bien, **sal a exteriores con vista despejada al cielo** para que el receptor GPS capte satélites.

---

## 📲 Apps recomendadas para GPS sin Google

- [Organic Maps](https://organicmaps.app) (OpenStreetMap basado, sin Google)
- [OsmAnd](https://osmand.net) (Mapas offline y navegación)
- [GPSTest](https://f-droid.org/packages/com.android.gpstest.osmdroid) (Test satélites)

---

## 📌 Consejos para uso GPS sin Google

- Siempre activa **permisos de ubicación** en ajustes para la app.
- Sal a exteriores para primer fix.
- Ten paciencia, el primer fix puede tardar más.
- No uses redes WiFi o móviles como referencia, porque sin Google no las usa el sistema.
