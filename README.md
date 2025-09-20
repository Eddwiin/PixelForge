# PixelForge 🎨

PixelForge est un **éditeur d’images interactif dans le navigateur**, utilisant **Rust et WebAssembly** pour un traitement rapide et performant des pixels. Il permet d’appliquer des filtres et transformations en temps réel sur vos images, directement depuis votre navigateur, sans installation lourde.

---

## **💡 Objectif du projet**

PixelForge a pour but de :  
- Offrir une plateforme web légère pour manipuler des images.  
- Démontrer la puissance de Rust + WebAssembly pour le traitement d’images.  
- Permettre aux utilisateurs d’expérimenter des filtres et transformations en temps réel.  

C’est idéal pour :  
- Tester rapidement différents effets sur des images.  
- Explorer la combinaison Rust + WebAssembly + JavaScript.  
- Créer un point de départ pour des projets plus avancés de retouche ou de génération d’images.

---

## **🎛️ Fonctionnalités principales**

1. **Chargement d’images**
   - Glisser-déposer ou uploader une image PNG/JPG.
   - Support de tous les formats standards compatibles avec `<canvas>`.

2. **Filtres de couleurs**
   - Inversion des couleurs (RVB → couleurs complémentaires).
   - Niveau de gris (convertit l’image en nuances de gris).
   - Ajustement de la luminosité et du contraste.

3. **Filtres avancés**
   - Flou et netteté (blur / sharpen).
   - Filtre sépia.
   - Binarisation (seuil).

4. **Transformations géométriques**
   - Rotation.
   - Redimensionnement.
   - Flip horizontal / vertical.

5. **Visualisation interactive**
   - Comparaison image originale / image modifiée.
   - Sliders pour ajuster les paramètres des filtres en temps réel.
   - Application combinée de plusieurs filtres.

6. **Export et sauvegarde**
   - Télécharger l’image modifiée en PNG.
   - Sauvegarde des paramètres appliqués pour réutilisation.

---

## **⚙️ Installation et utilisation**

1. Clonez le projet :

```bash
git clone https://github.com/votre-utilisateur/PixelForge.git
cd PixelForge
```

2. Installer les dépendances javascript :

```bash
npm install
```

3. Installer les dépendances Rust:

```bash
cd /pixelforge_core
wasm-pack build --target web
```
4. lancer l'application:

```bash
npx vite // à la racine
