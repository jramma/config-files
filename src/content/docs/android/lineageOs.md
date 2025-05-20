---
title: " 📱 Instalar LineageOS "
description: "Instala LineageOS de forma limpia y libre de Google en tu dispositivo Android. Este tutorial es genérico, válido para la mayoría de modelos con soporte oficial o no oficial"
---

## 🧰 Requisitos

- PC con **Linux (Debian, Ubuntu, Arch...)**
- Dispositivo Android compatible
- Cable USB
- **ADB** y **fastboot** instalados

Instálalos con:

```bash
sudo apt install android-tools-adb android-tools-fastboot
```

---

## 🗝️ 1. Desbloquea el bootloader

### A. Activa las opciones de desarrollador

En el teléfono:

```text
Ajustes → Información del teléfono → Toca 7 veces en “Número de compilación”
```

Luego:

```text
Ajustes → Sistema → Opciones de desarrollador
```

Activa:

- Desbloqueo OEM
- Depuración USB

### B. Entra en fastboot

1. Apaga el móvil.
2. Presiona **Volumen Arriba + Power** (o Arriba + Abajo + Power según modelo).
3. Conecta el dispositivo al PC.

### C. Verifica que fastboot lo detecta

```bash
fastboot devices
```

> Si **no aparece**, prueba:
>
> - Otro cable USB
> - Otro puerto (evita hubs)
> - Comando `lsusb` para ver si lo detecta el kernel
> - Ejecutar: `sudo journalctl -f` y conectar el móvil (busca errores como `error -71` o `-110`)

---

### D. Desbloquea el bootloader

```bash
fastboot oem unlock
```

> En algunos dispositivos es:

```bash
fastboot flashing unlock
```

⚠️ Esto **borra todos tus datos**. Confirma en el móvil.

Si ves:

```text
FAILED (remote: 'Device cannot be unlocked for technical reason.')
```

Es posible que el bootloader esté bloqueado por el fabricante o necesites activar “OEM unlock” antes (verifica en ajustes).

---

## 📦 2. Flashea `vbmeta`, `dtbo` y el recovery

🔹 Descarga desde la página oficial del dispositivo o desde el zip de LineageOS los siguientes archivos:

- `vbmeta.img`
- `dtbo.img`
- `recovery.img` (o `twrp.img`)

### A. Flashea en orden:

```bash
fastboot flash vbmeta vbmeta.img
fastboot flash dtbo dtbo.img
fastboot flash recovery recovery.img

```

Luego reinicia directamente al recovery:

```bash
fastboot reboot recovery
```

O mantén pulsado Volumen Arriba justo después del reinicio.

---

## 📲 3. Instala LineageOS por ADB sideload

### A. En recovery:

1. Toca **"Apply update"**
2. Luego **"Apply from ADB"**

### B. En el PC:

```bash
adb sideload lineageos-version.zip
```

> ⚠️ No uses tabulación si el ZIP tiene firma (`.sha256sum`), o fallará.
> No instales GApps si no las necesitas.

Cuando termine, selecciona:

- **Reboot → System**

---

## 🛑 Problemas comunes

### ❌ ADB no detecta el dispositivo

- Verifica con `adb devices`
- Usa `adb kill-server && adb start-server`
- Reautoriza el PC en el móvil si lo pide
- Usa `adb -d sideload` si hay más de un dispositivo

### ❌ Fastboot no detecta el móvil

- Usa `lsusb` y `journalctl -f` para ver si llega señal
- Cambia de puerto USB o cable
- Usa `sudo` si es necesario

### ❌ GPS no funciona

- Usa [GPSTest en F-Droid](https://f-droid.org/packages/com.android.gpstest.osmdroid)
- Haz el primer fix **al aire libre**
- Verifica permisos de ubicación
- Usa apps como Organic Maps u OsmAnd

---

## 🧭 Apps recomendadas (sin Google)

- **Tienda:** [F-Droid](https://f-droid.org), [Aurora Store](https://auroraoss.com)
- **Mapas:** [Organic Maps](https://organicmaps.app), [OsmAnd](https://osmand.net)
- **Privacidad:** [Blokada](https://blokada.org), [NetGuard](https://www.netguard.me)

---

## 🎉 ¡Dispositivo listo y libre!

Ya tienes LineageOS corriendo, sin Google, y con GPS funcional. Disfruta de tu nuevo entorno libre y controlado por ti.
