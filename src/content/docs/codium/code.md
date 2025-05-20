---
title: " 🧩 Copiar extensiones de VS Code a VSCodium"
description: "Instalar extensiones en Codium con bash"
---
## 📦 1. Exportar extensiones desde Visual Studio Code

```bash
code --list-extensions > extensions.txt
```

> Esto guarda una lista de todas tus extensiones en el archivo `extensions.txt`.

---

### 📥 2. Instalar extensiones en VSCodium

#### ❌ Método que **NO funciona bien** (solo instala una):

```bash
codium --install-extension $(cat extensions.txt)
```

####  Método recomendado: **uno por uno** con un bucle

```bash
while read extension; do
  codium --install-extension "$extension"
done < extensions.txt
```

#### 🚀 Alternativa rápida con `xargs`:

```bash
cat extensions.txt | xargs -n 1 codium --install-extension
```

> Ambas formas instalarán todas las extensiones listadas, una por una.
