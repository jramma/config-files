---
title: " 🐚 Guía rápida: Instalar y configurar Bash-it en Debian"
description: "Instalar temas en bash"
---
## ✅ 1. Instalar Bash-it

```bash
git clone --depth=1 https://github.com/Bash-it/bash-it.git ~/.bash_it
~/.bash_it/install.sh
````

Durante la instalación, el script modificará tu `~/.bashrc` automáticamente para activar Bash-it.

---

## ✅ 2. Cambiar el tema (ejemplo: `metal`)

Edita tu archivo `~/.bashrc`:

```bash
nano ~/.bashrc
```

Busca esta línea:

```bash
export BASH_IT_THEME='bobby'
```

Y cámbiala por:

```bash
export BASH_IT_THEME='metal'
```

> Si no existe, añádela justo antes de esta línea:
>
> ```bash
> source $BASH_IT/bash_it.sh
> ```

---

## ✅ 3. Aplicar cambios

Recarga Bash con:

```bash
source ~/.bashrc
```

---

## ✅ 4. Ver temas disponibles

```bash
ls ~/.bash_it/themes
```

O para previsualizarlos:

```bash
bash-it show themes
```

---

## ✅ 5. Verificar tema actual

```bash
echo $BASH_IT_THEME
```

---

## 🎯 Notas adicionales

* Abre una nueva terminal para confirmar el nuevo tema.
* Asegúrate de estar usando Bash:

  ```bash
  echo $SHELL
  # Debe devolver /bin/bash
  ```



