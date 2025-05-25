---
title: "Ajustes Kodak"
description: "Para darktable"
---

## Ajustes generales

- **Exposure**: +0.56
- **Contrast**: 0
- **Highlights**: -15
- **Shadows**: +15
- **Whites**: -10
- **Blacks**: +25

- **Texture**: +11
- **Clarity**: -19
- **Dehaze**: +24

- **Tint**: -16

### Grano (Film Grain)

- **Strength (Grain)**: 21
- **Size**: 25
- **Roughness**: 40

---

## Ajustes de color

### Rojo (Red)

- **Hue**: +20
- **Saturation**: -10
- **Luminance**: -5

### Naranja (Orange)

- **Hue**: 0
- **Saturation**: +5
- **Luminance**: -5

### Amarillo (Yellow)

- **Hue**: +20
- **Saturation**: -10
- **Luminance**: -4

### Verde (Green)

- **Hue**: +18
- **Saturation**: -25
- **Luminance**: -20

### Aguamarina (Aqua)

- **Hue**: 0
- **Saturation**: -20
- **Luminance**: 0

### Azul (Blue)

- **Hue**: -15
- **Saturation**: -30
- **Luminance**: -25

### Púrpura (Purple)

- **Hue**: +30
- **Saturation**: -25
- **Luminance**: +20

### Rosa (Pink)

- **Hue**: +50
- **Saturation**: -35
- **Luminance**: +20

## Darktable .dstyle

```xml
<?xml version="1.0" encoding="UTF-8"?>
<darktable_style>
  <style_name>Ajustes Kodak</style_name>
  <description>Simulación estilo Kodak para Darktable</description>
  <version>1</version>
  <module>
    <operation>exposure</operation>
    <params>0.56</params>
  </module>
  <module>
    <operation>toneequal</operation>
    <params>0;-15;15;-10;25</params>
  </module>
  <module>
    <operation>contrastbrightnesssaturation</operation>
    <params>1.0;1.0;1.0</params>
  </module>
  <module>
    <operation>colorzones</operation>
    <params>
      <!-- Este módulo necesita una matriz que define ajustes por canal.
           Aquí solo representamos intención: deberás hacerlo desde Darktable
           para tener los valores exactos serializados -->
    </params>
  </module>
  <module>
    <operation>grain</operation>
    <params>21;25;40</params>
  </module>
  <module>
    <operation>colorbalance</operation>
    <params>-16;0;0</params>
  </module>
  <module>
    <operation>haze_removal</operation>
    <params>24</params>
  </module>
  <module>
    <operation>local_contrast</operation>
    <params>11;-19</params>
  </module>
</darktable_style>
```
