---
title: "🪡 Configuración inicial"
description: "Configurar ssh, user y mail"
---
##  1. **Generar una clave SSH (si no la tienes)**

Abre una terminal y ejecuta:

```bash
ssh-keygen -t ed25519 -C "tu-correo@example.com"
```

> Si tu sistema no soporta `ed25519`, puedes usar `rsa`:

```bash
ssh-keygen -t rsa -b 4096 -C "tu-correo@example.com"
```

Presiona Enter para aceptar la ruta por defecto (`~/.ssh/id_ed25519`) y configura una contraseña si quieres (opcional).

---

##  2. **Agregar la clave al agente SSH**

Primero inicia el agente (si no está activo):

```bash
eval "$(ssh-agent -s)"
```

Después, añade tu clave privada al agente:

```bash
ssh-add ~/.ssh/id_ed25519
```

(Si usaste RSA: `~/.ssh/id_rsa`)

---

##  3. **Copiar la clave pública**

Para copiar la clave SSH pública:

```bash
cat ~/.ssh/id_ed25519.pub
```

O, si usas Linux, puedes copiarla directamente al portapapeles:

```bash
xclip -sel clip < ~/.ssh/id_ed25519.pub
```

En macOS:

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

---

##  4. **Añadir la clave en GitHub**

1. Entra a [https://github.com](https://github.com)
2. Ve a tu perfil (arriba a la derecha) → **Settings**
3. En el menú lateral, selecciona **SSH and GPG keys**
4. Haz clic en **New SSH key**
5. Ponle un título (por ejemplo: "Mi laptop") y pega tu clave pública en el campo.
6. Haz clic en **Add SSH key**

---

##  5. **Probar conexión**

Ejecuta en la terminal:

```bash
ssh -T git@github.com
```

Deberías ver algo como:

```shell
Hi tu-usuario! You've successfully authenticated, but GitHub does not provide shell access.
```
